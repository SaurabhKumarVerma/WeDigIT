import { StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import IconButton from "../../Base/Icon";
import { colors } from "../../Theme/colors";

const Share = () => {
  return (
    <View>
      <TouchableOpacity
        style={{
          backgroundColor: "#00000066",
          height: 32,
          width: 32,
          borderRadius: 16,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <IconButton
          iconName="settings"
          iconPackage="Feather"
          color={colors.grey70}
          size={20}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          backgroundColor: "#00000066",
          height: 32,
          width: 32,
          borderRadius: 16,
          justifyContent: "center",
          alignItems: "center",
          marginVertical: 10,
        }}
      >
        <IconButton
          iconName="edit"
          iconPackage="Feather"
          color={colors.grey70}
          size={20}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Share;

const styles = StyleSheet.create({});
