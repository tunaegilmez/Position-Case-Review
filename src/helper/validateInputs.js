export const areFieldsFilled = (fields) => {
  for (const field of fields) {
    if (!field.value || field.value.trim() === "") {
      return false;
    }
  }
  return true;
};
