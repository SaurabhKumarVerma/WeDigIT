import { StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import { AuthContext } from "./Components/Context/AuthContext";
import StackNavigator from "./Navigator/StackNavigator/StackNavigator";
import BottomNavigator from "./Navigator/BottomNavigator/AppNavigator";

const app = () => {
  const { user, loading, login, logout } = useContext(AuthContext);
  return (
    <View style={{ flex: 1 }}>
      {!user ? <StackNavigator /> : <BottomNavigator />}
    </View>
  );
};

export default app;

const styles = StyleSheet.create({});
