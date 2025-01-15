import {NavigationProp, useNavigation} from '@react-navigation/native';
import React from 'react';
import {View} from 'react-native';
import {HamburgerMenu} from '../../../components/shared/HamburgerMenu';
import {PrimaryButton} from '../../../components/shared/PrimaryButton';
import {RootStackParams} from '../../routes/StackNavigator';
import {globalStyles} from '../../theme/theme';

export const HomeScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParams>>();

  return (
    <View style={globalStyles.container}>
      <HamburgerMenu />

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
