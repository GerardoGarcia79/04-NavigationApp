import Icon from '@react-native-vector-icons/ionicons';
import React from 'react';
import {Text} from 'react-native';
import ionicGlyphmap from '@react-native-vector-icons//ionicons/glyphmaps/Ionicons.json';

interface Props {
  name: keyof typeof ionicGlyphmap;
  size?: number;
  color?: string;
}

export const IonIcon = ({name, color = 'black', size = 20}: Props) => {
  return (
    <Text>
      <Icon name={name} size={size} color={color} />
    </Text>
  );
};
