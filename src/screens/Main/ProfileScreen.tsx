import React from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, Image, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './ProfileScreenStyle';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';

type RootStackParamList = {
    ProfileScreen: undefined;
    WalletConnectScreen: undefined;
};

export default function ProfileScreen() {
    const { width } = Dimensions.get('window'); // Get screen width

    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

    const handlePressWallet = () => {
        navigation.navigate('WalletConnectScreen');
    };

    const handlePressBank = () => {
        // Add bank payment functionality here
    };

    // Conditional styles based on screen width
    const paymentButtonStyle = width < 164.3 
        ? { width: 140, height: 100 } // Style for smaller screens
        : { width: 172, height: 122 }; // Default style

    return (
        <SafeAreaView style={styles.container}>
            <Image
                source={require('../../assets/images/wallet.gif')}
                style={styles.image}
            />

            <View style={styles.content}>
                <View style={styles.progressBar}>
                    <View style={styles.progressIndicator} />
                </View>
                <Text style={styles.heading}>Complete Your{'\n'}Payment to Unlock{'\n'}Astra's Full Potential</Text>
                <Text style={styles.text}>Select the payment method</Text>

                <View style={styles.paymentCards}>
                    <TouchableOpacity onPress={handlePressBank} style={[styles.paymentButton, paymentButtonStyle]}>
                        <Icon style={styles.bankIcon} name="card-outline" size={48} color="white" />
                        <Text style={styles.paymentText}>Pay with Bank</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handlePressWallet} style={[styles.paymentButton, styles.walletButton, paymentButtonStyle]}>
                        <Icon style={styles.bankIcon} name="wallet-outline" size={48} color="white" />
                        <Text style={styles.paymentText}>Connect to Wallet</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
}
