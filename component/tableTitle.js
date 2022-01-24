import React from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';

export const tableTitle = percentList => {
  const ChampionImage = element => {
    return (
      <View style={styles.title}>
        <Image source={element.champion.img} style={styles.titleImage} />
        <Text numberOfLines={1} style={styles.textTitle}>
          {element.champion.name}
        </Text>
      </View>
    );
  };
  const title = percentList.map((element, index) => {
    return ChampionImage(element);
  });
  return title;
};
const styles = StyleSheet.create({
  title: {flex: 1, borderRightWidth: 1, bordercolor: 'black'},
  titleImage: {flex: 1, width: null, height: null, resizeMode: 'contain'},
  textTitle: {textAlign: 'center', color: 'white'},
});
