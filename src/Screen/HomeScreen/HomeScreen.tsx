import { SafeAreaView, StyleSheet, View } from "react-native";
import React from "react";
import CustomText from "../../Base/Text/CustomText";
import Home from "../../Components/Home/Home";

const HomeScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Home />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
