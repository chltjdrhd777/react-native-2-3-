import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

interface weatherType {
  temp: number;
  img: string;
}

export default function Weather(weather: weatherType) {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: weather.img }}
        style={{ height: "30%", width: "30%" }}
      />
      <Text style={styles.text}>temperature : {weather.temp} Celsius</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    fontSize: 30
  }
});
