import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ApplicationScreenObject from "@/common/config/ScreenRegister";
import { ScreenInfo } from "@/@types/interfaces";

const Stack = createNativeStackNavigator();
export function RouterProvider(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={ApplicationScreenObject.getFirstScreen}
      >
        {ApplicationScreenObject.getScreens.map(
          (screens: ScreenInfo, index: number): React.JSX.Element => (
            <Stack.Screen
              name={screens.name}
              component={screens.component as React.FC}
              key={index}
              options={screens.options}
            />
          ),
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
