import { StyleSheet } from 'react-native';

import colors from '../assets/colors';
import fonts from '../assets/fonts';
import { deviceSizeScale, isIOS } from '../utils/devices';

const stylesInput = StyleSheet.create({
  input: {
    color: colors.grey,
    flexGrow: 1,
    fontFamily: fonts.regular,
    fontSize: 28 * deviceSizeScale,
    fontWeight: '400',
    lineHeight: isIOS ? 20 : 24 * deviceSizeScale,
    padding: !isIOS ? 0 : undefined,
  },
});

export default stylesInput;
