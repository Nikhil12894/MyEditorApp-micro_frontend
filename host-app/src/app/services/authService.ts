import axios from "axios";

const API_BASE_URL = "http://localhost:8085/api";

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true, // Include cookies for cross-origin requests
});

export const login = (redirectUri: string): void => {
  window.location.href = `${API_BASE_URL}/auth/login?redirectUri=${encodeURIComponent(
    redirectUri
  )}`;
};

export const logout = async (redirectUri: string): Promise<string> => {
  try {
    // Call the logout API securely
    const response = await axios.get(`${API_BASE_URL}/auth/logout`, {
      params: { redirectUri },
      withCredentials: true, // Include cookies for authentication
    });

    if (response.status === 200) {
    if (typeof response.data === "string") {
      return response.data; // Return the string data from the response
    } else if (typeof response.data?.redirectUrl === "string") {
      window.location.href = response.data.redirectUrl;
      return "redirecting";
    } else {
      console.error(
        "Backend did not return a string or redirectUrl in the response data"
      );
      throw new Error("Invalid response from backend"); // Or return a default string
    }
  } else {
    console.error("Test request returned non-200 status:", response.status);
    throw new Error(`Test request failed with status ${response.status}`);
  }
  } catch (error) {
    console.error("Logout failed:", error);
    throw error;
  }
};

export const testData = async (): Promise<string> => {
  try {
    const response = await axios.get(`${API_BASE_URL}/auth/token`, {
      // params: { redirectUri },
      withCredentials: true,
    });

    if (response.status === 200) {
      // Check if response.data is a string
      if (typeof response.data === "string") {
        return response.data; // Return the string data from the response
      } else if (typeof response.data?.redirectUrl === "string") {
        window.location.href = response.data.redirectUrl;
        return "redirecting";
      } else {
        console.error(
          "Backend did not return a string or redirectUrl in the response data"
        );
        throw new Error("Invalid response from backend"); // Or return a default string
      }
    } else {
      console.error("Test request returned non-200 status:", response.status);
      throw new Error(`Test request failed with status ${response.status}`);
    }
  } catch (error) {
    console.error("Test failed:", error);
    throw error;
  }
};
export const fetchUserInfo = async (): Promise<{
  name: string;
  email: string;
  picture: string;
}> => {
  const response = await axiosInstance.get("/auth/userinfo");
  return response.data;
};
