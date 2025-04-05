import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#111111',
        padding: 16,
        paddingTop: 70,
        alignItems: 'center',
    },
    subtitle: {
        color: '#E0E0E0',
        fontSize: 16,
        fontFamily: 'Poppins-Regular'
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
    red: {
        color: '#FF2D55',
    },

    header: {
        flex: 1,
        flexDirection: 'row',
    },
    backgroundLogo: {
        position: 'absolute',
        height: 375,
        top: -30,
        right: 10,
        width: 334,
    },
    cardContainer: {
        width: '100%',
        height: 235,
        borderRadius: 8,
        overflow: 'hidden',
        position: 'relative',
        borderWidth: 1,
        borderColor: '#505050',
        backgroundColor: '#1F1E1E',
        padding: 5,
        paddingLeft: 20,
        paddingRight: 20,
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
    homeBottom: {
        marginTop: 50,
        alignSelf: 'flex-start'
    },
    description1: {
        color: '#6C6C6C',
        fontSize: 14,
        marginBottom: 20,
        fontFamily: 'Poppins-Regular'
    },
    rect: {
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: '#505050',
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 5,
        paddingBottom: 5,
        justifyContent: 'space-between',
    },
    round: {
        paddingLeft: 13,
        paddingRight: 13,
        height: 32,
        backgroundColor: '#262626',
        borderWidth: 1,
        marginTop: -10,
        borderColor: '#505050',
        borderRadius: 16,
        alignItems: 'center',
        justifyContent: 'center',
    },
    centerView: {
        flexDirection: 'row',
        gap: 10,
        marginTop: 10,
        alignItems: 'center',
    },
    tokenContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 15,
      },
      
      tokenNumber: {
        color: 'white',
        fontSize: 14,
        marginTop: -15,
        fontFamily: 'Poppins-Regular'
      },
      
      iconGroup: {
        flexDirection: 'row',
        gap: 10,
      },
      iconCircle: {
        width: 40,
        height: 40,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#505050',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#262626',
      },
      scanContainer: {
        alignSelf: 'flex-start',
      },
      circleIcon: {
        backgroundColor: '#1F1E1E',
        height: 44,
        width: 44,
        borderRadius: '50%',
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#505050',
        borderWidth: 1,
      },
      scanInner: {
        marginTop: 0,
        marginBottom: 20,
        flexDirection: 'row',
        alignContent: 'center',
        alignItems: 'center',
        gap: 20,
    },
});
