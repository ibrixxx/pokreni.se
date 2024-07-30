import { ViewProps } from "react-native";
import React from "react";
import { Searchbar } from "react-native-paper";
import { useTheme } from "@/hooks/useTheme";
import { ThemeColors } from "@/constants/Colors";

const MediaSearchBar = ({ style }: ViewProps) => {
  const { theme } = useTheme();
  const [searchQuery, setSearchQuery] = React.useState("");

  return (
    <Searchbar
      placeholder="Search"
      onChangeText={setSearchQuery}
      value={searchQuery}
      style={[
        {
          backgroundColor: ThemeColors[theme!].searchBarColor,
          borderRadius: 20,
        },
        style,
      ]}
      placeholderTextColor={ThemeColors[theme!].textSecondary}
      iconColor={ThemeColors[theme!].textSecondary}
      elevation={1}
    />
  );
};

export default MediaSearchBar;
