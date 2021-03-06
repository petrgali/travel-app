import { expires, getCookie } from "../utils/cookies";
import api from "./api";

const register = async (data) => {
  try {
    const response = await api.post(
      "auth/register",
      data,
    )
    document.cookie = `refreshToken=${response.data.refreshToken}; expires="${expires(604800000)}"; path=/`
    return response.data
  } catch (error) {
    return error.response.data
  }
}

const login = async (data) => {
  try {
    const response = await api.post(
      'auth/login',
      data,
    )
    document.cookie = `refreshToken=${response.data.refreshToken}; expires="${expires(604800000)}"; path=/`
    return response.data
  } catch (error) {
    return error.response.data
  }
}

const me = async () => {
  try {
    const response = await api.get(
      "auth/me",
      {
        headers: {
          Authorization: `Bearer ${getCookie("refreshToken")}`,
        },
      }
    )
    return response.data
  } catch (error) {
    return error.response.data
  }
}

export {
  register,
  login,
  me,
}
