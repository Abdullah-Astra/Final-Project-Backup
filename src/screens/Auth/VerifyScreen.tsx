import React, { useState, useRef, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, Keyboard, Dimensions } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './VerifyScreenStyle';
import styles1 from '../../styles/style';
import CustomButton from '../../components/CustomButton';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation, RouteProp } from '@react-navigation/native';
import api from '../../apis/api';

type RootStackParamList = {
    VerifyScreen: { email: string };
    LoginScreen: undefined;
};

type VerifyScreenRouteProp = RouteProp<RootStackParamList, 'VerifyScreen'>;

type Props = {
    route: VerifyScreenRouteProp;
};

export default function VerifyScreen({ route }: Props) {
    const [code, setCode] = useState(["", "", "", "", "", ""]);
    const [timer, setTimer] = useState(59); // Set the timer to 59
    const [isVerifying, setIsVerifying] = useState(false);
    const email = route.params.email;

    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

    // Get screen width for responsiveness
    const { width } = Dimensions.get('window');

    // Create an array of refs for each input field
    const inputRefs = useRef<(TextInput | null)[]>([]);

    useEffect(() => {
        // Start the timer when the component mounts
        const interval = setInterval(() => {
            setTimer((prevTimer) => {
                if (prevTimer <= 1) {
                    clearInterval(interval); // Clear the interval when the timer reaches 0
                    return 0;
                }
                return prevTimer - 1;
            });
        }, 1000); // Update the timer every second

        // Cleanup the interval when the component unmounts
        return () => clearInterval(interval);
    }, []); // Empty dependency array ensures it runs only once on mount

    const handleVerify = async () => {
        const verificationCode = code.join("");

        if (verificationCode.length !== 6) {
            Alert.alert("Error", "Please enter a valid 6-digit code.");
            return;
        }

        setIsVerifying(true);

        try {
            const response = await api.post('/api/v2/auth/verify', { email, verificationCode });

            if (response.data.status == "success") {
                Alert.alert("Success", response.data.message);
                navigation.navigate("LoginScreen");
            } else {
                Alert.alert("Error", response.data?.message || "Verification failed.");
            }
        } catch (error: any) {
            Alert.alert("Error", error.response?.data?.message || "Something went wrong.");
            console.error("Verification Error:", error);
        } finally {
            setIsVerifying(false);
        }
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={()=> {navigation.goBack()}} style={styles.backButton}>
                <Ionicons name="arrow-back" size={24} color="white" />
            </TouchableOpacity>

            <Text style={styles.title}>
                <Text style={styles.boldText}>Sign Up</Text> / <Text style={styles.lightText}>Login</Text>
            </Text>

            <View style={styles.fields}>
                <Text style={styles.subtitle1}>Verify your Email to Get Started</Text>
                <Text style={styles1.description}>
                    Type the code we have just sent you on {' '}
                    <Text style={styles.email}>{email}</Text>
                </Text>

                <View style={styles.otpContainer}>
                    {code.map((digit, index) => (
                        <TextInput
                            key={index}
                            ref={(el) => {
                                if (el) inputRefs.current[index] = el;
                            }}
                            style={[styles.otpInput, {
                                width: width < 375 ? 45 : 50,
                                height: width < 375 ? 45 : 50,
                            }]}
                            keyboardType="numeric"
                            maxLength={1}
                            value={digit}
                            onChangeText={(text) => {
                                let newCode = [...code];
                                newCode[index] = text;
                                setCode(newCode);

                                if (text && index < 5) {
                                    inputRefs.current[index + 1]?.focus();
                                } else if (index === 5) {
                                    Keyboard.dismiss();
                                }
                            }}
                            onKeyPress={({ nativeEvent }) => {
                                if (nativeEvent.key === "Backspace" && index > 0) {
                                    inputRefs.current[index - 1]?.focus();
                                }
                            }}
                        />
                    ))}
                </View>

                <CustomButton text="Verify" onPress={handleVerify} />

                <TouchableOpacity style={styles.resendButton} disabled={timer > 0}>
                    <Text style={styles.resendButtonText}>
                        Resend Code {timer > 0 ? `(${timer}s)` : ""}
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
