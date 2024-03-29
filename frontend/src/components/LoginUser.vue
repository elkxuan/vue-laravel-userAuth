<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <h1>Login</h1>
        <form @submit.prevent="handleSubmit">
          <div class="mb-3">
            <input type="email" id="email" v-model="email" class="form-control" placeholder="Email" required />
          </div>
          <div class="mb-3">
            <input type="password" id="password" v-model="password" class="form-control" placeholder="Password" required />
          </div>
          <button v-if="!isLoggedIn" type="submit" class="btn btn-primary">Login</button>
          <button v-if="isLoggedIn" @click="handleLogout" class="btn btn-danger">Logout</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed } from 'vue';
import { useAuthStore } from '../store/user';

export default {
  name: 'LoginUser',
  setup() {
    const email = ref('');
    const password = ref('');

    const isLoggedIn = computed(() => useAuthStore().isLoggedIn);

    const handleSubmit = async () => {
      try {
        await useAuthStore().login({ email: email.value, password: password.value });
        // Optionally, you can perform additional actions after successful login
      } catch (error) {
        console.error('Login failed:', error.message);
        // Optionally, you can handle login failure here
      }
    };

    const handleLogout = () => {
      useAuthStore().logout();
    };

    return { email, password, isLoggedIn, handleSubmit, handleLogout };
  },
};
</script>
