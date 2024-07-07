import { Dimensions, Image, ScrollView, StyleSheet } from "react-native";

import { Text } from "@/components/Themed";
import { useLocalSearchParams, useNavigation } from "expo-router";
import { useEffect, useState } from "react";
import fetchAddress from "@/utils/networkUtils/fetch/fetchAddress";

const { height } = Dimensions.get("screen");
export default function ImageScreen() {
  const params = useLocalSearchParams();
  const navigation = useNavigation();
  const [adress, setAdress] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      const adress = await fetchAddress(
        params?.latitude as string,
        params?.longitude as string
      );
      setAdress(adress);
      navigation.setOptions({ title: adress?.split(",")[0] ?? "Photo" });
    })();
  }, [navigation, params?.uri]);

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      scrollEnabled={height < Number(params?.height) / 8}
    >
      <Image
        style={{
          width: "100%",
          height: Number(params?.height) / 10 ?? "100%",
          marginBottom: 24,
        }}
        resizeMode="contain"
        source={{ uri: params?.uri as string }}
      />
      <Text style={styles.adress}>{adress}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 16,
  },
  adress: {
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
    width: "90%",
  },
});
