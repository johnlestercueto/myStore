// store/authStore.js
import { create } from 'zustand';
import { loginUser, signupUser } from '../services/authService';

export const useAuthStore = create((set) => ({
  // ⬇️ Kukunin ang user at token mula sa localStorage kapag nag-refresh
  user: JSON.parse(localStorage.getItem("user")) || null,
  token: localStorage.getItem("token") || null,
  
  loading: false,
  error: null,

  // ⬇️ Login function
  login: async (formData) => {
    try {
      set({ loading: true, error: null });

      // Tumatawag sa API para mag-login
      const res = await loginUser(formData);

      // I-set sa Zustand state
      set({ user: res.user, token: res.token, role: res.user.role });

      // ⬇️ I-save sa localStorage para hindi mawawala kapag nag-refresh
      localStorage.setItem("user", JSON.stringify(res.user));
      localStorage.setItem("token", res.token);

      return res;
    } catch (err) {
      set({ error: err.response?.data?.message || 'Login failed' });
    } finally {
      set({ loading: false });
    }
  },

  // ⬇️ Signup function
  signup: async (formData) => {
    try {
      set({ loading: true, error: null });
      const res = await signupUser(formData);
      set({ user: res.user });

      
      return res;
    } catch (err) {
      set({ error: err.response?.data?.message || 'Signup failed' });
    } finally {
      set({ loading: false });
    }
  },

  // ⬇️ Logout function
  logout: () => {
    set({ user: null, token: null });

    // Burahin din sa localStorage
    localStorage.removeItem("user");
    localStorage.removeItem("token");
  }
}));
