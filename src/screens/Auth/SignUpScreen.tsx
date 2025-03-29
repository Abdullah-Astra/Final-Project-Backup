import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import styles from './SignUpScreenStyle';
import ColoredButton from '../../components/ColoredButton';
import api from '../../apis/api';
import CustomButton from '../../components/CustomButton';

type RootStackParamList = {
    VerifyScreen: { email: string };
    SignUpScreen: undefined;
};

export default function SignUpScreen() {


    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordVisible, setPasswordVisible] = useState(true);
    const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(true);
    const [isEnabled, setIsEnabled] = useState(false);
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        if (email.trim() !== '' && password.trim() !== '' && confirmPassword.trim() !== '') {
            setIsEnabled(true);
        } else {
            setIsEnabled(false);
        }
    }, [email, password, confirmPassword]);

    const validateInputs = () => {
        if (!email.includes('@') || !email.includes('.')) {
            Alert.alert('Invalid Email', 'Please enter a valid email address.');
            return false;
        }
        if (password.length < 6) {
            Alert.alert('Weak Password', 'Password must be at least 6 characters long.');
            return false;
        }
        if (password !== confirmPassword) {
            Alert.alert('Error', 'Passwords do not match.');
            return false;
        }

        return true;
    };

    const handlePress = async () => {
        if (!validateInputs()) return;

        setIsEnabled(false);
        setLoading(true);

        const userData = { email, password };

        try {
            const response = await api.post('/api/v2/auth/signup', userData);

            if (response.data.status == "success") {
                Alert.alert('Success', response.data.message);
                navigation.navigate('VerifyScreen', { email });
            } else {
                Alert.alert('Error', response.data.message);
            }
        } catch (error: any) {
            if (error.response) {
                Alert.alert('Error', error.response.data.message || 'Something went wrong on the server.');
            } else if (error.request) {
                Alert.alert('Error', 'No response from the server. Please try again later.');
            } else {

                Alert.alert('Error', 'An unexpected error occurred. Please try again.');
            }
            console.error('Signup Error:', error);
        } finally {
            setIsEnabled(true);
            setLoading(false);
        }
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                <Ionicons name="arrow-back" size={24} color="white" />
            </TouchableOpacity>
            <Text style={styles.title}>
                <Text style={styles.boldText}>Sign Up</Text> / <Text style={styles.lightText}>Login</Text>
            </Text>
            <View style={styles.fields}>
                <Text style={styles.subtitle}>Join us and Secure your digital Identity</Text>
                <Text style={styles.description}>Create your account to tokenize your ID</Text>

                {/* Email Field */}
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Email</Text>
                    <View style={styles.inputWrapper}>
                        <TextInput
                            style={styles.input}
                            placeholder="Enter your email"
                            placeholderTextColor="#bbb"
                            value={email}
                            onChangeText={setEmail}
                            keyboardType="email-address"
                            autoCapitalize="none"
                        />
                        <Ionicons name="mail-outline" size={20} color="#bbb" />
                    </View>
                </View>

                {/* Password Field */}
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Password</Text>
                    <View style={styles.inputWrapper}>
                        <TextInput
                            style={styles.input}
                            placeholder="Create a strong Password"
                            placeholderTextColor="#bbb"
                            secureTextEntry={passwordVisible}
                            value={password}
                            onChangeText={setPassword}
                        />
                        <TouchableOpacity onPress={() => setPasswordVisible(!passwordVisible)}>
                            <Ionicons name={passwordVisible ? 'eye-off-outline' : 'eye-outline'} size={20} color="#bbb" />
                        </TouchableOpacity>
                    </View>
                </View>

                {/* Confirm Password Field */}
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Re-Type Password</Text>
                    <View style={styles.inputWrapper}>
                        <TextInput
                            style={styles.input}
                            placeholder="Type your password again"
                            placeholderTextColor="#bbb"
                            secureTextEntry={confirmPasswordVisible}
                            value={confirmPassword}
                            onChangeText={setConfirmPassword}
                        />
                        <TouchableOpacity onPress={() => setConfirmPasswordVisible(!confirmPasswordVisible)}>
                            <Ionicons name={confirmPasswordVisible ? 'eye-off-outline' : 'eye-outline'} size={20} color="#bbb" />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

            {loading ? (
                <ActivityIndicator size="large" color="gold" />
            ) : (
                <CustomButton text="Continue" onPress={handlePress} />
            )}
        </View>
    );
}
