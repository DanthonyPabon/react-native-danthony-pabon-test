import React from 'react';
import {
  ScrollView,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { EdgeInsets } from 'react-native-safe-area-context/src/SafeArea.types';
import { ChildrenType } from '../types/components';
import dimensions from '../styles/dimensions';
import colors from '../assets/colors';

const styles = (safeAreaInsets: EdgeInsets) =>
  StyleSheet.create({
    content: {
      flex: 1,
      paddingBottom: safeAreaInsets.bottom,
      paddingTop: safeAreaInsets.top,
      paddingHorizontal: dimensions.margin,
      backgroundColor: colors.darkRed,
    },
  });

interface IContainer {
  children: ChildrenType;
  withScroll?: boolean;
  style?: StyleProp<ViewStyle>;
}

const Container = ({
  children,
  withScroll = false,
  style = {},
}: IContainer) => {
  const safeAreaInsets = useSafeAreaInsets();
  return withScroll ? (
    <ScrollView
      style={[styles(safeAreaInsets).content, style]}
      contentContainerStyle={{ paddingBottom: safeAreaInsets.bottom * 3 }}>
      {children}
    </ScrollView>
  ) : (
    <View style={[styles(safeAreaInsets).content, style]}>{children}</View>
  );
};

export default Container;
