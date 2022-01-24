import React from 'react';
import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';

export const ChampionCard = ({element, navigation}) => {
  const cardStyle = StyleSheet.compose(
    cardStyles.width,
    borderStyles['lv' + element.cost],
  );
  const onPress = () => {
    navigation.navigate('확률', {champion: element.name});
  };
  return (
    <TouchableOpacity style={cardStyles.container} onPress={onPress}>
      <View style={cardStyle}>
        <Image style={imageStyle.image} source={element.img} />
      </View>
      <Text numberOfLines={1} style={textStyle.font}>
        {element.name}
      </Text>
    </TouchableOpacity>
  );
};

const cardStyles = StyleSheet.create({
  container: {
    width: '15%',
    borderRadius: 10,
    margin: 5,
  },
  width: {
    width: '100%',
    height: '85%',
    borderWidth: 3,
    borderRadius: 10,
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
    flex: 1,
    resizeMode: 'cover',
    width: null,
    height: null,
  },
});

const textStyle = StyleSheet.create({
  font: {
    fontSize: 13,
    textAlign: 'center',
    color: 'white',
  },
});
