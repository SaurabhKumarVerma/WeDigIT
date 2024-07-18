import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import { images } from "../../../assets";
import CustomText from "../Text/CustomText";
import IconButton from "../Icon";
import { colors } from "../../Theme/colors";
import { Name, Picture } from "../../types/data.interface";

interface IUserCard {
  imageSource: Picture;
  username: Name;
  membersCount?: string;
}
const UserCard = (props: IUserCard) => {
  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Image
            source={{
              uri: props.imageSource
                ? props.imageSource.medium
                : images.defaultImg,
            }}
            style={{ width: 48, height: 48, borderRadius: 24, marginLeft: 16 }}
          />
          <View style={{ marginLeft: 16 }}>
            <CustomText
              preset="subheading"
              text={`${props.username.first}  ${props.username.last}`}
              style={{ fontWeight: "bold" }}
            />
            <CustomText
              preset="light"
              text={props.membersCount ? props.membersCount : "20k members"}
            />
          </View>
        </View>
        <TouchableOpacity style={{ marginRight: 16 }}>
          <IconButton
            iconName="dots-three-horizontal"
            iconPackage="Entypo"
            color={colors.white}
            size={24}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default UserCard;

const styles = StyleSheet.create({});
