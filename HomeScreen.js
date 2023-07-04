import React from "react";
import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import { NavigationContext } from "@react-navigation/native";

export function HomeScreen() {
  const navigation = React.useContext(NavigationContext);
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Button
        title="WithOptions"
        backgroundColor="#00FFFF"
        onPress={() => {
          navigation.navigate("WithOptions");
        }}
      />

      <Button
        title="WithShortUrl"
        backgroundColor="#00FFFF"
        onPress={() => {
          navigation.navigate("WithShortUrl");
        }}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
