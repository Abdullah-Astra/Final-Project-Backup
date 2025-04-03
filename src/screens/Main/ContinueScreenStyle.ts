import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    TinyLogo: {
        height: 66,
        width: 72,
        marginBottom: 10,
    },
    container: {
        flex: 1,
        backgroundColor: '#111111',
        padding: 16,
        paddingTop: 100,
    },
    content: {
        
    },
    
    SwitchBtnView: {
        flexDirection: 'row',
        gap: 10,
        paddingRight: 16,
    },
    SwitchText: {
        color: 'white',
        fontSize: 14,
        flexShrink: 1,
        fontFamily: 'Poppins-Regular'
    },
    CancelText: {
        position: 'absolute',
        bottom: 25,
        fontSize: 14,
        color: '#E0E0E0',
        alignSelf: 'center',
        fontFamily: 'Poppins-Regular'
    },
    title: {
        color: 'white',
        fontSize: 20,
        marginBottom: 10,
        fontFamily: 'Poppins-Regular'
    },
    subtitle: {
        color: '#bbb',
        fontSize: 14,
        marginBottom: 20,
    },
});

export default styles;
