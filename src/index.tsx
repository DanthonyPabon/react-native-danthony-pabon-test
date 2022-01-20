import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import * as React from 'react';

import APPStackMain from './navigation/main';

const App = () => {
  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: '#FFF',
    },
  };
  return (
    <NavigationContainer theme={MyTheme}>
      <APPStackMain />
    </NavigationContainer>
  );
};

export default App;
