import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import Favorite from "../../Components/Favorite/Favorite";

const FavoriteScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Favorite />
    </SafeAreaView>
  );
};

export default FavoriteScreen;

const styles = StyleSheet.create({});
