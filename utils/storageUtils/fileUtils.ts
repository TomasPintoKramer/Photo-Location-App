import * as FileSystem from "expo-file-system";

const copyFileToPermanentLocation = async (tempUri: string) => {
    const fileName = tempUri.split("/").pop();
    if (fileName) {
      const permanentUri = FileSystem?.documentDirectory + fileName;

      await FileSystem.copyAsync({
        from: tempUri,
        to: permanentUri,
      });

      return permanentUri;
    }
};
export default copyFileToPermanentLocation;
