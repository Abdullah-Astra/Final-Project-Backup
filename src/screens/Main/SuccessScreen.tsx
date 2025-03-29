import React, { useEffect } from 'react';
import { View, Text, Image} from 'react-native';
import styles from './SuccessScreenStyle';
import styles1 from '../../styles/style';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';



type RootStackParamList = {
    WalletScreen: undefined;
};

export default function SuccessScreen() {
    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('WalletScreen')
        }, 2500);
    }, [])

    return (
        <View style={styles1.container}>
            <Image
                source={{ uri: 'tick' }}
                style={styles.tick}
            />
            <Text style={styles1.title}>
                Congratulations
            </Text>
            <Text style={styles1.description}>
                Your wallet is successfully connected.
            </Text>
        </View>
    );
}
