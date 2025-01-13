/* eslint-disable react/react-in-jsx-scope */
import {createStackNavigator} from '@react-navigation/stack';
import {ProductsScreen} from '../screens/products/ProductsScreen';
import {SettingsScreen} from '../screens/settings/SettingsScreen';
import {HomeScreen} from '../screens/home/HomeScreen';

const Stack = createStackNavigator();

export const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Products" component={ProductsScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
    </Stack.Navigator>
  );
};
