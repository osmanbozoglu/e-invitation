import React from "react";
import { Platform } from "react-native";

import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Ionicons from "react-native-vector-icons/Ionicons";
import Entypo from "react-native-vector-icons/Entypo";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import {
  createBottomTabNavigator,
  createMaterialTopTabNavigator
} from "react-navigation-tabs";

//SCREENS
import SignIn from "./src/components/auth";
import Home from "./src/components/home/home";
import Profile from "./src/components/profile/profile";
import Contacts from "./src/components/contact/contact";
import Cards from "./src/components/card/card";
import Invitation from "./src/components/home/invitation";
import Notification from "./src/components/home/notification";
import MyContacts from "./src/components/contact/myContacts";

const HomeStack = createStackNavigator(
  {
    Home: Home,
    Invitation: Invitation,
    Notification: Notification
  },
  {
    headerLayoutPreset: "center",

    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "#20b2aa"
      },
      headerTintColor: "black"
    }
  }
);
const ContactTab = createMaterialTopTabNavigator(
  {
    MyContacts: { screen: MyContacts },
    Contacts: { screen: Contacts }
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === "MyContacts") {
          iconName = "add-user";
          return <Entypo name={iconName} size={25} color={tintColor} />;
        } else if (routeName === "Contacts") {
          iconName = "group";
          return <FontAwesome name={iconName} size={25} color={tintColor} />;
        }
      }
    }),
    initialRouteName: "Contacts",
    order: ["Contacts", "MyContacts"],
    swipeEnabled: true,

    tabBarOptions: {
      activeTintColor: "black",
      showLabel: false,
      activeBackgroundColor: "#20b2aa",
      showIcon: true,
      inactiveBackgroundColor: "#F0F2F2",
      tabStyle: {
        marginTop: 25,
        backgroundColor: "#20b2aa"
      }
    }
  }
);
const ContactStack = createStackNavigator(
  {
    ContactTab: ContactTab,
    Contacts: Contacts
  },
  {
    headerMode: "none"
  }
);

const CardStack = createStackNavigator(
  {
    Cards: Cards
  },
  {
    headerLayoutPreset: "center",

    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "#20b2aa"
      },
      headerTintColor: "black"
    }
  }
);
const ProfileStack = createStackNavigator(
  {
    Profile: Profile
  },
  {
    headerLayoutPreset: "center",

    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "#20b2aa"
      },
      headerTintColor: "black"
    }
  }
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
        if (routeName === "Home") {
          iconName = Platform.OS === "ios" ? "ios-home" : "md-home";
        } else if (routeName === "Contacts") {
          iconName = Platform.OS === "ios" ? "ios-contacts" : "md-contacts";
        } else if (routeName === "Cards") {
          iconName = Platform.OS === "ios" ? "ios-card" : "md-card";
        } else if (routeName === "Profile") {
          iconName = Platform.OS === "ios" ? "ios-person" : "md-person";
        }

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <Ionicons name={iconName} size={25} color={tintColor} />;
      }
    }),
    tabBarOptions: {
      activeTintColor: "black",
      showLabel: false,
      activeBackgroundColor: "#20b2aa",
      inactiveBackgroundColor: "#F0F2F2",
      swipeEnabled: true
    },
    initialRouteName: "Home"
  }
);

const AuthStack = createStackNavigator(
  {
    SignIn: {
      screen: SignIn
    }
  },
  {
    headerMode: "none"
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
        initialRouteName: "App"
      }
    )
  );
};
