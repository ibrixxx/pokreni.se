import { Dimensions, Platform, StyleSheet } from "react-native";
import React, { useState } from "react";
import SafeAreaViewDripsy from "@/components/themed/SafeAreaViewDripsy";
import ViewDripsy from "@/components/themed/ViewDripsy";
import ProfileCard from "@/components/profile/ProfileCard";
import DevTag from "@/components/profile/DevTag";
import BottomModal from "@/components/modals/BottomModal";
import EditProfileContent from "@/components/profile/EditProfileContent";
import RegisterScreen from "@/components/profile/RegisterScreen";

const REGISTERED = false;

const ProfileScreen = () => {
  const [visible, setVisible] = useState(true);

  return (
    <SafeAreaViewDripsy style={styles.container}>
      {REGISTERED ? (
        <ViewDripsy variant="layout.mainContainer">
          <ProfileCard />
        </ViewDripsy>
      ) : (
        <RegisterScreen />
      )}
      <DevTag />
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
  container: { flex: 1, paddingTop: Platform.OS === "ios" ? 0 : 42 },
});
