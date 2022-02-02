import React from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import {PercentTable} from '../component/percentTable';
import {AdBannerBottom} from './../component/adBannerBottom';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {Want} from './want';
import {Use} from './use';

const Tab = createMaterialTopTabNavigator();
export const Percent = props => {
  const champion = props.route.params.champion;
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {backgroundColor: '#313236'},
        tabBarLabelStyle: {fontSize: 15, color: 'white'},
        swipeEnabled: false,
        tabBarIndicatorStyle: {backgroundColor: 'white'},
        tabBarPressOpacity: 0,
      }}>
      <Tab.Screen
        name="want"
        component={Want}
        initialParams={{champion: champion}}
        options={{title: '해당 챔피언을\n 뽑고 싶을 때'}}
      />
      <Tab.Screen
        name="use"
        component={Use}
        initialParams={{champion: champion}}
        options={{title: '해당 챔피언에게\n주사위 사용 시'}}
      />
    </Tab.Navigator>
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
});
