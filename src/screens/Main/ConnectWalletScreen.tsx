import React, { useState, useEffect, useRef } from 'react';
import { View, Text, Image, SafeAreaView, Modal, ActivityIndicator, Alert } from 'react-native';
import { BlurView } from '@react-native-community/blur';
import TopBar from '../../components/TopBar';
import styles from './ConnectWalletScreenStyle';
import styles1 from '../../styles/style';
import ColoredButton from '../../components/ColoredButton';
import { Animated, Easing } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';



type RootStackParamList = {
    ConnectWalletScreen: undefined;
    SuccessScreen: undefined;
};

const wallets = [
    { name: 'Metamask', icon: require('../../assets/icons/metamask.png') },
    { name: 'Coinbase', icon: require('../../assets/icons/coinbase.png') },
    { name: 'Trust Wallet', icon: require('../../assets/icons/trustwallet.png') },
];

export default function ConnectWalletScreen() {
    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
    const [selectedWallet, setSelectedWallet] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    const handleCreateAccount = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            navigation.navigate('SuccessScreen');
        }, 3000);
    };
    const dot1 = useRef(new Animated.Value(0)).current;
    const dot2 = useRef(new Animated.Value(0)).current;
    const dot3 = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        const animateDots = (dot: Animated.Value, delay: number) => {
            Animated.loop(
                Animated.sequence([
                    Animated.timing(dot, {
                        toValue: 1,
                        duration: 700,
                        easing: Easing.linear,
                        useNativeDriver: true,
                    }),
                    Animated.timing(dot, {
                        toValue: 0.3,
                        duration: 700,
                        easing: Easing.linear,
                        useNativeDriver: true,
                    }),
                ])
            ).start();
        };

        animateDots(dot1, 0);
        setTimeout(() => animateDots(dot2, 150), 150);
        setTimeout(() => animateDots(dot3, 300), 300);
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <TopBar onBackPress={() => { }} onQrPress={() => console.log("QR Pressed")} />
            <View style={styles.walletContainer}>
                <Text style={styles1.subtitle}>Connect your Wallet</Text>
                <Text style={styles1.description}>
                    By connecting your wallet, you agree to our{' '}
                    <Text style={styles.link}>Terms of Service</Text> and our{' '}
                    <Text style={styles.link}>Privacy Policy</Text>.
                </Text>

                <View style={styles.walletList}>
                    {wallets.map((wallet, index) => (
                        <View
                            key={index}
                            style={[
                                styles.walletButton,
                                selectedWallet === wallet.name && styles.selectedWallet
                            ]}
                            onTouchEnd={() => setSelectedWallet(wallet.name)}
                        >
                            <Image source={wallet.icon} style={styles.walletIcon} />
                            <Text style={styles.walletText}>{wallet.name}</Text>
                            <Text style={[
                                styles.connectText,
                                selectedWallet === wallet.name && styles.selectedText
                            ]}>
                                Connect
                            </Text>
                        </View>
                    ))}
                </View>
            </View>

            <View style={styles.bottomContainer}>
                <ColoredButton text='Create Account' onPress={handleCreateAccount} isEnabled={!!selectedWallet} />
            </View>

            {loading && (
                <Modal transparent={true} animationType="fade">
                    <View style={styles.modalContainer}>
                        <BlurView style={styles.blurBackground} blurType="dark" blurAmount={10} />
                        <View style={styles.loadingContainer}>
                            <Image source={require('../../assets/icons/astra.png')} style={styles.logo} />

                            <Image
                                source={{ uri: 'load' }}
                                style={styles.logo}
                            />

                            <Text style={styles.loadingText}>Connecting to your wallet...</Text>
                        </View>
                    </View>
                </Modal>
            )}
        </SafeAreaView>
    );
}
