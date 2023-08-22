import { POSITION_BASE_URL } from "./baseUrls";
import { responseHandler } from "./responseHandler";

const getCurrencys = async () => {
  const url = `${POSITION_BASE_URL}/currency`;
  const response = await fetch(url);
  return responseHandler(response);
};

export const currencyService = {
  getCurrencys,
};
