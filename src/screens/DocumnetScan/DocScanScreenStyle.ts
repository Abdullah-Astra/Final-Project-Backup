import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        padding: 16,
        flex: 1,
        backgroundColor: '#111111',
    },
    description: {
        color: '#bbb',
        fontSize: 14,
        marginTop: 10,
        marginBottom: 20,
        fontFamily: 'Poppins-Regular'
    }
    ,
    cameraContainer: {
        marginTop: 50,
        width: width * 0.9,
        height: height * 0.3,
        borderRadius: 10,
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: '#fff',
        marginVertical: 20,
    },
    camera: {
        width: '100%',
        height: '100%',
    },
    capturedImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    scanBottom: {
        alignSelf: 'center'
    },
    loadingOverlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Blur effect
        justifyContent: 'center',
        alignItems: 'center',
    },
    scanningFrame: {
        width: 50,
        height: 50,
        resizeMode: 'contain',
    },
    loadingText: {
        color: '#fff',
        marginTop: 10,
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default styles;
