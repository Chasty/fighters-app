import React, { useEffect, useState } from 'react';
import SplashScreen from 'react-native-splash-screen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CommonStackParamList } from '../screens/commonScreens';
import { OnboardingNavigator } from './OnboardingNavigator';
import { AppNavigator } from './AppNavigator';
import {
  NavigationContainer,
  createNavigationContainerRef,
} from '@react-navigation/native';
import { useContext } from 'react';
import {
  FirstTimeContext,
  useGlobalContext,
} from '../context/FirstTimeAppProvider';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Platform, StatusBar } from 'react-native';

export const navigationRef = createNavigationContainerRef();

type ParamList = CommonStackParamList;
export const Stack = createNativeStackNavigator<ParamList>();

export default function Router() {
  const [loading, setLoading] = useState(false);
  const { isFirstTimeOpen, setIsFirstTimeOpen } = useGlobalContext();

  const getIsFirstTimeValue = async () => {
    const result = await AsyncStorage.getItem('first_open');
    if (result) {
      setIsFirstTimeOpen(false);
    } else {
      await AsyncStorage.setItem(
        'first_open',
        JSON.stringify({ isFirstTimeOpen: true }),
      );
      setIsFirstTimeOpen(true);
    }
    setLoading(false);
  };

  useEffect(() => {
    setLoading(true);
    getIsFirstTimeValue();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) {
    return null;
  }

  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={() => {
        setTimeout(() => {
          StatusBar.setBarStyle('light-content', true);
          if (Platform.OS === 'android') {
            StatusBar.setBackgroundColor('#2360b1');
          } else {
            StatusBar.setBarStyle('dark-content', true);
          }
          SplashScreen.hide();
        }, 0);
      }}>
      {!isFirstTimeOpen ? <AppNavigator /> : <OnboardingNavigator />}
    </NavigationContainer>
  );
}
