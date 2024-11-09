import {
  Image,
  StyleSheet,
  Text,
  Platform,
  View,
  ImageBackground,
} from "react-native";
import { Link } from "expo-router";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
// Import your global CSS file
import "../constants/global.css";
import { StatusBar } from "expo-status-bar";

import beachImage from "@/assets/meditation-images/beach.webp";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "@/components/CustomButton";
import { useRouter } from "expo-router";

export default function HomeScreen() {
  const router = useRouter();
  return (
    <View className="flex-1">
      <ImageBackground
        source={beachImage}
        resizeMode="cover"
        className="flex-1"
      >
        <LinearGradient
          colors={["rgba(0, 0, 0, 0.4)", "rgba(0, 0, 0, 0.8)"]}
          className="flex-1"
        >
          <SafeAreaView className="flex-1 mx-5 my-12 justify-between">
            <View>
              <Text className="text-center text-red-500 font-bold text-4xl">
                Simple Meditation!
              </Text>
              <Text className="text-center text-white-500 font-bold text-4xl">
                Simple Meditation!
              </Text>
            </View>
            <View>
              <CustomButton
                onPress={() => router.push("/test")}
                title="Get Started"
              />
            </View>
            <StatusBar style="Light" />
          </SafeAreaView>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
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
});
