import React from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';

import {mainData} from '../json/mainJson';
import {ChampionCard} from '../component/championCard';
import {CardContainer} from '../component/cardContainer';
import {Head} from '../component/headComponent';
import {findAllChampion, findSynergy} from './../lib/findLib';
import {splitWithPrice} from './../lib/calPercent';
import {calcAllPercent} from '../lib/reroll';
import {PercentTable} from '../component/percentTable';

const percentStyle = percent => {
  let returnStyle;
  if (percent > 25) {
    returnStyle = styles.textColorHigh;
  } else if (percent > 20) {
    returnStyle = styles.textColorMiddle;
  } else if (percent > 15) {
    returnStyle = styles.textColorLow;
  } else if (percent > 10) {
    returnStyle = styles.textColorVeryLow;
  } else {
    returnStyle = styles.textColorRed;
  }
  return StyleSheet.compose(styles.percentText, returnStyle);
};
export const Percent = props => {
  const champion = props.route.params.champion;
  const percentList = calcAllPercent(champion);
  const list = percentList.map((element, index) => {
    const image = (
      <Image style={styles.championImage} source={element.champion.img} />
    );
    const textList = element.percent.map((percent, index) => {
      return (
        <Text key={index} numberOfLines={1} style={percentStyle(percent)}>
          {percent}%
        </Text>
      );
    });
    return (
      <View key={index} style={styles.textContainer}>
        {image}
        {textList}
      </View>
    );
  });
  return (
    <View style={styles.container}>
      <View style={{flex: 0.25}} />
      <PercentTable champion={champion} />
      {/* <ScrollView>{list}</ScrollView> */}
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
  textColorHigh: {
    color: 'rgb(191, 254, 127)',
  },
  textColorMiddle: {
    color: 'rgb(227, 236, 127)',
  },
  textColorLow: {
    color: 'rgb(255, 209, 128)',
  },
  textColorVeryLow: {
    color: 'rgb(254, 153, 130)',
  },
  textColorRed: {
    color: 'rgb(255, 126, 131)',
  },
  championImage: {
    flex: 1,
    resizeMode: 'contain',
    height: null,
    width: null,
    marginRight: 5,
  },
});
