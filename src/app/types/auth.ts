export interface Token {
  token?: string;
  refreshToken?: string;
  data?: any;
}

export interface Auth {
  id: string;
  password: string;
  loading: boolean;
}

export interface Metadata {
  request_id: string;
}
export interface LoginResponse {
  success: true;
  data: {
    access_token: string;
    refresh_token: string;
    token_type: "bearer";
  };
}
