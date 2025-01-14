import {
  DrawerActions,
  NavigationProp,
  useNavigation,
} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {Pressable, Text, View} from 'react-native';
import {PrimaryButton} from '../../../components/shared/PrimaryButton';
import {globalStyles} from '../../theme/theme';
import {RootStackParams} from '../../routes/StackNavigator';

export const HomeScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParams>>();

  useEffect(() => {
    navigation.setOptions({
      // eslint-disable-next-line react/no-unstable-nested-components
      headerLeft: () => (
        <Pressable
          onPress={() => navigation.dispatch(DrawerActions.toggleDrawer)}>
          <Text>Menu</Text>
        </Pressable>
      ),
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View style={globalStyles.container}>
      <PrimaryButton
        onPress={() => navigation.navigate('Products')}
        label={'Productos'}
      />
      <PrimaryButton
        onPress={() => navigation.navigate('Settings')}
        label={'Configuración'}
      />
    </View>
  );
};
