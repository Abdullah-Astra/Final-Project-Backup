import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Splash from '../Initial/Splash';
import GetStarted from '../Initial/GetStartedScreen';
import SignUpScreen from '../Auth/SignUpScreen'
import VerifyScreen from '../Auth/VerifyScreen'
import LoginScreen from '../Auth/LoginScreen'
import ContinueScreen from '../Main/ContinueScreen'
import ProfileScreen from '../Main/ProfileScreen'
import ConnectWalletScreen from '../Main/ConnectWalletScreen'
import SuccessScreen from '../Main/SuccessScreen'
import WalletScreen from '../Main/WalletScreen'
import FaceScanScreen from '../FaceScanScreen/FaceScanScreen'
import DocScanScreen from '../DocumnetScan/DocScanScreen'
import WalletConnectScreen from '../WalletConnection/WalletConnectScreen'

type RootStackParamList = {
  Splash: undefined;
  GetStarted: undefined;
  SignUpScreen: undefined;
  VerifyScreen: { email: string }; 
  LoginScreen: undefined;
  ContinueScreen: undefined;
  ProfileScreen: undefined;
  ConnectWalletScreen: undefined;
  SuccessScreen: undefined;
  WalletScreen: undefined;
  FaceScanScreen: undefined;
  WalletConnectScreen: undefined
  DocScanScreen: undefined;
};
const Stack = createStackNavigator<RootStackParamList>();
//WalletConnectScreen
export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={Splash} /> 
        <Stack.Screen name="GetStarted" component={GetStarted} />
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
        <Stack.Screen name="VerifyScreen" component={VerifyScreen} initialParams={{ email: "example@email.com" }}/>
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="ContinueScreen" component={ContinueScreen} />
        <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
        <Stack.Screen name="ConnectWalletScreen" component={ConnectWalletScreen} />
        <Stack.Screen name="SuccessScreen" component={SuccessScreen} />
        <Stack.Screen name="WalletScreen" component={WalletScreen} />
        <Stack.Screen name="FaceScanScreen" component={FaceScanScreen} />
        <Stack.Screen name="DocScanScreen" component={DocScanScreen} />
        <Stack.Screen name="WalletConnectScreen" component={WalletConnectScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
