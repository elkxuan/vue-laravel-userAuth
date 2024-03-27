<template>
    <div class="container mt-5">
      <div class="row justify-content-center">
        <div class="col-md-6">
          <h1>Register</h1>
          <form @submit.prevent="handleSubmit">
            <div class="mb-3">
              <input type="text" id="firstname" v-model="firstname" class="form-control" placeholder="First Name" required />
            </div>
            <div class="mb-3">
              <input type="text" id="lastname" v-model="lastname" class="form-control" placeholder="Last Name" required />
            </div>
            <div class="mb-3">
              <input type="text" id="country" v-model="country" class="form-control" placeholder="Country" required />
            </div>
            <div class="mb-3">
              <input type="integer" id="mobile" v-model="mobile" class="form-control" placeholder="Phone Number" required />
            </div>
            <div class="mb-3">
              <input type="email" id="email" v-model="email" class="form-control" placeholder="Email" required />
            </div>
            <div class="mb-3">
              <input type="password" id="password" v-model="password1" class="form-control" placeholder="Password" required />
            </div>
            <div class="mb-3">
              <input type="password" id="password" v-model="password2" class="form-control" placeholder="Confirm Password" required />
            </div>
            <button type="submit" class="btn btn-primary">Register</button>
          </form>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'RegisterPage',
    data() {
      return {
        firstname: '',
        lastname: '',
        country: '',
        mobile: '',
        email: '',
        password1: '',
        password2: '',
      };
    },
    methods: {
      handleSubmit() {
        // Simulate registration (replace with your backend API call)
        console.log('Submitting registration form:', this.username, this.email, this.password);
        // Clear form after submission (optional)
        this.username = '';
        this.email = '';
        this.password = '';
      },
    },
  };
  </script>