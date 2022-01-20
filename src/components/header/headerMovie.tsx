import React from 'react';
import { StyleSheet, View } from 'react-native';

import FastImage from 'react-native-fast-image';
import { deviceSize } from '../../utils/devices';

interface IHeader {
  urlImage: string;
}

const sizeImage = deviceSize.width;

const styles = StyleSheet.create({
  image: {
    width: sizeImage,
    height: sizeImage,
  },
});

const HeaderMovie = ({ urlImage }: IHeader) => {
  return (
    <View>
      <FastImage
        style={styles.image}
        source={{ uri: urlImage }}
        resizeMode={FastImage.resizeMode.contain}
      />
    </View>
  );
};

export default HeaderMovie;
