import { create } from "zustand";
import { User } from "./types";
import { devtools } from "zustand/middleware";

interface AuthState {
  user: null | User;
  setUser: (user: User) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  devtools((set) => ({
    user: null,
    setUser: (user: User) => set({ user: user }),
    logout: () => set({ user: null }),
  }))
);
