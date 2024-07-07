import { Alert, Linking } from "react-native";
import * as ImagePicker from "expo-image-picker";
import * as Location from "expo-location";
import handleAllErrors from "../networkUtils/errorUtils/handleAllErrors";
import PermissionAlert from "../alertUtils/PermissionAlert";
import copyFileToPermanentLocation from "../storageUtils/fileUtils";

const openCamera = async () => {
  try {
    // Solicita el permiso para acceder a la cámara
    const permissionResult = await ImagePicker.requestCameraPermissionsAsync();
    if (permissionResult.granted === false) {
      PermissionAlert("camera access");
      return;
    }
    // Abre la cámara
    const location = await Location.getLastKnownPositionAsync();
    const result = await ImagePicker.launchCameraAsync();
    if (!result?.canceled) {
      // const permanentUri = await copyFileToPermanentLocation(
      //   result.assets[0]?.uri
      // );
      const imageWithLocation = {
        ...result.assets[0],
        uri:  result.assets[0]?.uri,
        location: {
          latitude: location?.coords.latitude,
          longitude: location?.coords.longitude,
        },
      };

      return imageWithLocation;
    }
  } catch (error) {
    handleAllErrors(error);
  }
};

export default openCamera;
