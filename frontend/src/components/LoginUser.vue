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
            <button type="submit" class="btn btn-primary">Login</button>
          </form>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'LoginUser',
    data() {
      return {
        email: '',
        password: '',
      };
    },
    methods: {
      handleSubmit() {
        // Simulate login (replace with your actual login logic)
        console.log('Submitting login form:', this.email, this.password);
        // Clear form after submission (optional)
        this.email = '';
        this.password = '';
      },
    },
  };
  </script>