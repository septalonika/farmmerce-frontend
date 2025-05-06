"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import iconFarmmerce from "../../../../public/farmmerce-iconic.svg";
import { useLogin } from "@/hooks/auth/useLogin";
import InputField from "@/components/ui/InputField";
import FormError from "@/components/ui/FormError";
import CustomButton from "@/components/ui/CustomButton";
import { login as goLogin, authStore, set } from "@/app/stores/token";
import { useStore } from "@nanostores/react";

const getFormErrors = (
  touched: { email: boolean; password: boolean },
  form: { email: string; password: string },
) => {
  return {
    email: touched.email && !form.email ? "Please enter your email." : "",
    password:
      touched.password && !form.password ? "Please enter your password." : "",
  };
};

const LoginPage = () => {
  const { form, setFormLogin, loading, login, setRememberMe, rememberMe } =
    useLogin();
  const [touched, setTouched] = useState({ email: false, password: false });
  const [formError, setFormError] = useState<string>("");
  const store = useStore(authStore);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setTouched({ email: true, password: true });

    const { email, password } = form;
    if (!email || !password) {
      return;
    }
    try {
      await login(true);
    } catch (err: unknown) {
      setFormError(
        err instanceof Error ? err.message : "An unexpected error occurred.",
      );
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    goLogin();
  };

  const fieldError = getFormErrors(touched, form);

  return (
    <section className="flex h-screen w-full items-center justify-center bg-gray-900">
      {/* Form Container */}
      <div className="w-full max-w-md rounded-lg bg-gray-800 p-8 shadow-lg backdrop-blur-md">
        {/* Heading */}
        <div className="flex flex-col items-center gap-2 text-center">
          <Image src={iconFarmmerce} width={60} height={60} alt="logo" />
          <div>
            <h1 className="animate-fade-in bg-gradient-to-r from-indigo-400 to-green-400 bg-clip-text text-4xl font-bold text-transparent">
              Welcome Back!
            </h1>
            <p className="mt-2 text-sm text-gray-400">
              Please sign in to your account.
            </p>
          </div>
        </div>

        {/* Form */}
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          {/* <InputField
            id="email"
            type="email"
            value={form.email}
            onChange={(e) => setFormLogin({ email: e.target.value })}
            onBlur={() => setTouched((prev) => ({ ...prev, email: true }))}
            placeholder="Enter your email"
            label="Email"
            error={fieldError.email}
          />

          <InputField
            id="password"
            type="password"
            value={form.password}
            onChange={(e) => setFormLogin({ password: e.target.value })}
            onBlur={() => setTouched((prev) => ({ ...prev, password: true }))}
            label="Password"
            placeholder="••••••••"
            error={fieldError.password}
          /> */}
          <InputField
            id="email"
            type="email"
            value={authStore.get().id}
            onChange={(e) => set({ id: e.target.value })}
            placeholder="Enter your email"
            label="Email"
            error={fieldError.email}
          />

          <InputField
            id="password"
            type="password"
            value={authStore.get().password}
            onChange={(e) => set({ password: e.target.value })}
            label="Password"
            placeholder="••••••••"
            error={fieldError.password}
          />

          {formError && <FormError message={formError} />}

          {/* Remember Me and Forgot Password */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <input
                id="remember"
                type="checkbox"
                className="h-4 w-4 rounded border-gray-600 text-green-500"
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
              />
              <label htmlFor="remember" className="text-sm text-gray-400">
                Remember me
              </label>
            </div>
            <Link
              href="/forgot-password"
              className="text-sm text-green-500 hover:underline"
            >
              Forgot password?
            </Link>
          </div>

          {/* Sign In Button */}

          <CustomButton
            type="submit"
            label="Sign In"
            loading={loading}
            variant="primary"
            size="medium"
            className="mt-4 w-full cursor-pointer hover:scale-105"
          />

          <button onClick={handleLogin}>Login</button>

          <p className="text-center text-sm text-gray-400">
            Don’t have an account?{" "}
            <Link
              href="/register"
              className="font-semibold text-green-400 hover:underline"
            >
              Sign up
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
};

export default LoginPage;
