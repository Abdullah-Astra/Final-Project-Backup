import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        paddingHorizontal: 16,
    },
    image: {
        width: 350,
        height: 350,
        marginBottom: 10,
        marginTop: 100,
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
    loginText: {
        color: '#E0E0E0',
        fontSize: 14,
        fontFamily: 'Poppins-Medium',
        marginTop: 15,
        alignSelf: 'center',
    },
});

export default styles;
