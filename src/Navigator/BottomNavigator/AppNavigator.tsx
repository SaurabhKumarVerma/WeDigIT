import React from "react";
import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";

import CustomBottomTabBar from "./CustomBottomTabBar";
import { SCREEN_NAME } from "../ScreenName/ScreenName";
import FavoriteScreen from "../../Screen/FavoriteScreen/FavoriteScreen";
import HomeScreen from "../../Screen/HomeScreen/HomeScreen";
import ProfileScreen from "../../Screen/ProfileScreen/ProfileScreen";

/**
 * The BottomNavigation component is a custom bottom navigation bar that renders two tabs:
 * Home, Favorite, Profile.
 *
 * This component uses the `createBottomTabNavigator` function from the `@react-navigation/bottom-tabs`
 * package to create the tab navigation bar. The `CustomBottomTabBar` component is used as the
 * `tabBar` prop, which renders a custom tab bar with the appropriate icons.
 *
 * The `BottomNavigator` component also utilizes the `useNavigation` hook from the `@react-navigation/native`
 * package to access the navigation stack and pass the `navigation` object to the `CustomBottomTabBar` component.
 */

const CustomBottomTabs = (props: BottomTabBarProps) => {
  return <CustomBottomTabBar {...props} />;
};

const BottomNavigator = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      initialRouteName={SCREEN_NAME.HOME}
      tabBar={CustomBottomTabs}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen name={SCREEN_NAME.HOME} component={HomeScreen} />
      <Tab.Screen name={SCREEN_NAME.FAVORITE} component={FavoriteScreen} />
      <Tab.Screen name={SCREEN_NAME.PROFILE} component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default BottomNavigator;
