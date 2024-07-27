import { StyleSheet } from "react-native";
import TextDripsy from "@/components/themed/TextDripsy";
import ViewDripsy from "@/components/themed/ViewDripsy";

export default function HomeScreen() {
  return (
    <ViewDripsy style={styles.container}>
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
