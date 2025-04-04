import React from 'react';
import { View, Text, SafeAreaView, Image,} from 'react-native';
import Gif from 'react-native-gif';
import styles from './GetStartedScreenStyle';
import CustomButton from '../../components/CustomButton'
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';

type RootStackParamList = {
  GetStarted: undefined;
  SignUpScreen: undefined;
  LoginScreen: undefined;
};

export default function GetStartedScreen() {

  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const handlePress = () => {
    navigation.navigate('SignUpScreen');
  }
  const handlePressToLogin = () => {
    navigation.navigate('LoginScreen');
  }

  const text = 'Sign Up'
  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require('../../assets/images/signup.gif')} 
        style={styles.image}
      />

      <View style={styles.content}>
        <View style={styles.progressBar}>
          <View style={styles.progressIndicator} />
        </View>

        <Text style={styles.heading}>Effortless KYC &{'\n'}Identity Verification{'\n'}with Astra</Text>
        <CustomButton text="Sign Up" onPress={handlePress} />
        <Text style={styles.loginText} onPress={handlePressToLogin}>I already have an account.</Text>
      </View>
    </SafeAreaView>
  );
}

