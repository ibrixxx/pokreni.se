import { StyleSheet } from "react-native";
import { Image } from "expo-image";
import { ThemedView } from "@/components/themed/ThemedView";
import TextDripsy from "@/components/themed/TextDripsy";
import ViewDripsy from "@/components/themed/ViewDripsy";

export default function HomeScreen() {
  return (
    <ViewDripsy style={styles.container}>
      <Image
        style={styles.image}
        source="https://picsum.photos/seed/696/3000/2000"
        contentFit="contain"
        transition={200}
      />
      <TextDripsy variant="text.big" boxShadow={"md"}>
        sdasd
      </TextDripsy>
    </ViewDripsy>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
  image: {
    width: 200,
    height: 200,
    backgroundColor: "#0553",
  },
});
