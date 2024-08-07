import ParallaxScrollView from "@/components/animated/ParallaxScrollView";
import { ThemedView } from "@/components/themed/ThemedView";
import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet, Switch } from "react-native";
import {
  AuthorizationPermissions,
  FitnessDataType,
  FitnessTracker,
  GoogleFitDataType,
  HealthKitDataType,
} from "@kilohealth/rn-fitness-tracker";
import { useEffect, useState } from "react";
import TextDripsy from "@/components/themed/TextDripsy";

const permissions: AuthorizationPermissions = {
  healthReadPermissions: [HealthKitDataType.StepCount],
  googleFitReadPermissions: [GoogleFitDataType.Steps],
};

export default function CommunityScreen() {
  const [steps, setSteps] = useState(0);

  const getStepsToday = async () => {
    try {
      const authorized = await FitnessTracker.authorize(permissions);

      if (!authorized) return;

      const stepsToday = await FitnessTracker.getStatisticTodayTotal(
        FitnessDataType.Steps
      );
      setSteps(stepsToday);
      // returns the number of steps walked today, e.g. 320
      console.debug("res: ", stepsToday);
    } catch (error) {
      // Handle error here
      console.debug("err:", error);
    }
  };

  useEffect(() => {
    getStepsToday();
  }, []);

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#D0D0D0", dark: "#353636" }}
      headerImage={
        <Ionicons size={310} name="code-slash" style={styles.headerImage} />
      }
    >
      <ThemedView>
        <TextDripsy>{steps}</TextDripsy>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: "#808080",
    bottom: -90,
    left: -35,
    position: "absolute",
  },
});
