import {
  Image,
  ImageBackground,
  StyleSheet,
  useWindowDimensions,
  View,
} from "react-native";
import React, { useContext, useState } from "react";
import { images } from "../../../assets";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import CustomText from "../../Base/Text/CustomText";
import SwipeUnlock from "../../Base/SlideButton/SlideButton";
import LoginModal from "../LoginModal/LoaginModal";
import { AuthContext } from "../Context/AuthContext";

const Login = () => {
  const { width } = useWindowDimensions();
  const { user, loading, login, logout } = useContext(AuthContext);
  const [toggleState, setToggleState] = useState<boolean>(false);
  const { top, bottom } = useSafeAreaInsets();
  const handleClosePress = () => setToggleState(!toggleState);

  const navigateToHome = () => {
    login(true);
    handleClosePress();
  };

  const loginModal = () => {
    return (
      <LoginModal
        isVisible={toggleState}
        onClose={() => setToggleState(false)}
      />
    );
  };

  return (
    <ImageBackground
      source={images.backgroundImage}
      style={{ flex: 1, width: width, alignSelf: "center" }}
    >
      <View
        style={{
          alignSelf: "center",
          top: top,
          marginTop: 50,
          flex: 1,
        }}
      >
        <View style={{ alignItems: "center" }}>
          <Image source={images.loginImg} style={{ width: 125, height: 110 }} />
        </View>
        <View style={{ marginTop: 20, paddingHorizontal: 40 }}>
          <CustomText
            text={
              "An exclusive community of musicians and the people who love and support them."
            }
            style={{
              flexShrink: 1,
              lineHeight: 34,
              textAlign: "center",
              color: "#BFBFBF",
              fontSize: 16,
              letterSpacing: 1,
            }}
            size="md"
          />
        </View>
      </View>
      <View
        style={{
          flex: 1,
          alignSelf: "center",
          bottom: bottom,
        }}
      >
        <View
          style={{
            flex: 1,
          }}
        >
          <SwipeUnlock onUnlock={() => navigateToHome()} />
        </View>
      </View>
      {loginModal()}
    </ImageBackground>
  );
};

export default Login;

const styles = StyleSheet.create({});
