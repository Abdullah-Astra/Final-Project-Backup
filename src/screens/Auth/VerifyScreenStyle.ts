import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 20,
    zIndex: 999
  },
  subtitle1: {
    color: '#E0E0E0',
    fontSize: 24,
    marginBottom: 5,
    fontFamily: 'Poppins-Regular',
    textAlign: 'left',
    width: '100%',
  },
  fields: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100,
  },
  title: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  boldText: {
    fontWeight: 'bold',
    color: '#E0E0E0'
  },
  lightText: {
    color: '#bbb',
    fontWeight: '400',
  },
  subtitle: {
    color: '#E0E0E0',
    fontSize: 20,
    marginBottom: 5,
    textAlign: 'center',
    fontFamily: 'Poppins-Regular',
  },
  description: {
    color: '#bbb',
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 20,
    fontFamily: 'Poppins-Regular',
  },
  email: {
    color: '#E0E0E0',
    fontFamily: 'Poppins-Regular',
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'center',
    marginBottom: 5,
    marginTop: 50,
    marginLeft: 16,
  },
  otpInput: {
    width: 50,
    height: 50,
    borderRadius: 8,
    backgroundColor: '#292929',
    color: 'white',
    fontSize: 18,
    alignSelf: 'center',
    textAlign: 'center',
    marginHorizontal: 5,
    borderWidth: 1,
    borderColor: '#505050',
  },
  resendButton: {
    backgroundColor: '#292929',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 53,
    borderWidth: 1,
    borderColor: '#505050',
    marginTop: 10,
  },
  resendButtonText: {
    color: '#bbb',
    fontSize: 16,
    marginTop: 5,
  },
});

export default styles;
