import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {ChampionCard} from './championCard';
import {splitWithPrice} from './../lib/calPercent';
import {findAllChampion} from './../lib/findLib';
import {mainData} from './../json/mainJson';

export const CardContainer = props => {
  let cardList = props.champions.map((element, index) => {
    return <ChampionCard element={element} key={index} />;
  });
  return <View style={styles.container}>{cardList}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
});
