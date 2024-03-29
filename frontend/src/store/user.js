import { defineStore } from 'pinia';
import axios from 'axios';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    isLoggedIn: localStorage.getItem('isLoggedIn') === 'true' || false,
  }),
  actions: {
    login({ email, password }) {
      axios.post('http://127.0.0.1:8000/api/v1/login', { email, password })
        .then(response => {
          console.log(response.data);
          this.isLoggedIn = true;
          localStorage.setItem('isLoggedIn', 'true');
        })
        .catch(error => {
          console.error(error.response.data);
        });
    },
    logout() {
      this.isLoggedIn = false;
      localStorage.removeItem('isLoggedIn');
    },
  },
});
