import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {splitWithCost} from '../lib/calPercent';
import {mainData} from '../json/mainJson';
import {CardContainer} from '../component/cardContainer';
import {Head} from '../component/headComponent';
import {AdBannerBottom} from './../component/adBannerBottom';

export const Main = ({navigation}) => {
  let cardContainerList = [];
  const allChampion = splitWithCost(mainData);
  for (const cost in allChampion) {
    cardContainerList.push(
      <CardContainer
        champions={allChampion[cost]}
        level={cost}
        key={cost}
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
