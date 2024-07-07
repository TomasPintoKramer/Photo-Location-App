import handleAllErrors from "../errorUtils/handleAllErrors";
const GOOGLE_MAPS_API_KEY = process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY;

const fetchAddress = async (latitude?: string, longitude?: string) => {
  const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${GOOGLE_MAPS_API_KEY}`;

  try {
    const response = await fetch(url);
    const data = await response?.json();
    if (data.status === "OK") {
      // Retorna la dirección completa del primer resultado
      return data.results[0].formatted_address;
    } else {
      throw new Error("No se pudo obtener la dirección");
    }
  } catch (error) {
    handleAllErrors(error);
  }
};

export default fetchAddress;
