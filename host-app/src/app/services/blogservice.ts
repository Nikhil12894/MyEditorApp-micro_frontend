import axios from "axios";
import { BlogModel } from "../model/BlogModel";

const API_BASE_URL = "http://localhost:8085/api/blog";

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true, // Include cookies for cross-origin requests
});

export const allBlogs = async (redirectUri: string): Promise<BlogModel[]> => {
  try {
    // Call the logout API securely
    const response = await axiosInstance.get(`${API_BASE_URL}/auth/logout`, {
      params: { redirectUri },
      withCredentials: true, // Include cookies for authentication
    });

    if (response.status === 200) {
      return response.data;
    } else {
      console.error("Test request returned non-200 status:", response.status);
      throw new Error(`Test request failed with status ${response.status}`);
    }
  } catch (error) {
    console.error("Logout failed:", error);
    throw error;
  }
};
