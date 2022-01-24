import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {Dimensions} from 'react-native';
import {Table, TableWrapper} from 'react-native-table-component';
import {tableHead, TableHead} from './tableHead';
import {TableRows} from './tableRows';

export const PercentTable = props => {
  const deviceWidth = Dimensions.get('window').width;
  const perWidth = deviceWidth / 8;
  const widthList = tableHead.map((element, index) =>
    index === 0 ? perWidth * 2 : perWidth,
  );
  return (
    <ScrollView horizontal={true} style={styles.scrollView}>
      <View>
        <Table>
          <TableHead widthList={widthList} />
        </Table>
        <ScrollView>
          <Table>
            <TableWrapper style={styles.wrapper}>
              <TableRows widthList={widthList} champion={props.champion} />
            </TableWrapper>
          </Table>
        </ScrollView>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
    backgroundColor: '#313236',
  },
  wrapper: {flexDirection: 'column'},
});
