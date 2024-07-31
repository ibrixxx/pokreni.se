import { StyleSheet } from "react-native";
import React from "react";
import SafeAreaViewDripsy from "@/components/themed/SafeAreaViewDripsy";
import ViewDripsy from "@/components/themed/ViewDripsy";
import ProfileCard from "@/components/profile/ProfileCard";
import DevTag from "@/components/profile/DevTag";

const ProfileScreen = () => {
  return (
    <SafeAreaViewDripsy style={styles.container}>
      <ViewDripsy variant="layout.mainContainer">
        <ProfileCard />
        <DevTag />
      </ViewDripsy>
    </SafeAreaViewDripsy>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: { flex: 1 },
});
