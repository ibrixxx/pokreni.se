import React from "react";
import ViewDripsy from "@/components/themed/ViewDripsy";
import MediaFlashList from "@/components/list/MediaFlashList";

const LikedMedia = () => {
  return (
    <ViewDripsy variant="layout.mainContainer">
      <MediaFlashList />
    </ViewDripsy>
  );
};

export default LikedMedia;
