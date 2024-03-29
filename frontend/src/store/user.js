import { defineStore } from 'pinia';
import axios from 'axios';
import Swal from 'sweetalert2';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    isLoggedIn: localStorage.getItem('isLoggedIn') === 'true' || false,
  }),
  actions: {
    register(formData) {
      axios.post('http://127.0.0.1:8000/api/v1/register', formData)
      .then(response => {
        console.log(response.data);
        const fullName = `${formData.firstname} ${formData.lastname}`;
        Swal.fire({
          icon: 'success',
          title: 'Register Successful',
          text: `Hi ${fullName}!\n Welcome to Blackwell, please verify your email immediately.`,
          confirmButtonColor: '#f98c1e'
        });
      })
      .catch(error => {
        console.error(error.response.data);
        Swal.fire({
          icon: 'error',
          title: 'Register Failed',
          text: 'An error occurred during registration. Please try again!',
          confirmButtonColor: '#f98c1e'
        });
      });
    },
    login({ email, password }) {
      axios.post('http://127.0.0.1:8000/api/v1/login', { email, password })
        .then(response => {
          console.log(response.data);
          this.isLoggedIn = true;
          localStorage.setItem('isLoggedIn', 'true');
          Swal.fire({
            icon: 'success',
            title: 'Login Successful',
            text: 'Welcome!',
            confirmButtonColor: '#f98c1e'
          });
        })
        .catch(error => {
          console.error(error.response.data);
          Swal.fire({
            icon: 'error',
            title: 'Login Failed',
            text: 'Invalid email or password. Please try again!',
            confirmButtonColor: '#f98c1e'
          });
        });
    },
    logout() {
      this.isLoggedIn = false;
      localStorage.removeItem('isLoggedIn');
      Swal.fire({
        icon: 'success',
        title: 'Logout Successful',
        text: 'Thank you for using our service. See you soon!',
        confirmButtonColor: '#f98c1e'
      });
    },
  },
});
