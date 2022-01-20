import React, { FunctionComponent } from 'react';
import { ListRenderItem, FlatList, StyleSheet, View } from 'react-native';

import { IMovies } from '../../types/api';
import { IFunctionWith } from '../../types/components';
import dimensions from '../../styles/dimensions';
import CastItem from '../item/castItem';
import HeaderText from '../text/headers';
import { getStringInitials } from '../../utils/text';
import colors from '../../assets/colors';

const styles = StyleSheet.create({
  content: {
    marginTop: dimensions.margin,
  },
  initials: { color: colors.grey },
});

interface IActor {
  name: string;
}

interface IProps {
  actors: IActor[];
  onPress?: IFunctionWith<IMovies>;
}

const avatar = (item: string) => {
  return (
    <HeaderText style={styles.initials}>
      {getStringInitials(item).trim()}
    </HeaderText>
  );
};

const Carousel: FunctionComponent<IProps> = ({ actors }) => {
  const renderItem: ListRenderItem<IActor> = ({ item, index }) => {
    return (
      <CastItem
        title={item.name}
        icon={avatar(item.name)}
        isFirst={index !== 0}
      />
    );
  };

  return (
    <View style={styles.content}>
      <FlatList
        data={actors}
        renderItem={renderItem}
        keyExtractor={item => item.name}
        showsHorizontalScrollIndicator={false}
        horizontal
      />
    </View>
  );
};

export default Carousel;
