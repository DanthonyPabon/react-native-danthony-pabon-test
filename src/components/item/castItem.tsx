import React, { FunctionComponent } from 'react';
import { StyleSheet, View } from 'react-native';
import colors from '../../assets/colors';
import { deviceSizeScale } from '../../utils/devices';
import Fonts from '../../assets/fonts';
import SemiBold14Text from '../text/SemiBold14';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.red,
    borderRadius: 50,
    height: 60 * deviceSizeScale,
    marginBottom: 4,
    width: 60 * deviceSizeScale,
  },
  title: {
    color: colors.black,
    fontFamily: Fonts.bold,
    textAlign: 'center',
  },
});

interface IProps {
  title: string;
  icon?: any;
  isFirst: boolean;
}

const CastItem: FunctionComponent<IProps> = ({
  icon,
  title,
  isFirst = false,
}) => (
  <View style={[styles.container, { marginLeft: isFirst ? 16 : 0 }]}>
    <View style={styles.icon}>{icon}</View>
    <SemiBold14Text style={styles.title}>{title}</SemiBold14Text>
  </View>
);

export default CastItem;
