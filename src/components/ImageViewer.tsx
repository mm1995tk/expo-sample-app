import { StyleSheet, Image, ImageSourcePropType } from "react-native";

export default function ImageViewer({
  placeholderImageSource,
  selected,
}: {
  placeholderImageSource: ImageSourcePropType;
  selected?: ImageSourcePropType;
}) {
  return (
    <Image source={selected ?? placeholderImageSource} style={styles.image} />
  );
}

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});
