import { StatusBar } from "expo-status-bar";
import { Platform, StyleSheet } from "react-native";

import { Text, View } from "@/components/Themed";

export default function ModalScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tomás Pinto Kramer</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <Text style={styles.infoText}>
        This app was created with the purpose of demonstrating just a portion of
        what I know. I hope you find it to be of a sufficient level to be
        considered for your project.
      </Text>
      <Text style={styles.aboutText}>About myself:</Text>
      <Text style={styles.infoText}>
        I consider myself a pro-active and responsible person, where through the
        years and experience received, I managed to form me with virtues, which
        I would love to bring to a team. I am an advocate of innovation and
        teamwork. I care about fostering a work space where there is movement,
        creativity, listening, commitment, respect and responsibility. One of
        the qualities that I consider most outstanding about me is my positive
        attitude. I make sure that every space where I work has a positive
        drive. If there are problems, let's look for solutions.
      </Text>

      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 30,
    // justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  infoText: {
    fontSize: 16,
    marginBottom: 15,
  },
  aboutText: {
    fontSize: 18,
    marginBottom: 7,
    fontWeight: "bold",
    alignSelf: "flex-start",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
