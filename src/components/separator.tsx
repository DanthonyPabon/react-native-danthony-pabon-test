import React from 'react';
import { View } from 'react-native';
import colors from '../assets/colors';
import dimensions from '../styles/dimensions';

interface IProps {
  borderBottomColor?: string;
  marginVertical?: number;
}

const Separator = ({
  borderBottomColor = colors.grey10,
  marginVertical = dimensions.marginTopSpace,
}: IProps) => {
  return (
    <View
      style={{
        borderBottomColor,
        marginVertical: marginVertical,
        borderBottomWidth: 1,
        width: '100%',
      }}
    />
  );
};

export default Separator;
