"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import iconFarmmerce from "../../../../public/farmmerce-iconic.svg";
import TermsModal from "@/components/popups/TermModal";
import InputField from "@/components/ui/InputField";
import { useRegister } from "@/hooks/auth/useRegister";
import CustomButton from "@/components/ui/CustomButton";
import FormError from "@/components/ui/FormError";

const getFormErrors = (
  touched: {
    email: boolean;
    password: boolean;
    confirmPassword: boolean;
    fullName: boolean;
  },
  form: {
    email: string;
    password: string;
    confirmPassword: string;
    fullName: string;
  },
) => {
  return {
    email: touched.email && !form.email ? "Please enter your email." : "",
    password:
      touched.password && !form.password ? "Please enter your password." : "",
    confirmPassword:
      touched.confirmPassword && form.password !== form.confirmPassword
        ? "Passwords do not match."
        : "",
    fullName:
      touched.fullName && !form.fullName ? "Please enter your full name." : "",
  };
};

const RegisterPage = () => {
  const {
    form,
    setFormRegister,
    loading,
    error,
    acceptTerms,
    setAcceptTerms,
    setUser,
    register,
  } = useRegister();

  const [touched, setTouched] = useState({
    email: false,
    password: false,
    confirmPassword: false,
    fullName: false,
  });
  const [formError, setFormError] = useState<string>("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setTouched({
      email: true,
      password: true,
      confirmPassword: true,
      fullName: true,
    });

    const { email, password, confirmPassword, fullName } = form;
    if (!email || !password || !confirmPassword || !fullName) {
      return;
    }

    try {
      await register();
    } catch (err: unknown) {
      setFormError(
        err instanceof Error ? err.message : "An unexpected error occurred.",
      );
    }
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
              Create Account
            </h1>
            <p className="mt-2 text-sm text-gray-400">
              Please fill in the form to create your account.
            </p>
          </div>
        </div>

        {/* Form */}
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <InputField
            id="name"
            type="text"
            value={form.fullName}
            onChange={(e) => setFormRegister({ fullName: e.target.value })}
            onBlur={() => setTouched((prev) => ({ ...prev, fullName: true }))}
            label="Full Name"
            placeholder="Enter your full name"
            error={fieldError.fullName}
          />

          <InputField
            id="email"
            type="email"
            value={form.email}
            onChange={(e) => setFormRegister({ email: e.target.value })}
            onBlur={() => setTouched((prev) => ({ ...prev, email: true }))}
            label="Email Address"
            placeholder="Enter your email"
            error={fieldError.email}
          />

          <InputField
            id="password"
            type="password"
            value={form.password}
            onChange={(e) => setFormRegister({ password: e.target.value })}
            onBlur={() => setTouched((prev) => ({ ...prev, password: true }))}
            label="Password"
            placeholder="Create a password"
            error={fieldError.password}
          />

          <InputField
            id="confirmPassword"
            type="password"
            value={form.confirmPassword}
            onChange={(e) =>
              setFormRegister({ confirmPassword: e.target.value })
            }
            onBlur={() =>
              setTouched((prev) => ({ ...prev, confirmPassword: true }))
            }
            label="Confirm Password"
            placeholder="Confirm your password"
            error={fieldError.confirmPassword}
          />

          {/* Checkbox for Accepting Terms */}
          <div className="flex items-center space-x-2">
            <input
              id="acceptTerms"
              type="checkbox"
              checked={acceptTerms}
              onChange={() => setAcceptTerms(!acceptTerms)}
              className="h-4 w-4 rounded border-gray-600 text-green-500"
            />
            <label htmlFor="acceptTerms" className="text-sm text-gray-400">
              I agree to the{" "}
              <button
                onClick={openModal}
                className="text-green-500 hover:underline"
              >
                Terms and Conditions
              </button>
            </label>
          </div>

          {/* Error message if terms are not accepted */}
          {formError && <FormError message={formError} />}

          <CustomButton
            type="submit"
            label="Sign Up"
            loading={loading}
            variant="primary"
            size="medium"
            className="w-full cursor-pointer hover:scale-105"
          />

          {/* Already have an account */}
          <p className="text-center text-sm text-gray-400">
            Already have an account?{" "}
            <Link
              href="/login"
              className="font-semibold text-green-400 hover:underline"
            >
              Sign in
            </Link>
          </p>
        </form>
      </div>

      <TermsModal isModalOpen={isModalOpen} closeModal={closeModal} />
    </section>
  );
};

export default RegisterPage;
