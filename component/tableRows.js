import React, {useState} from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import {Row} from 'react-native-table-component';
import {calcAllPercent} from '../lib/reroll';
import {colorList} from './../lib/textColor';
import {tableTitle} from './tableTitle';
import {makeNormalArray, sortArray, uniqueArray} from '../lib/arrayLib';
export const TableRows = props => {
  const [percentList, setPercentList] = useState(
    calcAllPercent(props.champion),
  );
  let colorMap = makeColorMap(percentList);
  const tableData = percentList.map(element => {
    let ret = element.percent.map(percent => {
      let textColor = colorMap.find(color => color.percent === percent).color;
      return (
        <Text style={[{color: textColor}, styles.percentText]}>{percent}%</Text>
      );
    });
    return ret;
  });
  const rows = tableData.map((rowData, index) => {
    rowData.unshift(tableTitle(percentList)[index]);
    return (
      <Row
        key={index}
        data={rowData}
        widthArr={props.widthList}
        style={[styles.row, index % 2 && styles.rowSecond]}
        textStyle={styles.text}
      />
    );
  });

  return rows;
};
const makeColorMap = percentList => {
  const percentData = percentList.map(element => {
    return element.percent;
  });
  let uniqueData = uniqueArray(makeNormalArray(percentData));
  let sortData = sortArray(uniqueData);

  let colorArray = colorList(sortData, '#ff7e83', '#bffe7f');
  let colorMap = sortData.map((element, index) => {
    return {percent: element, color: colorArray[index]};
  });
  return colorMap;
};

const styles = StyleSheet.create({
  row: {height: 50, backgroundColor: '#313236'},
  rowSecond: {backgroundColor: '#222222'},
  percentText: {textAlign: 'center', fontWeight: 'bold'},
});
