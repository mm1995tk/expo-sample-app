import { StatusBar } from "expo-status-bar";
import { ImageSourcePropType, StyleSheet, Text, View } from "react-native";
import ImageViewer from "./components/ImageViewer";
import Button from "./components/Button";
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";

export default function App() {
  const [selectedPhoto, setPhoto] = useState<ImageSourcePropType>();
  const pickImageAsync = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setPhoto(result.assets[0]);
    } else {
      alert("You did not select any image.");
    }
  };
  return (
    <View style={styles.container}>
      <ImageViewer
        placeholderImageSource={{
          uri: "https://docs.expo.dev/static/images/tutorial/background-image.png",
        }}
        selected={selectedPhoto}
      />
      <View style={styles.footerContainer}>
        <Button
          label="Choose a photo"
          theme="primary"
          onPress={pickImageAsync}
        />
        <Button label="Use this photo" />
      </View>
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
  footerContainer: {
    flex: 1 / 3,
    alignItems: "center",
  },
});
