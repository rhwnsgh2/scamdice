import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {Row} from 'react-native-table-component';

export let tableHead = [
  '주사위를 쓸\n챔피언',
  'Level\n3',
  'Level\n4',
  'Level\n5',
  'Level\n6',
  'Level\n7',
  'Level\n8',
  'Level\n9',
  'Level\n10',
  'Level\n11',
];

export const TableHead = props => {
  if (props.method === 'use') {
    tableHead[0] = '나오는 챔피언';
  } else if (props.method === 'want') {
    tableHead[0] = '주사위를 쓸\n 챔피언';
  }
  return (
    <Row
      data={tableHead}
      style={styles.head}
      widthArr={props.widthList}
      textStyle={styles.textHead}
    />
  );
};
const styles = StyleSheet.create({
  head: {
    height: 40,
    backgroundColor: '#313236',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
  textHead: {textAlign: 'center', color: '#e6e6e6', fontWeight: 'bold'},
  headButton: {
    flex: 1,
  },
});
