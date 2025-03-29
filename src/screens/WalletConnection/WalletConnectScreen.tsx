import '@walletconnect/react-native-compat'

import { createAppKit, defaultConfig, AppKit } from '@reown/appkit-ethers-react-native'
import { AppKitButton } from '@reown/appkit-ethers-react-native'
import { Text, View, Image } from 'react-native'
import styles1 from '../../styles/style'
import styles from '../../screens/Main/ConnectWalletScreenStyle'
import TopBar from '../../components/TopBar'
import ColoredButton from '../../components/ColoredButton'
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';

type RootStackParamList = {
    FaceScanScreen: undefined;
};

// 1. Get projectId from https://cloud.reown.com
const projectId = 'dc63eab2c58f37e0923fcde703cb4fb2'

// 2. Create config
const metadata = {
    name: 'AppKit RN',
    description: 'AppKit RN Example',
    url: 'https://reown.com/appkit',
    icons: ['https://avatars.githubusercontent.com/u/179229932'],
    redirect: {
        native: 'YOUR_APP_SCHEME://'
    }
}

const config = defaultConfig({ metadata })

// 3. Define your chains
const mainnet = {
    chainId: 1,
    name: 'Ethereum',
    currency: 'ETH',
    explorerUrl: 'https://etherscan.io',
    rpcUrl: 'https://cloudflare-eth.com'
}

const polygon = {
    chainId: 137,
    name: 'Polygon',
    currency: 'MATIC',
    explorerUrl: 'https://polygonscan.com',
    rpcUrl: 'https://polygon-rpc.com'
}

const chains = [mainnet, polygon]

// 4. Create modal
createAppKit({
    projectId,
    chains,
    config,
    enableAnalytics: true // Optional - defaults to your Cloud configuration
})

export default function WalletConnectScreen() {

    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
    const handlePress = () => {
        navigation.navigate('FaceScanScreen');
    }
    return (
        <>
            <View style={styles.container}>
                <TopBar onBackPress={() => { }} onQrPress={() => console.log("QR Pressed")} />
                <View style={styles.container2}>
                    <Text style={styles1.title}>
                        Connect to your Wallet
                    </Text>
                    <Text style={styles1.description}>
                        By connecting your wallet, you agree to our{' '}
                        <Text style={styles.link}>Terms of Service</Text> and our{' '}
                        <Text style={styles.link}>Privacy Policy</Text>.
                    </Text>
                </View>
                <AppKitButton />
                <AppKit />
                <ColoredButton text='Continue to Face Scan' onPress={handlePress} isEnabled={true} />
            </View>
        </>
    )
}