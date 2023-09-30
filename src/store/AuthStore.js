import { defineStore } from "pinia";
export const useAuthStore = defineStore("auth", {
  state: () => ({
    registeredUsers: [],
    currentUser: null,
  }),
  getters: {
    isLoggedIn: (state) => !!state.currentUser,
  },
  actions: {
    register({ email, password }) {
      // Check for valid email format and matching passwords
      if (!email || !password) {
        throw new Error("Email and password are required fields.");
      }
      const user = this.registeredUsers.find((u) => u.email === email);
      if (user) {
        throw new Error("User with this email already exists.");
      }
      this.registeredUsers.push({ email, password });
      this.currentUser = email
    },
    login({ email, password }) {
      const user = this.registeredUsers.find(
        (u) => u.email === email && u.password === password
      );
      if (!user) {
        throw new Error("Invalid email or password.");
      }
      this.currentUser = email;
    },
    logout() {
      this.currentUser = null;
    },
  },
});
