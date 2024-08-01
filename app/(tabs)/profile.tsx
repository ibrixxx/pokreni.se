import { Dimensions, StyleSheet } from "react-native";
import React, { useState } from "react";
import SafeAreaViewDripsy from "@/components/themed/SafeAreaViewDripsy";
import ViewDripsy from "@/components/themed/ViewDripsy";
import ProfileCard from "@/components/profile/ProfileCard";
import DevTag from "@/components/profile/DevTag";
import BottomModal from "@/components/modals/BottomModal";
import EditProfileContent from "@/components/profile/EditProfileContent";

const ProfileScreen = () => {
  const [visible, setVisible] = useState(true);

  return (
    <SafeAreaViewDripsy style={styles.container}>
      <ViewDripsy variant="layout.mainContainer">
        <ProfileCard />
        <DevTag />
      </ViewDripsy>
      <BottomModal
        isVisible={visible}
        onClose={() => setVisible(false)}
        height={Dimensions.get("screen").height * 0.6}
      >
        <EditProfileContent />
      </BottomModal>
    </SafeAreaViewDripsy>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: { flex: 1 },
});
