import { Text, View } from "@/components/Themed";
import React, { useEffect, useState } from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Dimensions,
  Alert,
  Linking,
} from "react-native";
import * as Location from "expo-location";
import StyledPressable from "@/components/StyledPressable";
import PressableLink from "@/components/PressableLink";
import openCamera from "@/utils/camaraUtils/openCamara";
import PermissionAlert from "@/utils/alertUtils/PermissionAlert";

const numColumns = 3;
const padding = 8;
const { width, height } = Dimensions.get("screen");
const size = (width - padding * 2) / numColumns;

type ImageType = {
  location?: {
    latitude?: number;
    longitude?: number;
  };
  uri: string;
  assetId?: string | null;
  width: number;
  height: number;
  type?: "image" | "video";
  fileName?: string | null;
  fileSize?: number;
  exif?: Record<string, any> | null;
  base64?: string | null;
  duration?: number | null;
  mimeType?: string;
};
const GalleryScreen = () => {
  const [images, setImages] = useState<ImageType[]>([]); // Aquí se guardarán las imágenes capturadas

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        PermissionAlert("location");
        return;
      }
    })();
  }, []);

  const handleCamera = async () => {
    const imageWithLocation = await openCamera();
    if (imageWithLocation) {
      setImages((prev) => [...prev, imageWithLocation]);
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={images}
        renderItem={({ item }) => (
          <PressableLink
            linkProps={{
              href: {
                pathname: "/[image]",
                params: {
                  uri: item?.uri,
                  latitude: item?.location?.latitude,
                  longitude: item?.location?.longitude,
                  width: item?.width,
                  height: item?.height,
                },
              },
            }}
          >
            <Image source={{ uri: item.uri }} style={styles.image} />
          </PressableLink>
        )}
        keyExtractor={(item, index) => index + item.uri}
        numColumns={numColumns}
      />
      <StyledPressable style={styles.button} onPress={handleCamera}>
        <Text style={styles.buttonLabel}>Take Photo</Text>
      </StyledPressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding,
    height,
    width,
  },
  image: {
    justifyContent: "center",
    alignItems: "center",
    height: size,
    width: size, // Asegura que el ancho sea igual al tamaño calculado para mantener la proporción
  },
  button: {
    position: "absolute",
    bottom: "20%",
    alignSelf: "center",
    paddingVertical: 6,
    paddingHorizontal: 24,
    borderWidth: 2,
    borderColor: "black",
    backgroundColor: "white",
    borderRadius: 14,
    elevation: 2,
    zIndex: 2,
  },

  buttonLabel: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
    color: "black",
  },
});

export default GalleryScreen;
