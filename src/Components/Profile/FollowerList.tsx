import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import UserCard from "../../Base/UserCard/UserCard";
import { User } from "../../types/data.interface";
import CustomText from "../../Base/Text/CustomText";

const FollowerList = () => {
  const [follower, setFollower] = useState<User[]>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    fetchingFollowersData();
  }, []);

  const fetchingFollowersData = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get("https://randomuser.me/api/?results=50");
      if (response.data) {
        setFollower(response.data.results);
        setIsLoading(false);
      }
    } catch (error) {
      setIsLoading(false);
      console.log("Error While Fetching Data", error);
      setFollower([]);
    }
  };

  const renderItem = (item: User) => {
    return (
      <View style={{ marginBottom: 14 }}>
        <UserCard username={item.name} imageSource={item.picture} />
      </View>
    );
  };

  if (isLoading) {
    return <ActivityIndicator />;
  }

  return (
    <View style={{ flex: 1 }}>
      <View style={{ marginLeft: 18, paddingTop: 10 }}>
        <CustomText
          text={"Joined Communities"}
          style={{
            fontSize: 14,
            lineHeight: 32,
            fontWeight: "700",
            color: "#F1F1F3",
          }}
        />
      </View>
      <FlatList
        data={follower}
        renderItem={({ item }) => renderItem(item)}
        keyExtractor={(_, index) => index.toString()}
        contentContainerStyle={{ marginVertical: 18 }}
        ListFooterComponent={() => {
          return <View style={{ marginBottom: 100 }} />;
        }}
        style={{}}
      />
    </View>
  );
};

export default FollowerList;

const styles = StyleSheet.create({});
