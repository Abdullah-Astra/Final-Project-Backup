import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import styles from './SignUpScreenStyle';
import styles1 from '../Initial/GetStartedScreenStyle';
import CustomButton from '../../components/CustomButton';
import api from '../../apis/api';

type RootStackParamList = {
    ProfileScreen: undefined;
    SignUpScreen: undefined;
};

export default function LoginScreen() {
    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordVisible, setPasswordVisible] = useState(true);
    const [loading, setLoading] = useState(false);

    const handleLogin = async () => {
        if (!email || !password) {
            Alert.alert("Error", "Please enter both email and password.");
            return;
        }

        setLoading(true);
        try {
            const response = await api.post('/api/v2/auth/login', { email, password });

            if (response.data.status == "success") {
                const userId = response.data.data.id;
                
                // Store userId & email in AsyncStorage
                await AsyncStorage.setItem('userId', userId);
                await AsyncStorage.setItem('email', email);

                Alert.alert("Success", response.data.message);
                navigation.navigate('ProfileScreen');
            } else {
                Alert.alert("Error", response.data?.message || "Login failed.");
            }
        } catch (error: any) {
            Alert.alert("Error", error.response?.data?.message || "Something went wrong.");
            console.error("Login Error:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                <Ionicons name="arrow-back" size={24} color="white" />
            </TouchableOpacity>
            <Text style={styles.title}>
                <Text style={styles.lightText}>Sign Up</Text> / <Text style={styles.boldText}>Login</Text>
            </Text>
            <View style={styles.fields}>
                <Text style={styles.subtitle}>Welcome Back!</Text>
                <Text style={styles.description}>
                    Enter your credentials to securely access your account and stay in control of your tokenized data.
                </Text>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Email</Text>
                    <View style={styles.inputWrapper}>
                        <TextInput
                            style={styles.input}
                            placeholder="Enter your email"
                            placeholderTextColor="#bbb"
                            keyboardType="email-address"
                            autoCapitalize="none"
                            value={email}
                            onChangeText={setEmail}
                        />
                        <Ionicons name="mail-outline" size={20} color="#bbb" />
                    </View>
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Password</Text>
                    <View style={styles.inputWrapper}>
                        <TextInput
                            style={styles.input}
                            placeholder="Enter your password"
                            placeholderTextColor="#bbb"
                            secureTextEntry={passwordVisible}
                            value={password}
                            onChangeText={setPassword}
                        />
                        <TouchableOpacity onPress={() => setPasswordVisible(!passwordVisible)}>
                            <Ionicons name={passwordVisible ? "eye-off-outline" : "eye-outline"} size={20} color="#bbb" />
                        </TouchableOpacity>
                    </View>
                </View>
                <CustomButton text={loading ? 'Logging in...' : 'Login'} onPress={handleLogin} />
                <Text style={styles1.loginText} onPress={() => Alert.alert("Reset Password", "Forgot password flow here.")}>
                    Forgot your password?
                </Text>
            </View>
        </View>
    );
}
