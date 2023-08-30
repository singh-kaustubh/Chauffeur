import { Provider } from 'react-redux';
import store from './store';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Landing from './screens/LandingScreen';
import MapScreen from './screens/MapScreen';
import ProfileScreen from './screens/ProfileScreen';
import HistoryScreen from './screens/HistoryScreen';
import SettingsScreen from './screens/SettingsScreen';
import ReferScreen from './screens/ReferScreen';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { KeyboardAvoidingView, Platform, TouchableOpacity } from 'react-native';
import tw from 'twrnc';
import { Icon } from '@rneui/base';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaProvider>
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? "padding" : "height"}
            keyboardVerticalOffset={Platform.OS === "ios" ? -64 : 0}
            style={tw`flex-1`}
          >
            <Drawer.Navigator
              initialRouteName="Home"
              screenOptions={({ navigation }) => ({
                header: () => (
                  <TouchableOpacity style={tw`bg-gray-100 absolute top-16 left-8 p-3 z-50 rounded-full shadow-lg`} onPress={() => navigation.openDrawer()}>
                    <Icon type='ionicon' name="menu" size={24} color="black" />
                  </TouchableOpacity>
                ),
                headerShown: true,
                drawerActiveTintColor: 'black',
              })}
            >
              <Drawer.Screen
                name="Home"
                component={HomeStack}
              />
              <Drawer.Screen
                name="Profile"
                component={ProfileScreen}
              />
              <Drawer.Screen
                name="History"
                component={HistoryScreen}
              />
              <Drawer.Screen
                name="Refer a Friend"
                component={ReferScreen}
              />
              <Drawer.Screen
                name="Settings"
                component={SettingsScreen}
              />
            </Drawer.Navigator>
          </KeyboardAvoidingView>
        </SafeAreaProvider>
      </NavigationContainer>
    </Provider>
  );
}

const HomeStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name='Landing'
      component={Landing}
      options={{
        headerShown: false
      }}
    />
    <Stack.Screen
      name='Map'
      component={MapScreen}
      options={{
        headerShown: false
      }}
    />
  </Stack.Navigator>
);
