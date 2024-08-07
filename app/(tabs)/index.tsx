import { Platform, StyleSheet } from "react-native";
import ViewDripsy from "@/components/themed/ViewDripsy";
import React, { useLayoutEffect } from "react";
import SafeAreaViewDripsy from "@/components/themed/SafeAreaViewDripsy";
import { useSx } from "dripsy";
import MediaSearchBar from "@/components/player/MediaSearchBar";
import { useNavigation } from "expo-router";
import MediaFlashList from "@/components/list/MediaFlashList";

export default function HomeScreen() {
  const sx = useSx();
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerSearchBarOptions: { placeholder: "dasd" },
    });
  }, [navigation]);

  return (
    <SafeAreaViewDripsy style={styles.container}>
      <ViewDripsy variant="layout.mainContainer">
        <MediaSearchBar style={sx({ mb: "$3" })} />
        <MediaFlashList />
      </ViewDripsy>
    </SafeAreaViewDripsy>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "ios" ? 0 : 42,
  },
});
