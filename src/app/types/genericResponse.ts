import { ResponseError } from "@/app/types/responseError";
import { Metadata } from "@/app/types/auth";

export interface GenericResponse<T, M = Metadata> {
  success: boolean;
  data: T;
  metadata: M;
  error?: ResponseError;
}
