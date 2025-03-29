import React from 'react';
import { View, Text, Image, SafeAreaView, TouchableOpacity } from 'react-native';
import { BlurView } from '@react-native-community/blur';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './WalletScreenStyle';
import styles1 from '../../styles/style';
import ColoredButton from '../../components/ColoredButton';
import { StackNavigationProp } from '@react-navigation/stack';
import { NavigationContainer, useNavigation } from '@react-navigation/native';


type RootStackParamList = {
    FaceScanScreen: undefined;
};

export default function WalletScreen() {

     const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
    const handleStart = () => {
        navigation.navigate('FaceScanScreen');
    }
    return (
        <SafeAreaView style={styles.container}>
            <Image source={require('../../assets/icons/astra.png')} style={styles.backgroundLogo} />
            <View style={styles.cardContainer}>
                <BlurView style={styles.blurBackground} blurType="dark" blurAmount={10} />
                <View style={styles.cardContent}>
                    <View style={styles.cardHeader}>
                        <View style={styles.header}>
                            <Image source={require('../../assets/icons/astra.png')} style={styles.logo} />
                            <Text style={styles.cardTitle}>Astra</Text>
                        </View>
                        <TouchableOpacity style={styles.menuButton}>
                            <View style={styles.dotsIcon}>
                                <Icon name="ellipsis-horizontal" size={20} color="white" />
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.cardBottom}>
                        <Text style={styles1.description}>Current Balance</Text>
                        <View style={styles.walletRow}>
                            <Text style={styles.balance}>$150.68</Text>
                            <TouchableOpacity>
                                <Icon name="eye-off-outline" size={18} color="white" />
                            </TouchableOpacity>
                        </View>

                        <Text style={styles1.description}>Wallet Address</Text>
                        <View style={styles.walletRow}>
                            <Text style={styles.walletAddress}>0x1234..........8897</Text>
                            <TouchableOpacity>
                                <Icon name="eye-off-outline" size={18} color="white" />
                            </TouchableOpacity>
                        </View>
                    </View>

                </View>
            </View>
            <View style={styles.bottomText}>
                <Text style={styles1.subtitle}>
                    You're all set! Time to tokenize your ID and unlock seamless access.
                </Text>
            </View>
            <ColoredButton text="Let's Start" onPress={handleStart} isEnabled={true} />
        </SafeAreaView>
    );
}
