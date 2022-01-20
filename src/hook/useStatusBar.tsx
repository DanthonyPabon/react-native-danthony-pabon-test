/* eslint-disable react-hooks/exhaustive-deps */
import { useFocusEffect } from '@react-navigation/native';
import { useCallback } from 'react';
import { StatusBar } from 'react-native';

type StyleBar = 'dark-content' | 'light-content';

/**
 * Sets the status bar style on navigation through hooks
 * @param { StyleBar } style The status bar style light-content dark-content
 * @param { boolean } animated The status bar animation by default is true
 */

const useStatusBarStyle = (style: StyleBar, animated = true) => {
  useFocusEffect(
    useCallback(() => {
      StatusBar.setBarStyle(style, animated);
    }, []),
  );
};

export default useStatusBarStyle;
