import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111111',
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 20,
    zIndex: 999, 
  },
  fields: {
    justifyContent: 'center',
    alignContent: 'center',
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
  },
  lightText: {
    color: '#bbb',
    fontWeight: '400',
  },
  subtitle: {
    color: '#E0E0E0',
    fontSize: 24,
    marginBottom: 5,
    fontFamily: 'Poppins-Regular'
  },
  description: {
    color: '#bbb',
    fontSize: 14,
    marginBottom: 20,
    fontFamily: 'Poppins-Regular'
  },
  inputContainer: {
    marginBottom: 15,
  },
  label: {
    color: 'white',
    fontSize: 14,
    marginBottom: 10,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#292929',
    borderRadius: 8,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: '#505050',
    height: 53,
    justifyContent: 'space-between',
  },
  input: {
    flex: 1,
    color: '#959595',
    fontSize: 14,
  },
  button: {
    backgroundColor: '#717171',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    height: 53,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'Poppins-Regular'
  },
});

export default styles;
