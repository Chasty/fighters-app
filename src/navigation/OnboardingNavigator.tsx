import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { onboardingScreens } from '../screens/commonScreens';
import { CommonStackParamList } from '../screens/commonScreens';

type ParamList = CommonStackParamList;
export const Stack = createNativeStackNavigator<ParamList>();

const screenOptions = {
  //cardStyle: { backgroundColor: theme.colors.white },
  headerShown: false,
};

export function OnboardingNavigator() {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      {Object.entries({
        // Use the screens normally
        ...onboardingScreens,
      }).map(([name, props]) => {
        return (
          <Stack.Screen
            key={name}
            name={name as keyof ParamList}
            {...props}
            options={{ headerShown: false }}
          />
        );
      })}
    </Stack.Navigator>
  );
}
