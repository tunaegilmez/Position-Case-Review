import { POSITION_BASE_URL } from "./baseUrls";
import {
  oAuthDeleteOptions,
  oAuthPostOptions,
  responseHandler,
} from "./responseHandler";

const url = `${POSITION_BASE_URL}/positions`;

const getPositions = async () => {
  const response = await fetch(url);
  return responseHandler(response);
};

const savePosition = async (data) => {
  const response = await fetch(
    url,
    oAuthPostOptions({
      data,
    })
  );
  return responseHandler(response);
};

const deletePostion = async (positionId) => {
  const response = await fetch(
    url,
    oAuthDeleteOptions({
      positionId,
    })
  );
  return responseHandler(response);
};

export const positionService = {
  getPositions,
  savePosition,
  deletePostion,
};
