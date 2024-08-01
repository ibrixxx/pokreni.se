import React from "react";
import ViewDripsy from "@/components/themed/ViewDripsy";
import { FlashList } from "@shopify/flash-list";
import MediaCardItem from "@/components/player/MediaCardItem";
import { View } from "dripsy";
import { FAKE_DATA } from "./(tabs)";
import { useHeaderHeight } from "@react-navigation/elements";

const LikedMedia = () => {
  const headerHeight = useHeaderHeight();

  return (
    <ViewDripsy variant="layout.mainContainer">
      <FlashList
        data={FAKE_DATA}
        renderItem={({ item, index }) => (
          <MediaCardItem key={index} uri={item.uri} title={item.title} />
        )}
        estimatedItemSize={10}
        ItemSeparatorComponent={() => <View sx={{ my: "$3" }} />}
        contentContainerStyle={{ paddingTop: headerHeight }}
      />
    </ViewDripsy>
  );
};

export default LikedMedia;
