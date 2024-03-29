<template>
  <div class="login-container">
    <div class="container mt-5">
      <div class="row justify-content-center">
        <div class="col-md-6">
          <h1 style="text-align: left;">Login</h1>
          <form @submit.prevent="handleSubmit">
            <div class="mt-4 mb-3">
              <input type="email" id="email" v-model="email" class="form-control" placeholder="Email" required />
            </div>
            <div class="mb-3">
              <input type="password" id="password" v-model="password" class="form-control" placeholder="Password"
                required />
            </div>
            <button v-if="!isLoggedIn" type="submit" class="btn btn-secondary">Login</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed } from 'vue';
import { useAuthStore } from '../store/user';
import { useRouter } from 'vue-router';

export default {
  name: 'LoginForm',
  setup() {
    const email = ref('');
    const password = ref('');
    const router = useRouter();

    const isLoggedIn = computed(() => useAuthStore().isLoggedIn);

    const handleSubmit = async () => {
      try {
        await useAuthStore().login({ email: email.value, password: password.value });
        email.value = '';
        password.value = '';
        setTimeout(() => {
          router.push('/');
        }, 1000);
      } catch (error) {
        console.error('Login failed:', error.message);
      }
    };

    return { email, password, isLoggedIn, handleSubmit };
  },
};
</script>

<style>
.login-container {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.title {
  text-align: left;
}
</style>