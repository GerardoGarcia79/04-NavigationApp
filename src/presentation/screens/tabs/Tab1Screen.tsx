import React from 'react';
import {Text, View} from 'react-native';
import {HamburgerMenu} from '../../../components/shared/HamburgerMenu';
import {IonIcon} from '../../../components/shared/IonIcon';

export const Tab1Screen = () => {
  return (
    <View>
      <HamburgerMenu />
      <Text>Tab1Screen</Text>
      <Text>
        {/* <Icon name="rocket-outline" size={100} /> */}
        <IonIcon name="rocket-outline" />
      </Text>
    </View>
  );
};
