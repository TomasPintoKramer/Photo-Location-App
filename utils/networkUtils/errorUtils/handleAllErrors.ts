export default function handleAllErrors(error: Error | unknown) {
  console.log("%c⚠️ ~ ERROR - :", "color: red; font-weight: bold;", error);
}
