import { StyleSheet } from "react-native";
import ViewDripsy from "@/components/themed/ViewDripsy";
import React from "react";
import SafeAreaViewDripsy from "@/components/themed/SafeAreaViewDripsy";
import { FlashList } from "@shopify/flash-list";
import MediaCardItem from "@/components/player/MediaCardItem";
import { View } from "dripsy";

const FAKE_DATA = [
  {
    title: "ANE ASDNASD ASDMASAL ASD",
    uri: "https://videos.pexels.com/video-files/5667135/5667135-uhd_1440_2732_30fps.mp4",
  },
  {
    title: "ASDDASD SAD",
    uri: "https://videos.pexels.com/video-files/5319934/5319934-uhd_2560_1440_25fps.mp4",
  },
  {
    title: "DASJDSAOS",
    uri: "https://videos.pexels.com/video-files/6944288/6944288-uhd_1440_2560_24fps.mp4",
  },
  {
    title: "DASJD AASOS ASDDA W ASS 2",
    uri: "https://videos.pexels.com/video-files/6944305/6944305-uhd_1440_2560_24fps.mp4",
  },
  {
    title: "DWM KKI DSAOS U NOCE DESE",
    uri: "https://videos.pexels.com/video-files/5752365/5752365-uhd_1440_2560_25fps.mp4",
  },
  {
    title: "LORME IPSUM DOLEOWS ESDR SDSA",
    uri: "https://videos.pexels.com/video-files/9669111/9669111-hd_1080_1920_25fps.mp4",
  },
];

export default function HomeScreen() {
  return (
    <SafeAreaViewDripsy style={styles.container}>
      <ViewDripsy variant="layout.mainContainer">
        <FlashList
          data={FAKE_DATA}
          renderItem={({ item, index }) => (
            <MediaCardItem key={index} uri={item.uri} title={item.title} />
          )}
          estimatedItemSize={10}
          ItemSeparatorComponent={() => <View sx={{ my: "$3" }} />}
        />
      </ViewDripsy>
    </SafeAreaViewDripsy>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
