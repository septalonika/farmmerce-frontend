// stores/user.ts
import { User } from "@/interface/auth";
import { atom } from "nanostores";

export const userStore = atom<{ user: User | null }>({ user: null });

export const setUser = (user: User | null) => {
  userStore.set({ user });
};

export const getUser = () => userStore.get().user;
