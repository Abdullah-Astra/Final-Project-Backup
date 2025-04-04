import '@walletconnect/react-native-compat';
import { useState, useEffect } from 'react';
import { useSnapshot } from 'valtio';
import { createAppKit, defaultConfig, AppKit, AppKitButton } from '@reown/appkit-ethers-react-native';
import { AccountController } from '@reown/appkit-core-react-native';
import { Text, View, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles1 from '../../styles/style';
import styles from '../../screens/Main/ConnectWalletScreenStyle';
import TopBar from '../../components/TopBar';
import ColoredButton from '../../components/ColoredButton';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import api from '../../apis/api';
import CustomButton from '../../components/CustomButton';
import ColoredButton2 from '../../components/ColoredButton2';

const projectId = 'dc63eab2c58f37e0923fcde703cb4fb2';
const metadata = {
    name: 'AppKit RN',
    description: 'AppKit RN Example',
    url: 'https://reown.com/appkit',
    icons: ['https://avatars.githubusercontent.com/u/179229932'],
    redirect: { native: 'YOUR_APP_SCHEME://' }
};
const config = defaultConfig({ metadata });
const mainnet = { chainId: 1, name: 'Ethereum', currency: 'ETH', explorerUrl: 'https://etherscan.io', rpcUrl: 'https://cloudflare-eth.com' };
const polygon = { chainId: 137, name: 'Polygon', currency: 'MATIC', explorerUrl: 'https://polygonscan.com', rpcUrl: 'https://polygon-rpc.com' };
const chains = [mainnet, polygon];

createAppKit({ projectId, chains, config, enableAnalytics: true });

export default function WalletConnectScreen() {
    const navigation = useNavigation<StackNavigationProp<{ FaceScanScreen: undefined }>>();
    const navigation1 = useNavigation<StackNavigationProp<{ ProfileScreen: undefined }>>();
    const { caipAddress, isConnected } = useSnapshot(AccountController.state);
    const [walletAddress, setWalletAddress] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (isConnected && caipAddress) {
            setWalletAddress(caipAddress);
        } else {
            setWalletAddress(null);
        }
    }, [isConnected, caipAddress]);

    const mintToken = async () => {
        setLoading(true);
        try {
            const toAddress = walletAddress
                ? walletAddress.split(":").length >= 3
                    ? walletAddress.split(":")[2]
                    : ""
                : "";

            const userId = await AsyncStorage.getItem('userId');
            const tokenURI = 'https://example.com/metadata/1';

            if (!toAddress || !userId) {
                Alert.alert('Hey!', 'Wallet address not found. Make sure you have connected to the wallet.');
                setLoading(false);
                return;
            }

            const response = await api.post('/api/v2/blockchain/mint_token', {
                toAddress,
                tokenURI,
                userId
            });

            if (response.data.status == "success") {
                Alert.alert('Success', response.data.message || 'Minting successful!');
            } else {
                Alert.alert('Success', response.data.message || 'Minting failed');
            }
        } catch (error: any) {
            if (error.response) {
                Alert.alert('Error', error.response.data.message || 'Something went wrong on the server.');
            } else if (error.request) {
                Alert.alert('Error', 'No response from the server. Please try again later.');
            } else {
                Alert.alert('Error', 'An unexpected error occurred. Please try again.');
            }
            console.error('Minting Error:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <View style={styles.container}>
            <TopBar onBackPress={()=>{navigation1.navigate('ProfileScreen')}} onQrPress={() => console.log('QR Pressed')} />
            <View style={styles.container2}>
                <Text style={styles1.title}>Connect to your Wallet</Text>
                <Text style={styles1.description}>
                    By connecting your wallet, you agree to our <Text style={styles.link}>Terms of Service</Text> and our <Text style={styles.link}>Privacy Policy</Text>.
                </Text>
            </View>
            <AppKitButton />
            <AppKit />
            
            {walletAddress && <Text style={styles1.description}>Connected Wallet: {walletAddress}</Text>}
            {!walletAddress && <ColoredButton text='Continue to Face Scan' onPress={() => navigation.navigate('FaceScanScreen')} isEnabled={!walletAddress} />} 
        </View>
    );
}
