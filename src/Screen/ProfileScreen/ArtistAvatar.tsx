import {
  Image,
  Platform,
  StyleSheet,
  View,
  useWindowDimensions,
} from "react-native";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { images } from "../../../assets";
import CustomText from "../../Base/Text/CustomText";
import { colors } from "../../Theme/colors";
import Share from "./Share";

interface IReels {
  imageSource: string;
  authorName: string;
}

const ArtistAvatar = () => {
  const { width, height } = useWindowDimensions();
  const insets = useSafeAreaInsets();
  const topValue = Platform.OS === "ios" ? 0 : 32;
  return (
    <View style={{}}>
      <View style={styles.container}>
        <Image
          source={images.artist}
          style={{
            width: width,
            height: height * 0.5,
          }}
        />
        <View style={styles.socialContainer}>
          <Share />
        </View>
      </View>

      <View
        style={{
          bottom: insets.top,
          marginLeft: 20,
          marginTop: -30,
        }}
      >
        <CustomText
          text={"Akshay"}
          preset="light"
          style={{
            color: colors.white,
            flexShrink: 1,
            fontSize: 20,
            fontWeight: "900",
            lineHeight: 32,
          }}
          size="xs"
        />
      </View>

      <View
        style={{
          marginLeft: 24,
          flexDirection: "row",
          alignItems: "center",
          alignContent: "center",
        }}
      >
        <CustomText
          text={"12.2 M Streams"}
          preset="light"
          style={{
            color: "#B3B3B3",
            flexShrink: 1,
            fontSize: 10,
            fontWeight: "400",
            lineHeight: 24,
            marginRight: 10,
            textAlign: "center",
          }}
          size="xs"
        />
        <View
          style={{
            width: 4,
            height: 4,
            borderRadius: 2,
            backgroundColor: "#B3B3B3",
            alignSelf: "center",
          }}
        />
        <CustomText
          text={"Jan"}
          preset="light"
          style={{
            color: "#B3B3B3",
            flexShrink: 1,
            fontSize: 10,
            fontWeight: "400",
            lineHeight: 24,
            marginLeft: 10,
          }}
          size="xs"
        />
      </View>
    </View>
  );
};

export default ArtistAvatar;

const styles = StyleSheet.create({
  container: {
    position: "relative",
  },
  textHeading: {
    position: "absolute",
    alignSelf: "center",
  },
  socialContainer: {
    position: "absolute",
    alignSelf: "flex-end",
    zIndex: 99,
    flex: 1,
    right: "4%",
    top: 100,
  },
  bottomTextContainer: {
    // position: "absolute",
    // alignSelf: "flex-end",
    // flex: 1,
    width: "90%",
    marginLeft: 20,
    paddingBottom: 10,
    backgroundColor: "red",
  },
});
