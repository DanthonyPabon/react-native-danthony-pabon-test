import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import Container from '../components/container';
import HeaderMovie from '../components/header/headerMovie';
import { IMovies } from '../types/api';
import ArrowLeft from '../assets/icons/arrowLeft';
import Styled from 'styled-components/native';
import Fonts from '../assets/fonts';
import { deviceSizeScale } from '../utils/devices';
import colors from '../assets/colors';
import Cast from '../components/carousel/cast';
import Bold15Text from '../components/text/Bold24Text';
import dimensions from '../styles/dimensions';

const styles = StyleSheet.create({
  content: { paddingHorizontal: 0 },
  arrowIcon: {
    position: 'absolute',
    top: 10,
    left: 10,
  },
  contentInfo: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  contentTitle: { alignItems: 'center', marginTop: dimensions.margin },
  txtTitle: { textAlign: 'center' },
  spaceTop: { marginTop: dimensions.margin },
});

const TitleText = Styled.Text`
  font-family: ${Fonts.bold};
   font-size: ${40 * deviceSizeScale}px;
  line-height: ${48 * deviceSizeScale}px;
  color: ${colors.black}
`;

const DetailPage = ({ route, navigation }: any) => {
  const movieInfo: IMovies = route.params;

  const onSubmit = () => {
    navigation.goBack();
    console.log('Success');
  };

  const getActors = () => {
    const aa = movieInfo.actors.split(',');
    const arr: any = [];
    for (let value of aa) {
      arr.push({ name: value });
    }
    return arr;
  };

  return (
    <Container style={styles.content} withScroll>
      <View>
        <HeaderMovie urlImage={movieInfo.posterUrl} />
      </View>
      <View style={styles.arrowIcon}>
        <TouchableOpacity onPress={onSubmit}>
          <ArrowLeft />
        </TouchableOpacity>
      </View>
      <View style={styles.contentTitle}>
        <TitleText style={styles.txtTitle}>{movieInfo.title}</TitleText>
      </View>
      <View style={{ paddingHorizontal: dimensions.margin }}>
        <View style={[styles.contentInfo, styles.spaceTop]}>
          <Text>{movieInfo.year} • </Text>
          {movieInfo.genres.map((gen, index) => (
            <Text key={gen}>
              {gen}
              {index !== movieInfo.genres.length - 1 ? ', ' : ''}
            </Text>
          ))}
          <Text> • {movieInfo.duration} min</Text>
        </View>
        <View style={styles.spaceTop}>
          <Bold15Text style={{ marginBottom: dimensions.marginTwelve }}>
            Plot
          </Bold15Text>
          <Text>{movieInfo.plot}</Text>
        </View>
        <View style={styles.spaceTop}>
          <Bold15Text>Cast</Bold15Text>
          <Cast actors={getActors()} />
        </View>
      </View>
    </Container>
  );
};

export default DetailPage;
