import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import ArtistAvatar from "../../Screen/ProfileScreen/ArtistAvatar";
import FollowerList from "./FollowerList";

const Profile = () => {
  return (
    <View style={{ flex: 1 }}>
      <View style={{}}>
        <ArtistAvatar />
      </View>

      <View style={{ flex: 1 }}>
        <FollowerList />
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({});
