<template>
    <div class="modal fade" id="loginModal" tabindex="-1" role="dialog" aria-labelledby="loginModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="loginModalLabel">Login</h5>
            <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <LoginUser />
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import LoginUser from './LoginUser.vue';
  
  export default {
    components: {
      LoginUser,
    },
  };
  </script>  