import React from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';

import {mainData} from '../json/mainJson';
import {ChampionCard} from '../component/championCard';
import {CardContainer} from '../component/cardContainer';
import {Head} from '../component/headComponent';
import {findAllChampion, findSynergy} from './../lib/findLib';
import {splitWithPrice} from './../lib/calPercent';

export const Percent = props => {
  const champion = props.route.params.champion;
  const championList = findAllChampion(findSynergy(champion));
  const championSplitWithPrice = splitWithPrice(championList);
  console.log(championSplitWithPrice);
  return <View style={styles.container} />;
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
});
