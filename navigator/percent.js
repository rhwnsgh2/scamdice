import React from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';

import {splitWithPrice} from '../lib/calPercent';
import {mainData} from '../json/mainJson';
import {ChampionCard} from '../component/championCard';
import {CardContainer} from '../component/cardContainer';
import {Head} from '../component/headComponent';

export const Main = ({navigation, champion}) => {
  console.log(champion);
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
