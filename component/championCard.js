import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

export const ChampionCard = ({element}) => {
  console.log(element);
  const cardStyle = StyleSheet.compose(
    cardStyles.container,
    borderStyles['lv' + element.cost],
  );

  return (
    <View style={cardStyle}>
      <Image style={imageStyle.image} source={element.img} />
    </View>
  );
};

const cardStyles = StyleSheet.create({
  container: {
    borderRadius: 10,
    borderWidth: 3,
    flex: 1,
  },
});

const borderStyles = StyleSheet.create({
  lv1: {
    borderColor: '#6c757d',
  },
  lv2: {
    borderColor: '#28a745',
  },
  lv3: {
    borderColor: '#007bff',
  },
  lv4: {
    borderColor: '#6f42c1',
  },
  lv5: {
    borderColor: '#ffc107',
  },
});

const imageStyle = StyleSheet.create({
  image: {
    width: '100%',
    height: '100%',
  },
});
