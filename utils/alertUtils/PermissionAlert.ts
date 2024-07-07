import { Alert, Linking } from "react-native";

const PermissionAlert = (permissionOf: "camera access" | "location") =>
  Alert.alert(
    "Permission Required",
    `You need to grant ${permissionOf} to take photos`,
    [
      {
        text: "Cancel",
        style: "cancel",
      },
      { text: "Settings", onPress: () => Linking.openSettings() },
    ]
  );
export default PermissionAlert;
