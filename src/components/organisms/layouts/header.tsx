"use client";
import { Plus_Jakarta_Sans } from "next/font/google";
import Link from "next/link";

const jakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
});

const Header = () => {
  return (
    <header className="flex h-[6dvh] w-full border-b-2">
      <div className="mx-[8dvw] flex w-full items-center justify-between">
        <div className="flex"></div>
        <div className="flex"></div>
      </div>
    </header>
  );
};

export default Header;
