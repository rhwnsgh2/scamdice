import React, {useState} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {ChampionCard} from './championCard';
import {splitWithCost} from './../lib/calPercent';
import {findAllChampion} from './../lib/findLib';
import {mainData} from './../json/mainJson';

export const CardContainer = props => {
  let cardList = props.champions.map((element, index) => {
    return (
      <ChampionCard
        element={element}
        key={index}
        navigation={props.navigation}
      />
    );
  });
  let levelName;
  switch (props.level) {
    case 'lv1':
      levelName = '1단계';
      break;
    case 'lv2':
      levelName = '2단계';
      break;
    case 'lv3':
      levelName = '3단계';
      break;
    case 'lv4':
      levelName = '4단계';
      break;
    case 'lv5':
      levelName = '5단계';
      break;
  }

  const container = (
    <View style={styles.background}>
      <View style={[styles.background, styles.textBack]}>
        <Text style={[styles.font, styles.layout]}>{levelName}</Text>
      </View>
      <CardListSplit cardList={cardList} navigation />
    </View>
  );
  return container;
};

export const CardListSplit = props => {
  let viewList = [];
  let cardList = [];
  const [viewHeight, setViewHeight] = useState(100);
  for (let i = 0; i < props.cardList.length / 5; i++) {
    for (let j = 0; j < 5; j++) {
      if (props.cardList[i * 5 + j]) {
        cardList.push(props.cardList[i * 5 + j]);
      } else {
        cardList.push(<View style={{flex: 1}} key={j} />);
      }
    }
    viewList.push(
      <View
        key={i}
        style={[styles.cardContainer, {height: viewHeight}]}
        onLayout={event => {
          const {width} = event.nativeEvent.layout;
          setViewHeight((width / 5) * 0.85 + 15);
        }}>
        {cardList}
      </View>,
    );
    cardList = [];
  }
  return <View style={styles.mainContainer}>{viewList}</View>;
};
const styles = StyleSheet.create({
  background: {
    backgroundColor: '#313236',
  },
  mainContainer: {
    flexDirection: 'column',
    borderColor: 'black',
    backgroundColor: '#313236',
  },
  cardContainer: {
    width: '100%',
    flexDirection: 'row',
  },
  font: {
    fontSize: 15,
    fontWeight: 'bold',
    backgroundColor: '#313236',
    margin: 10,
    flex: 0.6,
    color: 'white',
  },
  textBack: {
    flexDirection: 'row',
    alignContent: 'center',
  },
});
