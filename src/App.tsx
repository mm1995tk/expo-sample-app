import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import ImageViewer from "./components/ImageViewer";

export default function App() {
  return (
    <View style={styles.container}>
      <ImageViewer
        placeholderImageSource={{
          uri: "https://docs.expo.dev/static/images/tutorial/background-image.png",
        }}
      />
      {/* <Text>Open up App.tsx to start working on your app!</Text> */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    alignItems: "center",
    justifyContent: "center",
  },
});
