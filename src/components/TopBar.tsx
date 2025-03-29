import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

interface TopBarProps {
    onBackPress: () => void;
    onQrPress: () => void;
}

const TopBar: React.FC<TopBarProps> = ({ onBackPress, onQrPress }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={onBackPress}>
                <Icon name="arrow-back" size={24} color="white" />
            </TouchableOpacity>
            <TouchableOpacity onPress={onQrPress}>
                <Icon name="qr-code-outline" size={24} color="white" />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 10,
    },
});

export default TopBar;
