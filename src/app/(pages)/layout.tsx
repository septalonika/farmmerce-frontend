"use client";
import FooterPage from "@/components/organisms/layouts/footer";
import Header from "@/components/organisms/layouts/header";
import { useEffect, useState } from "react";
import { setUser } from "../stores/auth";
import { useRouter } from "next/navigation";

export default function PageLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const rememberMe = localStorage.getItem("rememberMe") === "true";
    const savedUser = rememberMe
      ? localStorage.getItem("user")
      : sessionStorage.getItem("user");

    if (!savedUser) {
      router.replace("/login");
      document.cookie = "auth_token=; max-age=0; path=/";
      setLoading(false); // Set loading false hanya jika tidak ada user
      return;
    }

    try {
      const user = JSON.parse(savedUser);
      setUser(user);
    } catch (error) {
      console.error("Error parsing user data from storage", error);
    }

    setLoading(false);
  }, [router]);

  if (loading) {
    return null;
  }

  return (
    <section>
      <Header />
      <div>{children}</div>
      <FooterPage />
    </section>
  );
}
