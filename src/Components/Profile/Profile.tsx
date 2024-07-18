import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import ArtistAvatar from "../../Screen/ProfileScreen/ArtistAvatar";
import FollowerList from "./FollowerList";

const Profile = () => {
  return (
    <View style={{}}>
      <View style={{}}>
        <ArtistAvatar />
      </View>

      <View style={{}}>
        <FollowerList />
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({});
