import { StyleSheet, View } from "react-native";
import React from "react";
import Icon from "@expo/vector-icons/Ionicons";
import { colors } from "../../Theme/colors";
import IconButton from "../../Base/Icon";
import { SCREEN_NAME } from "../ScreenName/ScreenName";
interface IBottomIcon {
  isFocused: boolean;
  routeName: string;
  index: number;
}

/**
 * A clickable icon that displays a given route name and its corresponding icon. The icon name is determined by the `routeName` prop and a map of route names to icon names. If the icon is currently selected, the container will have a black background color, and the route name will be displayed below the icon. If the icon is not selected, the container will have a transparent background color and the route name will not be displayed.
 *
 * @param {IBottomIcon} props - The component props.
 * @param {boolean} props.isFocused - A boolean value that indicates whether the icon is currently selected.
 * @param {string} props.routeName - A string that represents the name of the route associated with the icon.
 * @param {number} props.index - An index that can be used to differentiate between multiple icons.
 */

const BottomIcon = (props: IBottomIcon) => {
  let IconLibrary: string = "MaterialIcons";
  
  const routeMap = {
    Home: "home-outline",
    Favorite: "favorite-border",
    Profile: "user-circle",
  };

  const routeName = (name: string) => {
    const defaultIconName = "bed";
    const iconName = routeMap[name];
    return iconName || defaultIconName;
  };

  switch (props.routeName) {
    case SCREEN_NAME.HOME:
      IconLibrary = "Ionicons";
      break;
    case SCREEN_NAME.FAVORITE:
      IconLibrary = "MaterialIcons";
      break;
    default:
      IconLibrary = "FontAwesome";
  }
  return (
    <View style={styles.iconContainer}>
      <View style={[styles.container]}>
        <IconButton
          iconPackage={IconLibrary}
          iconName={routeName(props.routeName)}
          size={32}
          color={props.isFocused ? colors.white : colors.grey70}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 24,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    flexDirection: "row",
    zIndex: 1,
  },
  routeNameStyle: {
    color: "grey",
    fontSize: 14,
    fontWeight: "500",
    overflow: "hidden",
  },
  iconContainer: {
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
  },
});

export default BottomIcon;
