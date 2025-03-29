import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

interface TopBar2Props {
    icon1?: string;
    icon2: string;
    title: string;
    onPressIcon1?: () => void;
    onPressIcon2: () => void;
}

const TopBar2: React.FC<TopBar2Props> = ({ icon1, icon2, title, onPressIcon1, onPressIcon2 }) => {
    return (
        <View style={styles.container}>
            {icon1 && (
                <TouchableOpacity onPress={onPressIcon1}>
                    <Icon name={icon1} size={24} color="#E0E0E0" />
                </TouchableOpacity>
            )}

            <Text style={styles.title}>{title}</Text>

            <TouchableOpacity onPress={onPressIcon2}>
                <Icon name={icon2} size={24} color="#E0E0E0" />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
    },
    title: {
        color: 'white',
        fontSize: 18,
        fontFamily: 'Poppins-SemiBold'
    },
});

export default TopBar2;
