<template>
  <LoginModal/>
  <HeroBanner :imageSrc="require('../assets/header.png')" />
  <PromoBanner />
  <ReferralBanner :imageSrc="require('../assets/easy_step_bg.png')" />
  <RegisterUser />
</template>

<script>
import LoginModal from '../components/LoginModal.vue';
import HeroBanner from '../components/HeroBanner.vue';
import PromoBanner from '../components/PromoBanner.vue';
import ReferralBanner from '../components/ReferralBanner.vue';
import RegisterUser from '../components/RegisterUser.vue';

export default {
  components: {
    LoginModal,
    HeroBanner,
    PromoBanner,
    ReferralBanner,
    RegisterUser,
  }
}
</script>