/* eslint-disable react/no-unstable-nested-components */
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {IonIcon} from '../../components/shared/IonIcon';
import {Tab1Screen} from '../screens/tabs/Tab1Screen';
import {globalColors} from '../theme/theme';
import {StackNavigator} from './StackNavigator';
import {TopTapsNavigator} from './TopTabsNavigator';

const Tab = createBottomTabNavigator();

export const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        sceneStyle: {backgroundColor: globalColors.background},
        tabBarActiveTintColor: globalColors.primary,
        headerTitleAlign: 'center',
        // headerShown: false,
        tabBarLabelStyle: {
          marginBottom: 5,
        },
        // Esconder línea header
        headerStyle: {
          elevation: 0,
          borderColor: 'transparent',
          shadowColor: 'transparent',
        },
        // Esconder línea header
        tabBarStyle: {
          borderTopWidth: 0,
          elevation: 0,
        },
      }}>
      <Tab.Screen
        name="Tab1"
        options={{
          title: 'Tab1',
          tabBarIcon: ({color}) => (
            <IonIcon name="accessibility-outline" color={color} />
          ),
        }}
        component={Tab1Screen}
      />
      <Tab.Screen
        name="Tab2"
        options={{
          title: 'Tab2',
          tabBarIcon: ({color}) => (
            <IonIcon name="airplane-outline" color={color} />
          ),
        }}
        component={TopTapsNavigator}
      />
      <Tab.Screen
        name="Tab3"
        options={{
          title: 'Tab3',
          tabBarIcon: ({color}) => (
            <IonIcon name="bar-chart-outline" color={color} />
          ),
        }}
        component={StackNavigator}
      />
    </Tab.Navigator>
  );
};
