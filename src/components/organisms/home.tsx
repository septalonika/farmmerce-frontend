"use client";

import { useStore } from "@nanostores/react";
import { $sampleStores } from "@/app/stores/sampleStores";
import Link from "next/link";

const Home = () => {
  const admins = useStore($sampleStores);
  return (
    <div className="flex h-screen items-center justify-center">
      <Link href="/about" className="text-2xl w-20 h-20">
        <ul className="w-full">
          {admins.map((user) => (
            <li key={user.id}>
              <div className="flex w-full">
                {user.id}: {user.name}: {user.email}
              </div>
            </li>
          ))}
        </ul>
      </Link>
    </div>
  );
};

export default Home;
