import '../gesture-handler';

import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {DrawerNavigator} from './presentation/routes/DrawerNavigator';

export const App = () => {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
};
