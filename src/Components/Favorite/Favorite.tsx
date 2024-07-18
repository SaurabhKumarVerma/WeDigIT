import { StyleSheet, View } from "react-native";
import React from "react";
import CustomText from "../../Base/Text/CustomText";

const Favorite = () => {
  return (
    <View style={styles.container}>
      <CustomText text={"Favorite"} preset="heading" />
    </View>
  );
};

export default Favorite;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
