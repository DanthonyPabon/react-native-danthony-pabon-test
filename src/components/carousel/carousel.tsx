import React, { FunctionComponent } from 'react';
import {
  ListRenderItem,
  FlatList,
  StyleSheet,
  View,
  TouchableOpacity,
} from 'react-native';

import { IMovies } from '../../types/api';
import { IFunctionWith } from '../../types/components';
import MovieItem from '../item/movieItem';
import dimensions from '../../styles/dimensions';

const styles = StyleSheet.create({
  content: {
    marginTop: dimensions.margin,
  },
});

interface IProps {
  movies: IMovies[];
  onPress: IFunctionWith<IMovies>;
}

const Carousel: FunctionComponent<IProps> = ({ movies, onPress }) => {
  const renderItem: ListRenderItem<IMovies> = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => onPress(item)}>
        <MovieItem urlImage={item.posterUrl} title={item.title} />
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.content}>
      <FlatList
        data={movies}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        showsHorizontalScrollIndicator={false}
        horizontal
      />
    </View>
  );
};

export default Carousel;
