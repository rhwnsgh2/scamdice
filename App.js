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

const App = () => {
  console.log(splitWithPrice(findAllChampion('범죄 조직')));
  let imageTest = splitWithPrice(findAllChampion('범죄 조직')).lv1.map(
    (element, index) => {
      return <Image source={element.img} key={index} />;
    },
  );
  return <View>{imageTest}</View>;
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
