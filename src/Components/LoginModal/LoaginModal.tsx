import {
  Image,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
import React from "react";
import CustomText from "../../Base/Text/CustomText";
import CustomModal from "../SignupModal/SignupModal";
import { colors } from "../../Theme/colors";
import { images } from "../../../assets";
import CustomButton from "../../Base/Button";

interface ILoginModal {
  isVisible: boolean;
  onClose: () => void;
}

const LoginModal = (props: ILoginModal) => {
  const { width } = useWindowDimensions();
  return (
    <CustomModal isVisible={props.isVisible} closeModal={() => props.onClose()}>
      <View style={[styles.contentContainer, { width: width }]}>
        <View style={{ marginHorizontal: 16, marginTop: 50 }}>
          <CustomText
            preset="heading"
            text={"Signup."}
            style={{ color: colors.black }}
          />
        </View>

        <View
          style={{
            paddingLeft: 16,
            paddingRight: 20,
            marginTop: 30,
            marginBottom: 40,
            width: width - 32,
          }}
        >
          <CustomText
            preset="light"
            text={
              "Sign up to get access to your favorite artist's content or create an account for fans."
            }
            style={{ color: "#4D4D4D", lineHeight: 30, flexShrink: 1 }}
            size="lg"
          />
        </View>
        <View style={{ marginHorizontal: 16 }}>
          <View>
            <CustomButton
              onClick={() => props.onClose()}
              style={{ flexDirection: "row", alignSelf: "center" }}
            >
              <Image source={images.google} style={styles.googleImage} />
              <CustomText
                preset="subheading"
                text={"Sing in with Phone"}
                style={styles.textStyle}
              />
            </CustomButton>
          </View>
          <View style={{ marginVertical: 20 }}>
            <CustomButton
              onClick={() => props.onClose()}
              style={{ flexDirection: "row", alignSelf: "center" }}
            >
              <Image source={images.apple} style={styles.socialImgStyle} />
              <CustomText
                preset="subheading"
                text={"Sing in with Apple"}
                style={styles.textStyle}
              />
            </CustomButton>
          </View>
          <View style={{ paddingBottom: 10 }}>
            <CustomButton
              onClick={() => props.onClose()}
              style={{ flexDirection: "row", alignSelf: "center" }}
            >
              <Image source={images.google} style={styles.googleImage} />
              <CustomText
                preset="subheading"
                text={"Sing in with Phone"}
                style={styles.textStyle}
              />
            </CustomButton>
          </View>
        </View>
        <View style={{ marginVertical: 16 }}>
          <CustomText
            preset="light"
            style={{
              color: colors.grey70,
              flexShrink: 1,
              textAlign: "center",
            }}
          >
            By continuing, you agree to our Terms & conditions and Privacy
            policy.
          </CustomText>
        </View>
      </View>
    </CustomModal>
  );
};

export default LoginModal;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
  },
  modal: {
    borderRadius: 32,
    backgroundColor: colors.white,
    position: "absolute",
    bottom: 0,
  },
  contentContainer: {
    flex: 1,
    // paddingBottom: 10,
    // marginTop: 20,
    // padd: 2,
    // alignItems: "center",
  },
  socialImgStyle: {
    width: 20,
    height: 24,
  },
  googleImage: {
    width: 18,
    height: 18,
  },
  textStyle: {
    color: "#1A1A1A",
    marginLeft: 12,
    fontWeight: "600",
  },
});
