import { POSITION_BASE_URL } from "./baseUrls"
import { oAuthPostOptions, responseHandler } from "./responseHandler"

const getPositions = async () => {
    const url = `${POSITION_BASE_URL}/positions`
    const response = await fetch(url)
    return responseHandler(response)
}

const savePosition = async (data) => {
    const url = `${POSITION_BASE_URL}/positions`
    const response = await fetch(url, oAuthPostOptions({
        data
    }))
    return responseHandler(response)
}

export const positionService = {
    getPositions,
    savePosition,
}