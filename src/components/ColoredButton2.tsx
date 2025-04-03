import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

interface ColoredButtonProps {
  text: string;
  isEnabled: boolean;
  onPress: () => void;
}

const ColoredButton2: React.FC<ColoredButtonProps> = ({ text, onPress, isEnabled }) => {
  return (
    <TouchableOpacity 
      style={[styles.button, !isEnabled && styles.disabledButton]} 
      onPress={isEnabled ? onPress : undefined} 
      disabled={!isEnabled}
    >
      {isEnabled ? (
        <LinearGradient
          colors={['#FF8008', '#FF2D55']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.gradient}
        >
          <Text style={styles.buttonText}>{text}</Text>
        </LinearGradient>
      ) : (
        <View style={styles.disabledView}>
          <Text style={styles.buttonText}>{text}</Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

export default ColoredButton2;

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    width: '100%',
    borderRadius: 8,
    overflow: 'hidden',
    alignSelf: 'center',
    bottom: 140,
  },
  disabledButton: {
    backgroundColor: "transparent",
  },
  disabledView: {
    backgroundColor: "#717171",
    paddingVertical: 14,
    alignItems: 'center',
    borderRadius: 8,
  },
  gradient: {
    paddingVertical: 14,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'Poppins-SemiBold',
  },
});
