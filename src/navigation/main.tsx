import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import HomePage from '../screens/homePage';
import routeNames from '../utils/navigation';
import DetailPage from '../screens/detailPage';

const DefaultOptions = { gestureEnabled: true, headerShown: false };

export const APPStack = createStackNavigator();

const APPStackMain = () => (
  <APPStack.Navigator>
    <APPStack.Screen
      name={routeNames.HomePage}
      component={HomePage}
      options={DefaultOptions}
    />
    <APPStack.Screen
      name={routeNames.DetailPage}
      component={DetailPage}
      options={DefaultOptions}
    />
  </APPStack.Navigator>
);

export default APPStackMain;
