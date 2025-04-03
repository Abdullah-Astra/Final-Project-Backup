import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        paddingHorizontal: 16,
    },
    text: {
        fontFamily: 'Poppins-Regular',
        color: '#959595',
        fontSize: 14,
        marginTop: -15,
        alignSelf: 'flex-start'
    },
    image: {
        width: 350,
        height: 350,
        marginBottom: 10,
        marginTop: 20,
    },
    content: {
        alignItems: 'center',
        width: '100%',
    },
    progressBar: {
        width: 50,
        height: 3,
        backgroundColor: '#3C3C3C',
        borderRadius: 2,
        alignSelf: 'flex-start',
    },
    progressIndicator: {
        width: 15,
        height: '100%',
        backgroundColor: '#FF842D',
        borderRadius: 2,
    },
    heading: {
        color: '#fff',
        fontSize: 32,
        fontFamily: 'Poppins-Regular',
        marginVertical: 20,
        alignSelf: 'flex-start'
    },
    paymentCards: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 40,
        alignItems: 'center',
        textAlign: 'center',
        gap: 15,
    },
    paymentButton: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#292929',
        paddingVertical: 14,
        paddingHorizontal: 16,
        borderRadius: 8,
        width: 172, // Default width
        height: 122, // Default height
    },
    walletButton: {
        backgroundColor: '#FF5733',
    },
    paymentText: {
        color: '#FFFFFF',
        fontSize: 14,
        fontFamily: 'Poppins-SemiBold',
    },
    bankIcon: {
        marginTop: 10,
    },
});

export default styles;
