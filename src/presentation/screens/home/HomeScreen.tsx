import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View} from 'react-native';
import {PrimaryButton} from '../../../components/shared/PrimaryButton';
import {globalStyles} from '../../theme/theme';

export const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={globalStyles.container}>
      <PrimaryButton
        onPress={() => navigation.navigate('Products' as never)}
        label={'Productos'}
      />
      <PrimaryButton
        onPress={() => navigation.navigate('Settings' as never)}
        label={'Configuración'}
      />
    </View>
  );
};
