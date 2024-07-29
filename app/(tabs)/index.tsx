import { Dimensions, Pressable, StyleSheet } from "react-native";
import ViewDripsy from "@/components/themed/ViewDripsy";
import { Image, Row, Text, View } from "dripsy";
import { Video, ResizeMode } from "expo-av";
import React, { useRef } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Colors } from "@/constants/Colors";
import LottieView from "lottie-react-native";
import PlayingAnimation from "@/assets/animations/playing-animation.json";
import SafeAreaViewDripsy from "@/components/themed/SafeAreaViewDripsy";

const HAS_VIDEO = true;

export default function HomeScreen() {
  const video = React.useRef(null);
  const [liked, setLiked] = React.useState(false);
  const [isPlaying, setIsPlaying] = React.useState(false);
  const animationRef = useRef<LottieView>(null);

  return (
    <SafeAreaViewDripsy style={styles.container}>
      <ViewDripsy variant="layout.mainContainer">
        <View
          sx={{
            height: (Dimensions.get("window").height / 9) * 5,
            boxShadow: "md",
            borderRadius: 20,
          }}
        >
          {!HAS_VIDEO ? (
            <Image
              source={{
                uri: "https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/1015f/MainBefore.jpg",
              }}
              style={styles.mediaContainer}
            />
          ) : (
            <Video
              ref={video}
              style={styles.mediaContainer}
              source={{
                uri: "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
              }}
              useNativeControls={false}
              resizeMode={ResizeMode.COVER}
              isLooping
              isMuted
              shouldPlay
            />
          )}
          <View style={styles.mask} />
          <Pressable
            onPress={() => setLiked((prev) => !prev)}
            style={styles.likeButton}
          >
            {liked ? (
              <AntDesign name="heart" size={24} color={Colors.red[5]} />
            ) : (
              <AntDesign name="hearto" size={24} color="white" />
            )}
          </Pressable>
          <View variant="layout.mediaListItemDescription">
            <Text variant="regular" style={styles.whiteText}>
              Description sdjasda ashk adkas hkas ofsa sda asjdasda sd asdadnd
              sakd sadansdksddsnk sadasd asdas
            </Text>
            <Text sx={{ py: "$2" }} variant="big" style={styles.whiteText}>
              TITLE OF THE MOTIVATIONAL VIDEO 2
            </Text>
            <Row style={styles.bottomRow}>
              <Row style={styles.timeBox}>
                <Ionicons name="time-outline" size={18} color="white" />
                <Text
                  sx={{ ml: "$1" }}
                  variant="regular"
                  style={styles.whiteText}
                >
                  17:32
                </Text>
              </Row>
              <Pressable
                onPress={() => {
                  // eslint-disable-next-line no-unused-expressions
                  !isPlaying
                    ? animationRef.current?.play()
                    : animationRef.current?.reset();
                  setIsPlaying((prev) => !prev);
                }}
              >
                <LottieView
                  ref={animationRef}
                  autoPlay={false}
                  loop
                  style={styles.playingAnimation}
                  source={PlayingAnimation}
                />
              </Pressable>
            </Row>
          </View>
        </View>
      </ViewDripsy>
    </SafeAreaViewDripsy>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mediaContainer: {
    width: "100%",
    height: "100%",
    position: "absolute",
    overflow: "hidden",
    borderRadius: 20,
  },
  mask: {
    width: "100%",
    height: "100%",
    position: "absolute",
    overflow: "hidden",
    borderRadius: 20,
    backgroundColor: "black",
    opacity: 0.38,
  },
  whiteText: {
    color: "white",
  },
  playingAnimation: {
    width: 24,
    height: 24,
  },
  bottomRow: { justifyContent: "space-between", width: "100%" },
  timeBox: { alignItems: "center" },
  likeButton: { position: "absolute", top: 32, right: 32, zIndex: 2 },
});
