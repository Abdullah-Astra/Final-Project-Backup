import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#111111',
        padding: 16,
        paddingTop: 100,
        alignItems: 'center',
    },
    cardBottom: {
        marginTop: 10,
    },
    dotsIcon: {
        backgroundColor: '#1F1E1E',
        height: 42,
        width: 42,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#505050'
    },
    header: {
        flex: 1,
        flexDirection: 'row',
    },
    backgroundLogo: {
        position: 'absolute',
        right: 10,
        top: 122,
        height: 220,
        width: 220,
    },
    cardContainer: {
        width: 361,
        height: 242,
        borderRadius: 16,
        overflow: 'hidden',
        position: 'relative',
        backgroundColor: 'rgba(224, 224, 224, 0.4)',
        padding: 20,
        alignSelf: 'center',
    },
    blurBackground: {
        ...StyleSheet.absoluteFillObject,
        borderRadius: 16,
    },
    cardContent: {
        width: '100%',
        height: '100%',
        padding: 4,
    },
    cardHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    logo: {
        width: 24,
        height: 24,
        marginRight: 10,
    },
    cardTitle: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    menuButton: {
        position: 'absolute',
        right: 0,
    },
    label: {
        color: 'gray',
        fontSize: 12,
        marginBottom: 4,
    },
    balance: {
        color: '#FF842D',
        fontSize: 42,
        marginTop: -20,
        marginBottom: 0,
        fontFamily: 'Poppins-SemiBold',
    },
    walletRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: -5,
    },
    walletAddress: {
        color: 'white',
        fontSize: 14,
        marginTop: -15,
    },
    description: {
        color: 'white',
        textAlign: 'center',
        marginVertical: 20,
        fontSize: 14,
    },
    bottomText: {
        position: 'absolute',
        bottom: 130,
    },
});
