import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#111111',
        paddingHorizontal: 16,
        paddingTop: 10,
    },
    container2: {
        marginTop: 100,
    },

    walletContainer: {
        marginTop: 100,
    },
    link: {
        color: 'white',
        textDecorationLine: 'underline',
    },
    walletList: {
        marginTop: 20,
    },
    walletButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#262626',
        padding: 15,
        borderWidth: 1,
        borderColor: '#505050',
        borderRadius: 10,
        marginBottom: 14,
        height: 53,
        justifyContent: 'space-between',
    },
    selectedWallet: {
        borderColor: '#FE802E', 
        borderWidth: 1,
    },
    walletIcon: {
        width: 30,
        height: 30,
        marginRight: 10,
    },
    walletText: {
        flex: 1,
        fontSize: 16,
        color: 'white',
    },
    connectText: {
        fontSize: 16,
        color: '#FFFFFF',
        fontWeight: 'bold',
    },
    selectedText: {
        color: '#FF842D', 
    },
    bottomContainer: {
        alignSelf: 'center',
        position: 'absolute',
        bottom: -50,
        height: '100%',
        width: '100%',
    },

    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(16, 19, 26, 0.4)',
    },
    blurBackground: {
        position: 'absolute',
        width: '100%',
        height: '100%',
    },
    loadingContainer: {
        padding: 20,
        alignItems: 'center',
        width: '80%',
    },
    logo: {
        width: 42,
        height: 42,
        marginTop: 20,
        marginBottom: -10,
    },
    loadingText: {
        fontSize: 16,
        color: 'white',
        marginTop: 10,
    },
    dotsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: 10,
    },
    dot: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: 'orange',
        marginHorizontal: 5,
    },
    image: {
        height: 42,
        width: 42,
    }
    
});
