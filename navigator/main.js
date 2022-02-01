import React from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';

import {splitWithPrice} from '../lib/calPercent';
import {mainData} from '../json/mainJson';
import {ChampionCard} from '../component/championCard';
import {CardContainer} from '../component/cardContainer';
import {Head} from '../component/headComponent';
import {AdBannerBottom} from './../component/adBannerBottom';

export const Main = ({navigation}) => {
  let cardContainerList = [];
  const allChampion = splitWithPrice(mainData);
  for (const level in allChampion) {
    cardContainerList.push(
      <CardContainer
        champions={allChampion[level]}
        level={level}
        key={level}
        navigation={navigation}
      />,
    );
  }
  return (
    <View style={styles.container}>
      <Head />
      <ScrollView>{cardContainerList}</ScrollView>
      <AdBannerBottom />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
});
