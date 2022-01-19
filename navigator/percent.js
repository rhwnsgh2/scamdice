import React from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';

import {mainData} from '../json/mainJson';
import {ChampionCard} from '../component/championCard';
import {CardContainer} from '../component/cardContainer';
import {Head} from '../component/headComponent';
import {findAllChampion, findSynergy} from './../lib/findLib';
import {splitWithPrice} from './../lib/calPercent';
import {calcAllPercent} from '../lib/reroll';

export const Percent = props => {
  const champion = props.route.params.champion;

  calcAllPercent(champion);
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
