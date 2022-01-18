import React, {useState} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

export const Head = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.font}>사고 싶은 챔피언을 선택하세요. </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f0f0f0',
  },
  font: {
    fontSize: 20,
    fontWeight: 'bold',
    backgroundColor: '#f0f0f0',
    margin: 10,
  },
});
