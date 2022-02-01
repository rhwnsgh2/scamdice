import React from 'react';
import {BannerAd, BannerAdSize, TestIds} from '@react-native-firebase/admob';

export const AdBannerBottom = () => (
  <BannerAd
    unitId={'ca-app-pub-7885446439711866/3640601223'}
    size={BannerAdSize.FULL_BANNER}
    requestOptions={{
      requestNonPersonalizedAdsOnly: true,
    }}
    onAdLoaded={function () {
      console.log('Advert loaded');
    }}
    onAdFailedToLoad={function (error) {
      console.error('Advert failed to load: ', error);
    }}
  />
);
