"use client";

import { useStore } from "@nanostores/react";
import { $sampleStores } from "@/app/stores/sampleStores";
import Link from "next/link";

const Home = () => {
  const admins = useStore($sampleStores);
  return (
    <div className="flex h-screen items-center justify-center">
      <Link href="/about" className="text-2xl">
        <ul className="w-full">
          {admins.map((user) => (
            <li key={user.id}>
              <div className="flex w-full">
                <article>
                  <p>id:{user.id}</p>
                  <p>Name:{user.name}</p>
                  <p>Email: {user.email}</p>
                </article>
              </div>
            </li>
          ))}
        </ul>
      </Link>
    </div>
  );
};

export default Home;
