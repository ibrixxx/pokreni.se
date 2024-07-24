import { StyleSheet } from "react-native";
import React from "react";
import { ThemedView } from "@/components/themed/ThemedView";
import { ThemedText } from "@/components/themed/ThemedText";
import { SafeAreaView } from "react-native-safe-area-context";

const ProfileScreen = () => {
  return (
    <ThemedView style={styles.container}>
      <SafeAreaView>
        <ThemedText>profile</ThemedText>
      </SafeAreaView>
    </ThemedView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: { flex: 1 },
});
