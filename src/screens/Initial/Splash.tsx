import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';;
import styles1 from '../../styles/style'
import { useNavigation } from '@react-navigation/native';

type RootStackParamList = {
  Splash: undefined;
  GetStarted: undefined;
};

type SplashScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Splash'>;

export default function Splash() {
  const navigation = useNavigation<SplashScreenNavigationProp>();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('GetStarted');
    }, 3000);
  }, []);

  return (
    <View style={styles1.container}>
      <Text style={styles.welcomeText}>WELCOME TO</Text>
      <Text style={styles.brandName}>Astra</Text>
      <Image
        source={require('../../assets/images/astra-logo.gif')} 
        style={styles.logo}
      />
      <View style={styles.LoadingBar}>
        <Text style={styles.loadingText}>Loading...</Text>
        <View style={styles.progressBar}>
          <View style={styles.progressFill} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  LoadingBar: {
    marginTop: 80,
  },
  welcomeText: {
    color: '#bbb',
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    marginBottom: -20,
  },
  brandName: {
    color: '#fff',
    fontSize: 64,
    fontFamily: 'Poppins-Bold',
    fontWeight: 'bold',
  },
  logo: {
    width: 200,
    height: 185,
    marginVertical: 30,
  },
  loadingText: {
    color: '#fff',
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    marginTop: 20,
    alignSelf: 'center',
  },
  progressBar: {
    width: 150,
    height: 4,
    backgroundColor: '#333',
    borderRadius: 5,
    marginTop: 10,
    overflow: 'hidden',
  },
  progressFill: {
    width: '100%',
    height: '100%',
    backgroundColor: '#FF842D',
    fontFamily: 'Poppons-Medium'
  },
});
