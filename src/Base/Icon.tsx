import React from "react";
import { View, StyleSheet, ViewStyle } from "react-native";
import Feather from "@expo/vector-icons/Feather";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import AntDesign from "@expo/vector-icons/AntDesign";
import Entypo from "@expo/vector-icons/Entypo";
import { colors } from "../Theme/colors";

type IconLibraries = {
  [key: string]:
    | typeof MaterialIcons
    | typeof FontAwesome
    | typeof Feather
    | typeof Ionicons
    | typeof AntDesign
    | typeof Entypo;
};

const iconLibraries: IconLibraries = {
  MaterialIcons,
  FontAwesome,
  Ionicons,
  Feather,
  AntDesign,
  Entypo,
};

type IconComponentProps = {
  iconPackage: string;
  iconName: string;
  size: number;
  color: string;
  style?: ViewStyle;
};

const IconButton: React.FC<IconComponentProps> = ({
  iconPackage,
  iconName,
  size,
  color,
  style,
}) => {
  const IconLibrary = iconLibraries[iconPackage];

  if (!IconLibrary) {
    return (
      <View style={[styles.container, style]}>
        <MaterialIcons name={"error"} size={30} color={colors.grey70} />
      </View>
    );
  }

  return (
    <View style={[styles.container, style]}>
      <IconLibrary name={iconName} size={size} color={color} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
});

export default IconButton;
