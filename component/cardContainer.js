import React, {useState} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {ChampionCard} from './championCard';
import {splitWithPrice} from './../lib/calPercent';
import {findAllChampion} from './../lib/findLib';
import {mainData} from './../json/mainJson';

export const CardContainer = props => {
  let cardList = props.champions.map((element, index) => {
    return <ChampionCard element={element} key={index} />;
  });

  return <CardListSplit cardList={cardList} />;
};

export const CardListSplit = props => {
  let viewList = [];
  let cardList = [];
  console.log(props.cardList.length);
  const [viewHeight, setViewHeight] = useState(100);
  for (let i = 0; i < props.cardList.length / 5; i++) {
    for (let j = 0; j < 5; j++) {
      if (props.cardList[i * 5 + j]) {
        cardList.push(props.cardList[i * 5 + j]);
      } else {
        cardList.push(<View style={{flex: 1}} />);
      }
    }
    console.log(cardList);
    viewList.push(
      <View
        key={i}
        style={[styles.cardContainer, {height: viewHeight}]}
        onLayout={event => {
          const {width} = event.nativeEvent.layout;
          setViewHeight((width / 5) * 0.85);
        }}>
        {cardList}
      </View>,
    );
    cardList = [];
  }
  return <View style={styles.mainContainer}>{viewList}</View>;
};
const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'column',
  },
  cardContainer: {
    width: '100%',
    flexDirection: 'row',
  },
});
