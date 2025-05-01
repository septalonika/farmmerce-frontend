import axios, { AxiosRequestConfig } from "axios";

type FetchDataParams<T> = {
  endpoint: string;
  token?: string;
  data?: T;
  method: "GET" | "POST" | "PUT" | "DELETE";
  //   overrideMethod?: "PUT";
};

export const fetchData = async <T>({
  endpoint,
  token,
  data,
  method,
  //   overrideMethod,
}: FetchDataParams<T>) => {
  try {
    const config: AxiosRequestConfig = {
      headers: {
        Authorization: `Bearer ${token}`,
        // "Content-Type": "application/json",
        // ...(overrideMethod && { "X-HTTP-Method-Override": overrideMethod }),
      },
    };

    const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
    const url = `${baseUrl}${endpoint}`;

    let response;

    switch (method) {
      case "GET":
        response = await axios.get(url, config);
        break;
      case "POST":
        response = await axios.post(url, data, config);
        break;
      case "PUT":
        response = await axios.put(url, data, config);
        break;
      case "DELETE":
        response = await axios.delete(url, config);
        break;
      default:
        throw new Error(`Metode HTTP ${method} tidak didukung.`);
    }

    return response?.data;
  } catch (error) {
    console.error(`Error ${method} ${endpoint}:`, error);
    const errorMessage =
      axios.isAxiosError(error) && error.response
        ? `Error ${error.response.status}: ${
            error.response.data.message || "Unknown error"
          }`
        : (error as Error).message || "Unknown error";
    throw new Error(`Failed to ${method} data at ${endpoint}. ${errorMessage}`);
  }
};
