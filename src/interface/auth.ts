export interface User {
  id: string;
  email: string;
  name: string;
  role?: "admin" | "user"; // Atau sesuaikan dengan role yang kamu gunakan
  avatarUrl?: string; // Optional field, jika ada foto profil
  createdAt?: string;
  updatedAt?: string;
}

export interface RegisterProps {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
  acceptTerms: boolean;
}
