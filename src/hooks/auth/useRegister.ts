import { fetchData } from "@/app/services/api";
import { setUser } from "@/app/stores/auth";
import { RegisterProps, User } from "@/interface/auth";
import { useRouter } from "next/navigation";
import { useState } from "react";

// Fungsi untuk menyimpan data token ke cookies
const setTokenInCookies = (token: string) => {
  const expires = new Date();
  expires.setDate(expires.getDate() + 1); // Token berlaku 1 hari
  document.cookie = `auth_token=${token}; path=/; expires=${expires.toUTCString()}`;
};

// Fungsi untuk menyimpan user dan status rememberMe
const saveUserData = (user: User) => {
  const userData = JSON.stringify(user);
  sessionStorage.setItem("user", userData);
};

export const useRegister = () => {
  const router = useRouter();
  const [form, setForm] = useState<RegisterProps>({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    acceptTerms: false,
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [acceptTerms, setAcceptTerms] = useState(false);

  const setFormRegister = (newForm: Partial<RegisterProps>) => {
    setForm((prevForm) => ({ ...prevForm, ...newForm }));
  };

  const register = async () => {
    setLoading(true);
    setError(null);

    try {
      // Validasi confirm password
      if (form.password !== form.confirmPassword) {
        throw new Error("Password and Confirm Password do not match.");
      }

      if (!form.acceptTerms) {
        throw new Error("You must accept the terms and conditions.");
      }

      // Call real API
      const response = await fetchData({
        endpoint: "/auth/register",
        method: "POST",
        data: {
          name: form.fullName,
          email: form.email,
          password: form.password,
        },
      });

      const registeredUser: User = response.user;
      const token = response.token;

      setTokenInCookies(token);
      saveUserData(registeredUser); // Register biasanya langsung pakai sessionStorage
      setUser(registeredUser);

      router.push("/");
    } catch (err: any) {
      setError(err.message || "Something went wrong during registration.");
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return {
    form,
    setFormRegister,
    loading,
    error,
    acceptTerms,
    setAcceptTerms,
    setUser,
    register,
  };
};
