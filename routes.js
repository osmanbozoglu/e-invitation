import React from "react";
import { Platform } from "react-native";

import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator } from "react-navigation-drawer";
import { createBottomTabNavigator } from "react-navigation-tabs";

//SCREENS
import SignIn from "./src/components/auth";
import Comp1 from "./src/components/component1";
import Comp2 from "./src/components/component2";

const AppStack = createBottomTabNavigator({
  Comp2: Comp2,
  Comp1: Comp1
});

const AuthStack = createStackNavigator(
  {
    SignIn: {
      screen: SignIn,
      navigationOptions: navigation => ({
        headerTitle: "E-Invitation"
      })
    }
  },
  {
    defaultNavigationOptions: {
      headerStyle: { backgroundColor: "#ff0000" },
      headerTintColor: "black",
      headerTitleStyle: {
        flex: 1,
        textAlign: "center",
        fontWeight: "bold"
      }
    }
  }
);

export const RootNavigator = () => {
  return createAppContainer(
    createSwitchNavigator(
      {
        App: AppStack,
        Auth: AuthStack
      },
      {
        initialRouteName: "Auth"
      }
    )
  );
};
