// store/authStore.js
import { create } from 'zustand';
import { loginUser, signupUser } from '../services/authService';

export const useAuthStore = create((set) => ({
  user: null,
  token: null,
  loading: false,
  error: null,

  login: async (formData) => {
    console.log('req :', formData);
    try {
      set({ loading: true, error: null });
      const res = await loginUser(formData);
      console.log('res :', res)
      set({ user: res.user, token: res.token });
      return res
    } catch (err) {
        console.log('auth store - sign up error :', err)
      set({ error: err.response?.data?.message || 'Login failed' });
    } finally {
      set({ loading: false });
    }
  },

  signup: async (formData) => {
    console.log('req :', formData);
    try {
      set({ loading: true, error: null });
      const res = await signupUser(formData);
      console.log('res :', res)
      set({ user: res.user });
      return res; 
    } catch (err) {
      console.log('services - sign up error :', err)
      set({ error: err.response?.data?.message || 'Signup failed' });
    } finally {
      set({ loading: false });
    }
  },

  logout: () => set({ user: null, token: null }),
}));
