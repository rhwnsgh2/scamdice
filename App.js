/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {makeJsonData} from './json/makeJson';
import {findSynergy, findChampion} from './lib/findLib';
import {champion} from './json/champion';
import {findAllChampion} from './lib/findLib';
import {splitWithPrice} from './lib/calPercent';
import {mainData} from './json/mainJson';
import {ChampionCard} from './component/championCard';
import {CardContainer} from './component/cardContainer';

const App = () => {
  console.log(splitWithPrice(findAllChampion('범죄 조직')));
  let cardContainerList = [];
  const allChampion = splitWithPrice(mainData);
  for (const property in allChampion) {
    cardContainerList.push(
      <CardContainer champions={allChampion[property]} key={property} />,
    );
  }
  return <View style={styles.container}>{cardContainerList}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
