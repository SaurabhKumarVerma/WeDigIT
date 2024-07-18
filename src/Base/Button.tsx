import {
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";

interface ICustomButton {
  children: React.ReactNode;
  onClick: () => void;
  style?: any;
}
const CustomButton = (props: ICustomButton) => {
  let st = props.style ? props.style : {};
  return (
    <TouchableOpacity onPress={props.onClick} style={styles.container}>
      <View style={[styles.childrenContainer, { ...st }]}>
        {props.children}
      </View>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F7F7F8",
    borderRadius: 28,
  },
  childrenContainer: {
    paddingVertical: 16,
    alignItems: "center",
  },
});
