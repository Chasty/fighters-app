import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { appScreens } from '../screens/commonScreens';
import { CommonStackParamList } from '../screens/commonScreens';

type ParamList = CommonStackParamList;
export const Stack = createNativeStackNavigator<ParamList>();

const screenOptions = {
  //cardStyle: { backgroundColor: theme.colors.white },
  headerShown: false,
};

export function AppNavigator() {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      {Object.entries({
        // Use the screens normally
        ...appScreens,
      }).map(([name, props]) => {
        return (
          <Stack.Screen key={name} name={name as keyof ParamList} {...props} />
        );
      })}
    </Stack.Navigator>
  );
}
