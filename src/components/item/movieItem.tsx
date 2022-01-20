import React from 'react';
import { StyleSheet, View } from 'react-native';
import FastImage from 'react-native-fast-image';

import dimensions from '../../styles/dimensions';
import colors from '../../assets/colors';
import Bold18Text from '../text/Bold18Text';

interface IMovieItem {
  urlImage: string;
  title: string;
}

const styles = StyleSheet.create({
  content: {
    backgroundColor: colors.red,
    padding: 10,
    borderRadius: dimensions.radiusBig,
    marginRight: dimensions.margin,
    width: 200,
    alignItems: 'flex-start',
  },
  image: {
    width: 180,
    height: 250,
  },
});

const renderImage = (urlImage: string) => {
  return (
    <FastImage
      style={styles.image}
      source={{ uri: urlImage }}
      resizeMode={FastImage.resizeMode.stretch}
    />
  );
};

const MovieItem = ({ urlImage, title }: IMovieItem) => {
  return (
    <View style={styles.content}>
      {renderImage(urlImage)}
      <View style={{ marginTop: dimensions.margin }}>
        <Bold18Text style={{ textAlign: 'left' }}>{title}</Bold18Text>
      </View>
    </View>
  );
};

export default MovieItem;
