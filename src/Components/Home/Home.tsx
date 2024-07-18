import { StyleSheet, View } from "react-native";
import React from "react";
import CustomText from "../../Base/Text/CustomText";

const Home = () => {
  return (
    <View style={styles.container}>
      <CustomText text={"Home"} preset="heading" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default Home;
