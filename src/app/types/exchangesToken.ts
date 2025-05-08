export interface ExhcangeResponse {
  token: ExchangeToken;
}

export interface ExchangeToken {
  access_token: string;
  token_type: string;
  refresh_token: string;
}
