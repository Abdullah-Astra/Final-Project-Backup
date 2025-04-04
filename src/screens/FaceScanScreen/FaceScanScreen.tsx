import React, { useEffect, useState, useRef } from 'react';
import { View, Text, Alert, Image } from 'react-native';
import { Camera, useCameraDevices } from 'react-native-vision-camera';
import AsyncStorage from '@react-native-async-storage/async-storage';
import RNFS from 'react-native-fs';
import styles from './FaceScanScreenStyle';
import styles1 from '../../styles/style';
import TopBar2 from '../../components/TopBar2';
import ColoredButton from '../../components/ColoredButton';
import api from '../../apis/api';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';

type RootStackParamList = {
    GetStarted: undefined;
    DocScanScreen: undefined;
};

// Import tick GIF
const tickGif = require('../../assets/icons/tick-gif.gif');

export default function FaceScanScreen() {
    const [buttonText, setButtonText] = useState('Need Help');
    const [isEnabled, setIsEnabled] = useState(false);
    const [hasPermission, setHasPermission] = useState(false);
    const [verificationText, setVerificationText] = useState('Frame your face inside the circle');
    const [capturedImage, setCapturedImage] = useState<string | null>(null);
    const [showTickGif, setShowTickGif] = useState(false); // Control tick GIF visibility

    const cameraRef = useRef<Camera | null>(null);
    const devices = useCameraDevices();
    const device = devices.find((d) => d.position === 'front');

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
        navigation.navigate('DocScanScreen');
    };

    const captureImage = async () => {
        if (!cameraRef.current) return;

        try {
            
            const photo = await cameraRef.current.takePhoto();
            console.log("Image Captured:", photo.path);
            setCapturedImage('file://' + photo.path);

            const imageBase64 = await RNFS.readFile(photo.path, 'base64');

            const userId = await AsyncStorage.getItem('userId');
            if (!userId) {
                Alert.alert('Error', 'User ID not found.');
                return;
            }

            const requestBody = {
                face_scan_img: imageBase64,
                user_id: userId,
            };

            console.log("Sending Data:", requestBody);

            const response = await api.post('/api/v2/face_recognition/register-face', requestBody);
            console.log('Upload Response:', response.data);

            if (response.data.status === "success") {
                setVerificationText('Verification Completed');
                setShowTickGif(true); // Show the tick GIF
                setIsEnabled(true);
                setButtonText('Next');

            } else {
                Alert.alert('Verification Failed', response.data.message || 'Please try again.');
                setIsEnabled(true);
                setButtonText('Next');
            }
        } catch (error: any) {
            console.error("Upload Error:", error.response?.data || error.message);
            Alert.alert('Error', error.response?.data?.message || 'Something went wrong while uploading.');
        }
    };

    return (
        <View style={styles.container}>
            <TopBar2
                icon1="close"
                icon2="information-circle-outline"
                title="Face Recognition"
                onPressIcon1={() => navigation.goBack()}
                onPressIcon2={() => console.log('Info pressed')}
            />

            <View style={styles.cameraContainer}>
                {/* Show captured image inside the same frame */}
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

                {/* Show tick GIF on successful verification */}

            </View>

            <View style={styles.scanBottom}>
                {showTickGif && (
                    <Image source={require('../../assets/icons/tick.png')} style={styles.tickGif} />
                )}
                <Text style={styles1.description}>{verificationText}</Text>
            </View>
            <ColoredButton text={buttonText} onPress={handlePress} isEnabled={isEnabled} />
        </View>
    );
}
