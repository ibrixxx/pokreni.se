import React, { useRef } from "react";
import {
  TouchableOpacity,
  StyleSheet,
  Platform,
  Pressable,
} from "react-native";
import {
  NavigationHelpers,
  ParamListBase,
  TabNavigationState,
} from "@react-navigation/native";
import { EdgeInsets } from "react-native-safe-area-context";
import { ThemedView } from "@/components/themed/ThemedView";
import { TabBarIcon } from "@/components/icons/TabBarIcon";
import PlayAnimation from "@/assets/animations/play-animation.json";
import { useTheme } from "@/hooks/useTheme";
import { ThemeColors } from "@/constants/Colors";
import LottieView from "lottie-react-native";

interface CustomTabBarProps {
  state: TabNavigationState<ParamListBase>;
  descriptors: any;
  navigation: NavigationHelpers<ParamListBase, any>;
  insets: EdgeInsets;
}

export const CustomMainTabLayout = ({
  state,
  descriptors,
  navigation,
}: CustomTabBarProps) => {
  const animationRef = useRef<LottieView>(null);
  const { theme } = useTheme();

  return (
    <ThemedView
      style={[
        styles.tabBar,
        { backgroundColor: ThemeColors[theme ?? "light"].tabBarBackground },
      ]}
    >
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label = options.tabBarLabel ?? options.title ?? route.name;
        const color = options.tabBarActiveTintColor;

        const tabBarIconName = () => {
          if (label === "index")
            return isFocused ? "headset" : "headset-outline";
          else return isFocused ? "person" : "person-outline";
        };

        const isFocused = state.index === index;

        const onPress = (shouldAnimate: boolean = false) => {
          if (!isFocused) {
            if (shouldAnimate) animationRef?.current?.play();
            navigation.navigate(route.name);
          }
        };

        if (index === 1) {
          return (
            <Pressable
              key={index}
              onPress={() => onPress(true)}
              onLongPress={() => onPress(true)}
              style={styles.middleTab}
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
            >
              <LottieView
                ref={animationRef}
                autoPlay={false}
                loop={false}
                speed={2}
                style={styles.logo}
                source={PlayAnimation}
              />
            </Pressable>
          );
        }

        return (
          <TouchableOpacity
            key={index}
            onPress={() => onPress(false)}
            onLongPress={() => onPress(false)}
            style={styles.tab}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
          >
            <TabBarIcon name={tabBarIconName()} color={color} />
          </TouchableOpacity>
        );
      })}
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: "row",
    height: Platform.OS === "ios" ? 80 : 70,
    borderTopWidth: 0,
    alignItems: "center",
    justifyContent: "space-around",
  },
  tab: {
    width: "100%",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: Platform.OS === "ios" ? 10 : 0,
  },
  middleTab: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: -30, // Adjust this to make the logo protrude more or less
  },
  logo: {
    width: 100,
    height: 100,
    borderRadius: 50,
    resizeMode: "contain",
  },
});
