import React from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import {PercentTable} from '../component/percentTable';
import {AdBannerBottom} from './../component/adBannerBottom';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

export const Want = props => {
  const champion = props.route.params.champion;
  return (
    <View style={styles.container}>
      <PercentTable champion={champion} method="want" />
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
  textContainer: {
    flexDirection: 'row',
    width: '100%',
    height: 100,
    backgroundColor: 'gray',
    borderWidth: 1,
  },
  percentText: {
    flex: 1,
    textAlignVertical: 'center',
    textAlign: 'center',
    fontWeight: 'bold',
    borderLeftWidth: 1,
  },
  championImage: {
    flex: 1,
    resizeMode: 'contain',
    height: null,
    width: null,
    marginRight: 5,
  },
});
