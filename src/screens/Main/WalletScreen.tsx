import React from 'react';
import { View, Text, Image, SafeAreaView, TouchableOpacity } from 'react-native';
import { BlurView } from '@react-native-community/blur';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './WalletScreenStyle';
import styles1 from '../../styles/style';
import ColoredButton from '../../components/ColoredButton';
import { StackNavigationProp } from '@react-navigation/stack';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import Face from '../../assets/icons/face.svg';
import Docs from '../../assets/icons/docs.svg';


type RootStackParamList = {
    FaceScanScreen: undefined;
};

export default function WalletScreen() {

    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
    const handleStart = () => {
        //navigation.navigate('FaceScanScreen');
    }
    return (
        <SafeAreaView style={styles.container}>
            <Image style={styles.backgroundLogo} source={require('../../assets/images/astra.png')}/>
            <View style={styles.cardContainer}>
                <BlurView style={styles.blurBackground} blurType="dark" blurAmount={10} />
                <View style={styles.cardContent}>
                    <View style={styles.cardHeader}>
                        <Text style={styles1.description}>Welcome,</Text>
                        <TouchableOpacity style={styles.menuButton}>
                            <View style={styles.dotsIcon}>
                                <Icon name="ellipsis-horizontal" size={20} color="white" />
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.rect}>
                        <View style={styles.centerView}>
                            <Text style={styles1.description}>KYC:</Text>
                            <View style={styles.round}>
                                <Text style={styles.red}>Incomplete</Text>
                            </View>
                        </View>

                        <View style={styles.centerView}>
                            <Text style={styles1.description}>Account:</Text>
                            <View style={styles.round}>
                                <Text style={styles.red}>Verified</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.tokenContainer}>
                        {/* Left Column */}
                        <View>
                            <Text style={styles1.description}>Token Number:</Text>
                            <Text style={styles.tokenNumber}>0xFE.......889</Text>
                        </View>

                        {/* Right Column - Icons */}
                        <View style={styles.iconGroup}>
                            <TouchableOpacity style={styles.iconCircle}>
                                <Icon name="eye-off-outline" size={20} color="white" />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.iconCircle}>
                                <Icon name="copy-outline" size={20} color="white" />
                            </TouchableOpacity>
                        </View>
                    </View>

                </View>

            </View>
            <View style={styles.homeBottom}>
                <Text style={styles1.subtitle}>
                    Start Verification
                </Text>
                <Text style={styles.description1}>
                    You're all set! Tokenize your ID for secure and seamless access. This process verifies your identity while protecting against identity theft.
                </Text>
            </View>
            <View style={styles.scanContainer}>
                <View style={styles.scanInner}>
                    <View style={styles.circleIcon}>
                        <Face/>
                    </View>
                    <Text style={styles.subtitle}>
                        Face Scan
                    </Text>
                </View>
                <View style={styles.scanInner}>
                    <View style={styles.circleIcon}>
                        <Docs/>
                    </View>
                    <Text style={styles.subtitle}>
                        Document Scan
                    </Text>
                </View>
            </View>

            <ColoredButton text="Let's Start" onPress={handleStart} isEnabled={true} />
        </SafeAreaView>
    );
}
