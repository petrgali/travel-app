import { getCookie } from "../utils/cookies"
import api from "./api"

const getRatings = async (country, capital) => {
  try {
    const response = await api.get(
      `rates/single/?country=${country}&capital=${capital}`,
    )
    return response.data
  } catch (error) {
    return error.response.data
  }
}

const createRating = async (data) => {
  const response = await api.post(
    "rates/create",
    data,
    {
      headers: {
        Authorization: `Bearer ${getCookie("refreshToken")}`,
      },
    }
  )
  return response.data
} 

export {
  getRatings,
  createRating
}
