import { Provider } from 'react-redux';
import store from './store';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import MapScreen from './screens/MapScreen';
import { KeyboardAvoidingView, Platform } from 'react-native';
import tw from 'twrnc';

const Stack = createNativeStackNavigator();

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
            <Stack.Navigator>
              <Stack.Screen
                name='Home'
                component={HomeScreen}
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
          </KeyboardAvoidingView>
        </SafeAreaProvider>
      </NavigationContainer>
    </Provider>
  );
}
