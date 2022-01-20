import React, { useCallback, useEffect, useState } from 'react';
import { View } from 'react-native';

import Container from '../components/container';
import MoviesApi from '../services/movies';
import useRequestHandler from '../hook/useRequestHandler';
import Carousel from '../components/carousel/carousel';
import { ICarousel, IMovies } from '../types/api';
import HeaderText from '../components/text/headers';
import Separator from '../components/separator';
import useStatusBar from '../hook/useStatusBar';
import RouteNames from '../utils/navigation';

const HomePage = ({ navigation }: any) => {
  useStatusBar('light-content');
  const { onResponse } = useRequestHandler();
  const [carousels, setCarousels] = useState<ICarousel[]>([]);

  const goToMovieDetail = (item: IMovies) => {
    navigation.navigate(RouteNames.DetailPage, item);
  };

  const loadingData = useCallback(async () => {
    const { data, error } = await onResponse(MoviesApi.getAllMovies());
    if (!error) {
      setCarousels(data.carousels);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    loadingData().then();
  }, [loadingData]);

  return (
    <Container withScroll>
      {carousels.map(({ title, items }, index) => {
        return (
          <View key={index}>
            <HeaderText>{title}</HeaderText>
            <Carousel movies={items} onPress={goToMovieDetail} />
            {index !== carousels.length - 1 && <Separator />}
          </View>
        );
      })}
    </Container>
  );
};

export default HomePage;
