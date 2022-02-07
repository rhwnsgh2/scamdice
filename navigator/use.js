import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {PercentTable} from '../component/percentTable';
import {AdBannerBottom} from '../component/adBannerBottom';
import {AdMobInterstitial} from 'react-native-admob-alpha';

export const Use = props => {
  const champion = props.route.params.champion;

  useEffect(() => {
    let rand = Math.random() * 100;
    console.log(rand);
    AdMobInterstitial.setAdUnitID('ca-app-pub-7885446439711866/9208315187');
    AdMobInterstitial.setTestDevices([AdMobInterstitial.simulatorId]);
    if (rand > 70) {
      AdMobInterstitial.requestAd().then(() => AdMobInterstitial.showAd());
    }
  }, []);
  return (
    <View style={styles.container}>
      <PercentTable champion={champion} method="use" />
      <AdBannerBottom />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  textContainer: {
    flexDirection: 'row',
    width: '100%',
    height: 100,
    backgroundColor: 'gray',
    borderWidth: 1,
  },
  percentText: {
    flex: 1,
    textAlignVertical: 'center',
    textAlign: 'center',
    fontWeight: 'bold',
    borderLeftWidth: 1,
  },
  championImage: {
    flex: 1,
    resizeMode: 'contain',
    height: null,
    width: null,
    marginRight: 5,
  },
});
