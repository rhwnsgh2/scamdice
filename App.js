import React from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import {makeJsonData} from './json/makeJson';
import {findSynergy, findChampion} from './lib/findLib';
import {champion} from './json/champion';
import {findAllChampion} from './lib/findLib';
import {splitWithPrice} from './lib/calPercent';
import {mainData} from './json/mainJson';
import {ChampionCard} from './component/championCard';
import {Head} from './component/headComponent';
import {createStackNavigator} from '@react-navigation/stack';
import {Main} from './navigator/main';
import {NavigationContainer} from '@react-navigation/native';
import {Percent} from './navigator/percent';
import {AdBannerBottom} from './component/adBannerBottom';

const Stack = createStackNavigator();
const App = () => {
  makeJsonData();
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="사기주사위"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="사기주사위" component={Main} />
        <Stack.Screen name="확률" component={Percent} />
      </Stack.Navigator>
    </NavigationContainer>
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

export default App;
