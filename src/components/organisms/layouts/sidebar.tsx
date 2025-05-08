"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import React from "react";
import { LogOut, User } from "lucide-react";
import { FiBox, FiHome, FiUsers } from "react-icons/fi";
import { AiOutlineShop } from "react-icons/ai"; // React Icon untuk Toko
import { RiShoppingCartLine } from "react-icons/ri"; // React Icon untuk Pesana
import iconFarmmerce from "../../../../public/farmmerce-iconic.svg";

interface SidebarProps {
  isSidebarOpen: boolean;
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Sidebar = ({ isSidebarOpen, setSidebarOpen }: SidebarProps) => {
  const pathname = usePathname();
  const user = { name: "John Doe", role: "seller" }; // Ganti dengan data pengguna yang sesuai

  if (!user) return null; // Pastikan ada user sebelum menampilkan sidebar

  const menuItems = [
    { href: "/", label: "Beranda", icon: <FiHome size={20} /> },
    {
      href: "/checkout",
      label: "Transaksi Saya",
      icon: <RiShoppingCartLine size={20} />,
    },
    {
      href: "/products",
      label: "Produk",
      icon: <FiBox size={20} />,
    },
    {
      href: "/inventory",
      label: "Stok Barang",
      icon: <FiBox size={20} />, // Bisa diganti dengan ikon yang lebih sesuai
    },
    ...(user.role === "seller"
      ? [
          {
            href: "/merchant",
            label: "Toko Saya",
            icon: <AiOutlineShop size={20} />,
          },
        ]
      : []),
    ...(user?.role === "admin"
      ? [
          {
            href: "/user-management",
            label: "Manajemen Pengguna",
            icon: <FiUsers size={20} />,
          },
        ]
      : []),
  ];

  return (
    <nav
      className={clsx(
        "fixed top-0 z-50 h-[100vh] max-w-[350px] rounded-r-3xl border-[1px] border-[#30363D] bg-[#161B22] text-[#E8EEF4] transition-transform duration-300 ease-in-out md:w-[250px]",
        isSidebarOpen ? "translate-x-0" : "-translate-x-full",
      )}
    >
      <button
        className="absolute right-4 rounded-xl text-[40px] font-bold text-gray-600 transition-all duration-300 ease-in-out hover:text-white"
        onClick={() => setSidebarOpen(false)} // Klik tombol silang untuk menutup sidebar
      >
        &times;
      </button>
      <div className="flex h-full flex-col items-start justify-between">
        <ul className="mt-4 flex w-full flex-col gap-5 text-[18px] font-semibold">
          <li className="ml-6 flex justify-start">
            <Image
              src={iconFarmmerce}
              alt="logo"
              width="45"
              height="45"
              className="mb-4"
            />
          </li>

          {menuItems.map(({ href, label, icon }) => (
            <li key={href}>
              <Link
                href={href}
                className={clsx(
                  "flex gap-3 rounded-r-3xl px-6 py-3 text-sm transition-all duration-300 ease-in-out",
                  pathname === href
                    ? "bg-[linear-gradient(180deg,_#2ecac8,_#388886)]"
                    : "hover:bg-[#93C0CA]",
                )}
              >
                <span className="text-xl">{icon}</span> {label}
              </Link>
            </li>
          ))}
        </ul>
        <ul className="mt-auto">
          <li className="flex items-center gap-3 px-6 py-3 text-sm">
            <User size={20} />
            <p className="text-sm font-semibold">{user.name}</p>{" "}
          </li>
          <li
            onClick={() => alert("Logout dulu bro 😎")}
            className="flex cursor-pointer items-center gap-3 px-6 py-3 text-sm transition-all duration-300 hover:bg-[#93C0CA]"
          >
            <LogOut size={20} /> {/* Ikon Logout */}
            <p>Logout</p>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Sidebar;
