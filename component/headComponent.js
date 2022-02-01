import React, {useState} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

export const Head = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.font}>
        {'사기주사위를 사용하여\n뽑고 싶은 챔피언을 선택하세요.'}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#313236',
  },
  font: {
    fontSize: 20,
    fontWeight: 'bold',
    backgroundColor: '#313236',
    color: 'white',
    margin: 10,
  },
});
