<template>
  <div class="register-container">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-8">
            <h1 style="text-align: left;">Register</h1>
          <form @submit.prevent="handleSubmit">
            <div class="mt-4 mb-3">
              <input type="text" id="firstname" v-model="formData.firstname" class="form-control"
                placeholder="First Name" required />
            </div>
            <div class="mb-3">
              <input type="text" id="lastname" v-model="formData.lastname" class="form-control" placeholder="Last Name"
                required />
            </div>
            <div class="mb-3">
              <input type="text" id="country" v-model="formData.country" class="form-control" placeholder="Country"
                required />
            </div>
            <div class="mb-3">
              <input type="integer" id="mobile" v-model="formData.mobile" class="form-control"
                placeholder="Phone Number" required />
            </div>
            <div class="mb-3">
              <input type="email" id="email" v-model="formData.email" class="form-control" placeholder="Email"
                required />
            </div>
            <div class="mb-3">
              <input type="password" id="password" v-model="formData.password" class="form-control"
                placeholder="Password" required />
            </div>
            <div class="mb-3">
              <input type="password" id="password" v-model="formData.confirm_password" class="form-control"
                placeholder="Confirm Password" required />
            </div>
            <div class="mt-4 mb-3 form-check">
              <input type="checkbox" id="ageCheckbox" class="form-check-input" required />
              <label for="ageCheckbox" class="form-check-label">I confirm that I am at least 18 years old.</label>
            </div>
            <div class="mb-4 form-check">
              <input type="checkbox" id="termsCheckbox" class="form-check-input" required />
              <label for="termsCheckbox" class="form-check-label">By joining and participating in the Competition, I
                acknowledge and confirm that I have read, understood and agreed to be bound by the <a href="#"
                  style="color: #b9e6f9;">Terms and Conditions</a> of the Competition.</label>
            </div>
            <div class="mb-4">
              <p style="text-align: left;">This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.</p>
            </div>
            <button type="submit" class="btn btn-secondary">Register</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useAuthStore } from '../store/user';

export default {
  name: 'RegisterForm',
  setup() {
    const formData = ref({
      firstname: '',
      lastname: '',
      country: '',
      mobile: '',
      email: '',
      password: '',
      confirm_password: '',
    });

    const handleSubmit = async () => {
      try {
        console.log(formData.value);
        await useAuthStore().register(formData.value);
        Object.keys(formData.value).forEach(key => {
          formData.value[key] = '';
        });
      } catch (error) {
        console.error('Register failed:', error.message);
      }
    };

    return { formData, handleSubmit };
  },
};
</script>

<style>
.register-container {
  height: 150vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
}

.title {
  text-align: left;
}
</style>