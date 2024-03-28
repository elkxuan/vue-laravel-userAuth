<template>
  <div class="container mt-2">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <h1 style="text-align: left;">Register Now</h1>
        <form @submit.prevent="handleSubmit">
          <div class="mt-3 mb-3">
            <input type="text" id="firstname" v-model="firstname" class="form-control" placeholder="First Name"
              required />
          </div>
          <div class="mb-3">
            <input type="text" id="lastname" v-model="lastname" class="form-control" placeholder="Last Name" required />
          </div>
          <div class="mb-3">
            <input type="text" id="country" v-model="country" class="form-control" placeholder="Country" required />
          </div>
          <div class="mb-3">
            <input type="integer" id="mobile" v-model="mobile" class="form-control" placeholder="Phone Number"
              required />
          </div>
          <div class="mb-3">
            <input type="email" id="email" v-model="email" class="form-control" placeholder="Email" required />
          </div>
          <div class="mb-3">
            <input type="password" id="password" v-model="password1" class="form-control" placeholder="Password"
              required />
          </div>
          <div class="mb-3">
            <input type="password" id="password" v-model="password2" class="form-control" placeholder="Confirm Password"
              required />
          </div>
          <div class="mt-4 mb-3 form-check">
            <input type="checkbox" id="ageCheckbox" class="form-check-input" required />
            <label for="ageCheckbox" class="form-check-label">I confirm that I am at least 18 years old.</label>
          </div>
          <div class="mt-4 mb-3 form-check">
            <input type="checkbox" id="termsCheckbox" class="form-check-input" />
            <label for="termsCheckbox" class="form-check-label">By joining and participating in the Competition, I acknowledge and confirm that I have read, understood and agreed to be bound by the <a href="#" style="color: #b9e6f9;">Terms and Conditions</a> of the Competition.</label>
          </div>
          <div class="mb-3">
            <p>This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.</p>
          </div>
          <button type="submit" class="btn btn-primary">Register</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RegisterUser',
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