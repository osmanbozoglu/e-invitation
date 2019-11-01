import React from 'react';
import { Platform } from 'react-native';

import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createBottomTabNavigator } from 'react-navigation-tabs';

//SCREENS
import SignIn from './src/components/auth';
import Comp1 from './src/components/component1';
import Comp2 from './src/components/component2';

import CompOne from './src/components/component1/compone';
import CompTwo from './src/components/component2/comptwo';

import Logo from './src/utils/logo';
const headerConf = {
  headerLayoutPreset: 'center',
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: 'red'
    },
    headerTintColor: 'black',
    headerTitle: Logo
  }
};

const CompOneStack = createStackNavigator(
  {
    Comp1: Comp1,
    CompOne: CompOne
  },
  headerConf
);

const CompTwoStack = createStackNavigator(
  {
    Comp2: Comp2,
    CompTwo: CompTwo
  },
  headerConf
);

const AppStack = createBottomTabNavigator(
  {
    Comp1: CompOneStack,
    Comp2: CompTwoStack
  },
  {
    tabBarOptions: {
      activeTintColor: 'white',
      showLabel: false,
      activeBackgroundColor: 'red',
      inactiveBackgroundColor: 'white',
      style: {
        backgroundColor: 'white'
      }
    }
  }
);

const AuthStack = createStackNavigator(
  {
    SignIn: {
      screen: SignIn
    }
  },
  {
    headerMode: 'none',
    defaultNavigationOptions: {
      headerStyle: { backgroundColor: '#ff0000' },
      headerTintColor: 'black',
      headerTitleStyle: {
        flex: 1,
        textAlign: 'center',
        fontWeight: 'bold'
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
        initialRouteName: 'Auth'
      }
    )
  );
};
