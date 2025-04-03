import React, { useEffect, useState, useRef } from 'react';
import { View, Text, Alert, Image } from 'react-native';
import { Camera, useCameraDevices } from 'react-native-vision-camera';
import AsyncStorage from '@react-native-async-storage/async-storage';
import RNFS from 'react-native-fs';
import styles from './DocScanScreenStyle';
import styles1 from '../../styles/style';
import TopBar2 from '../../components/TopBar2';
import ColoredButton from '../../components/ColoredButton';
import api from '../../apis/api';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';

type RootStackParamList = {
  GetStarted: undefined;
  NextScreen: undefined;
};

export default function DocumentScanScreen() {
  const [buttonText, setButtonText] = useState('Need Help');
  const [isEnabled, setIsEnabled] = useState(false);
  const [hasPermission, setHasPermission] = useState(false);
  const [verificationText, setVerificationText] = useState('Align your document within the frame');
  const [capturedImage, setCapturedImage] = useState<string | null>(null);
  const [isScanning, setIsScanning] = useState(false);

  const cameraRef = useRef<Camera | null>(null);
  const devices = useCameraDevices();
  const device = devices.find((d) => d.position === 'back');

  useEffect(() => {
    async function requestPermissions() {
      await Camera.requestCameraPermission();
      const status = await Camera.getCameraPermissionStatus();
      setHasPermission(status === 'granted');
    }

    requestPermissions();

    setTimeout(() => {
      captureImage();
    }, 5000);
  }, []);

  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const handlePress = () => {
    navigation.navigate('NextScreen');
  };

  const captureImage = async () => {
    if (!cameraRef.current) return;

    try {
      setIsScanning(true); // Start scanning state
      const photo = await cameraRef.current.takePhoto();
      console.log("Image Captured:", photo.path);
      setCapturedImage('file://' + photo.path);

      const imageBase64 = await RNFS.readFile(photo.path, 'base64');

      const userId = await AsyncStorage.getItem('userId');
      if (!userId) {
        Alert.alert('Error', 'User ID not found.');
        setIsScanning(false);
        return;
      }

      const requestBody = {
        docs_scan_img: imageBase64,
        user_id: userId,
      };

      console.log("Sending Data:", requestBody);

      const response = await api.post('/api/v2/docs_recognition/extract-data', requestBody);
      console.log('Upload Response:', response.data);

      if (response.data.status == "success") {
        setVerificationText('Verification Done');
        setIsEnabled(true);
        setButtonText('Next');
      } else {
        Alert.alert('Verification Done', response.data.message || 'Please try again.');
        setIsEnabled(true);
        setButtonText('Next');
      }
    } catch (error: any) {
      console.error("Upload Error:", error.response?.data || error.message);
      Alert.alert('Error', error.response?.data?.message || 'Something went wrong while uploading.');
      setIsEnabled(true);
      setButtonText('Next');
    } finally {
      setIsScanning(false); // Stop scanning state
    }
  };

  return (
    <View style={styles.container}>
      <TopBar2
        icon1="close"
        icon2="information-circle-outline"
        title="Document Scan"
        onPressIcon1={() => navigation.goBack()}
        onPressIcon2={() => console.log('Info pressed')}
      />

      <View style={styles.cameraContainer}>
        {capturedImage ? (
          <Image source={{ uri: capturedImage }} style={styles.capturedImage} />
        ) : (
          device && hasPermission && (
            <Camera
              ref={cameraRef}
              style={styles.camera}
              device={device}
              isActive={true}
              photo={true}
            />
          )
        )}

        {/* Overlay when scanning */}
        {isScanning && (
          <View style={styles.loadingOverlay}>
            <Image source={require('../../assets/icons/scan.png')} style={styles.scanningFrame} />
            <Text style={styles1.description}>Scanning...</Text>
          </View>
        )}
      </View>

      <View style={styles.scanBottom}>
        <Text style={styles.description}>{verificationText} </Text>
      </View>
      <ColoredButton text={buttonText} onPress={handlePress} isEnabled={isEnabled} />
    </View>
  );
}
