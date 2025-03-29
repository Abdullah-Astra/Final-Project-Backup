import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
    },
    scan: {
        position: 'absolute',
        top: '20%',
        height: 248,
        width: 248,
        zIndex: 1,
    },
    tickGif: {
        width: 40,
        height: 40,
        alignSelf: 'center',
    },    
    capturedImage: {
        width: '100%',
        height: 400, 
        resizeMode: 'cover',
        borderRadius: 10,
        marginVertical: 10,
    },
    tick: {
        height: 64,
        width: 64,
        marginBottom: 10,
        marginTop: 80,
    },
    scanBottom: {
        marginTop: 80,
        alignItems: 'center',
    },
    cameraContainer: {
        position: 'absolute',
        top: '22%',
        height: 200,
        width: 200,
        borderRadius: 125,
        overflow: 'hidden', 
        borderWidth: 4,
        borderColor: 'green',
        borderStyle: 'dotted',
        alignItems: 'center',
        justifyContent: 'center',
    },
    camera: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
    noCameraText: {
        color: 'white',
        textAlign: 'center',
        marginTop: 20,
    },
    captureButton: {
        position: 'absolute',
        bottom: 60, 
        alignSelf: 'center',
        backgroundColor: 'gold',
        padding: 10,
        borderRadius: 8,
    },
    buttonText: {
        color: 'black',
        fontWeight: 'bold',
    },
});
