import {NavigationProp, useNavigation} from '@react-navigation/native';
import React from 'react';
import {View} from 'react-native';
import {PrimaryButton} from '../../../components/shared/PrimaryButton';
import {globalStyles} from '../../theme/theme';
import {RootStackParams} from '../../routes/StackNavigator';

export const HomeScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParams>>();

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
