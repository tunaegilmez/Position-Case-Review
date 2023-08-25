export const areFieldsFilled = (fields) => {
  for (const field of fields) {
    if (
      field.value === null ||
      field.value === undefined ||
      String(field.value).trim() === ""
    ) {
      return false;
    }
  }
  return true;
};
