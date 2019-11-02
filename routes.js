import React from 'react';
import { Platform } from 'react-native';

import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from 'react-navigation-tabs';

//SCREENS
import SignIn from './src/components/auth';
import Home from './src/components/home/home';
import Profile from './src/components/profile/profile';
import Contacts from './src/components/contact/contact';
import Cards from './src/components/card/card';

const headerConf = {
  headerLayoutPreset: 'center',
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: '#20b2aa'
    },
    headerTintColor: 'black',
    headerTitle: 'E-Invitation'
  }
};

const HomeStack = createStackNavigator(
  {
    Home: Home
  },
  headerConf
);
const ContactStack = createStackNavigator(
  {
    Contacts: Contacts
  },
  headerConf
);
const CardStack = createStackNavigator(
  {
    Cards: Cards
  },
  headerConf
);
const ProfileStack = createStackNavigator(
  {
    Profile: Profile
  },
  headerConf
);

const AppStack = createBottomTabNavigator(
  {
    Home: {
      screen: HomeStack
    },
    Contacts: {
      screen: ContactStack
    },
    Cards: {
      screen: CardStack
    },
    Profile: {
      screen: ProfileStack
    }
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Home') {
          iconName = Platform.OS === 'ios' ? 'ios-home' : 'md-home';
        } else if (routeName === 'Contacts') {
          iconName = Platform.OS === 'ios' ? 'ios-contacts' : 'md-contacts';
        } else if (routeName === 'Cards') {
          iconName = Platform.OS === 'ios' ? 'ios-card' : 'md-card';
        } else if (routeName === 'Profile') {
          iconName = Platform.OS === 'ios' ? 'ios-person' : 'md-person';
        }

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <Ionicons name={iconName} size={25} color={tintColor} />;
      }
    }),
    tabBarOptions: {
      activeTintColor: 'black',
      showLabel: false,
      activeBackgroundColor: '#D99C9C',
      inactiveBackgroundColor: '#F0F2F2'
    },
    initialRouteName: 'Home'
  }
);

const AuthStack = createStackNavigator(
  {
    SignIn: {
      screen: SignIn
    }
  },
  {
    headerMode: 'none'
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
        initialRouteName: 'App'
      }
    )
  );
};
