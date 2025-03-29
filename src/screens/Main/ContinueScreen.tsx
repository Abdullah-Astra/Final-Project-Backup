import React, { useState } from 'react';
import { Text, View, SafeAreaView, Switch, Image } from 'react-native';
import styles from './ContinueScreenStyle';
import styles1 from '../../styles/style';
import ColoredButton from '../../components/ColoredButton';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';


type RootStackParamList = {
    ContinueScreen: undefined;
    ProfileScreen: undefined;
};

const ContinueScreen = () => {
    const [isEnabled, setIsEnabled] = useState(false);

    const toggleSwitch = () => setIsEnabled(prevState => !prevState);
    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
    const handlePress = () => {
        navigation.navigate('ProfileScreen');
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <Image
                    source={{ uri: 'astra_logo' }}
                    style={styles.TinyLogo}
                />
                <Text style={styles1.subtitle}>
                    Astra needs your permission to work its magic
                </Text>
                <Text style={styles1.description}>
                    To provide you with the best experience, Astra needs access to your camera and permission to capture and process your image and document data.
                    This data will only be used to build your profile and verify your identity securely.
                </Text>
                <View style={styles.SwitchBtnView}>
                    <Switch
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                        trackColor={{ false: "#333", true: "#333" }}
                        thumbColor={isEnabled ? "#FF842D" : "white"}
                    />
                    <Text style={styles.SwitchText}>
                        I agree to grant camera access and process my data as described
                    </Text>
                </View>
            </View>
            <ColoredButton text="Proceed" onPress={handlePress} isEnabled={isEnabled} />
            <Text style={styles.CancelText}>
                Cancel
            </Text>
        </SafeAreaView>
    );
};

export default ContinueScreen;
