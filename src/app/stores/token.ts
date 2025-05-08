import { atom } from "nanostores";
import { authFetch } from "@/app/composables/CustomFetch";

type Token = {
  token?: string;
  refreshToken?: string;
  data?: any;
};

type Auth = {
  id: string;
  password: string;
  loading: boolean;
};

interface Metadata {
  request_id: string;
}

export interface GenericResponse<T, M = Metadata> {
  success: boolean;
  data: T;
  metadata: M;
  error?: ResponseError;
}

interface ResponseError {
  code?: any;
  message_title: string;
  message: string;
  message_severity: string;
  action?: any;
}

export interface LoginResponse {
  success: true;
  data: {
    access_token: string;
    token_type: "bearer";
  };
}

export interface ExchangeToken {
  access_token: string;
  token_type: string;
  refresh_token?: string;
  expiry?: string;
}

export interface Login {
  email: string;
  password: string;
}

export const authStore = atom<Auth>({
  id: "",
  password: "",
  loading: false,
});

export const tokenStore = atom<Token>({
  token: "",
  refreshToken: "",
  data: {},
});

export const set = (val: any) => {
  authStore.set({ ...authStore.get(), ...val });
};

export const setToken = (data: ExchangeToken) => {
  if (!data.access_token) {
    return;
  }

  if (data.access_token == tokenStore.get().token) {
    return;
  }

  const dataToken = tokenStore.get().data;
  console.log("setToken", data);
  const token = {
    accessToken: data.access_token,
    refreshToken: data?.refresh_token,
    data: dataToken,
  };
  localStorage.setItem("token", JSON.stringify(token));
  tokenStore.set(token);
  window.parent.postMessage(
    {
      func: "setToken",
      token: data.access_token,
      refreshToken: data?.refresh_token,
    },
    "*",
  );
};

export const login = async () => {
  set({ loading: true });
  try {
    const response = await authFetch<GenericResponse<LoginResponse>>({
      baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
      url: "/api/v1/auth/login",
      method: "post",
      data: {
        email: authStore.get().id,
        password: authStore.get().password,
      } as Login,
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = response.data;
    console.log("cugud data", data);

    if (data?.data.access_token) {
      tokenStore.set({ data: response });
      setToken(data.data);
    } else throw "";

    set({ loading: false });
  } catch (error: any) {
    let msg = "Login failed";
    if (error?.response)
      msg = error?.response?.data?.error?.message_title || "Login failed";

    set({ error: msg, loading: false });
    console.error(error);
  }
};
