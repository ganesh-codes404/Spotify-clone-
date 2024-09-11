
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import { NavigationContainer } from '@react-navigation/native';
import '@expo/vector-icons';


import Profile from "./Screens/profile"
import Home from "./Screens/home"; 
import LoginScreen from "./Screens/login";
import Entypo from '@expo/vector-icons/Entypo';
import AntDesign from '@expo/vector-icons/AntDesign';
const Tab=createBottomTabNavigator();
function BottomTabs(){
    return(
        <>
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Profile" component={Profile}  /> 
        </Tab.Navigator>
        </>
    )
}
const Stack=createNativeStackNavigator();
function Navigation(){
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Login" component={LoginScreen} options={{headerShown:false}}/>
                <Stack.Screen name="Main" component={BottomTabs} options={{headerShown:false}}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default Navigation