import React, { useCallback, useState } from "react";
import { FlashList, ViewToken } from "@shopify/flash-list";
import { useHeaderHeight } from "@react-navigation/elements";
import MediaCardItem, {
  MediaCardItemProps,
} from "@/components/player/MediaCardItem";
import { View } from "dripsy";
import { ViewStyle } from "react-native";

const FAKE_DATA = [
  {
    id: 1,
    title: "ANE ASDNASD ASDMASAL ASD",
    uri: "https://videos.pexels.com/video-files/5667135/5667135-uhd_1440_2732_30fps.mp4",
  },
  {
    id: 2,
    title: "ASDDASD SAD",
    uri: "https://videos.pexels.com/video-files/5319934/5319934-uhd_2560_1440_25fps.mp4",
  },
  {
    id: 3,
    title: "DASJDSAOS",
    uri: "https://videos.pexels.com/video-files/6944288/6944288-uhd_1440_2560_24fps.mp4",
  },
  {
    id: 4,
    title: "DASJD AASOS ASDDA W ASS 2",
    uri: "https://videos.pexels.com/video-files/6944305/6944305-uhd_1440_2560_24fps.mp4",
  },
  {
    id: 5,
    title: "DWM KKI DSAOS U NOCE DESE",
    uri: "https://videos.pexels.com/video-files/5752365/5752365-uhd_1440_2560_25fps.mp4",
  },
  {
    id: 6,
    title: "LORME IPSUM DOLEOWS ESDR SDSA",
    uri: "https://videos.pexels.com/video-files/9669111/9669111-hd_1080_1920_25fps.mp4",
  },
];

const MediaFlashList = ({
  contentContainerStyle,
}: {
  contentContainerStyle?: ViewStyle;
}) => {
  const headerHeight = useHeaderHeight();
  const [visibleItems, setVisibleItems] = useState<number[]>([]);

  const viewabilityConfig = {
    minimumViewTime: 200,
    viewAreaCoveragePercentThreshold: 60,
  };

  const onViewableItemsChanged = useCallback(
    ({
      viewableItems,
    }: {
      viewableItems: ViewToken[];
      changed: ViewToken[];
    }) => {
      const visibleItemIds = viewableItems.map(
        (viewToken) => (viewToken.item as MediaCardItemProps).id
      );
      setVisibleItems(visibleItemIds);
    },
    []
  );

  const renderItem = useCallback(
    ({ item }: { item: MediaCardItemProps }) => (
      <MediaCardItem
        key={item.id}
        id={item.id}
        uri={item.uri}
        title={item.title}
        shouldPlay={visibleItems.includes(item.id)}
      />
    ),
    [visibleItems]
  );

  const keyExtractor = useCallback(
    (item: MediaCardItemProps) => item.id.toString(),
    []
  );

  return (
    <FlashList
      data={FAKE_DATA}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      estimatedItemSize={10}
      ItemSeparatorComponent={() => <View sx={{ my: "$3" }} />}
      contentContainerStyle={{
        paddingTop: headerHeight,
        ...contentContainerStyle,
      }}
      extraData={visibleItems}
      onViewableItemsChanged={onViewableItemsChanged}
      viewabilityConfig={viewabilityConfig}
    />
  );
};

export default MediaFlashList;
