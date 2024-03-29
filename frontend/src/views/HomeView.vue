<template>
  <HeroBanner :imageSrc="require('../assets/header.png')" />
  <PromoBanner />
  <ReferralBanner :imageSrc="require('../assets/easy_step_bg.png')" />
  <RegisterBanner />
</template>

<script>
import HeroBanner from '../components/HeroBanner.vue';
import PromoBanner from '../components/PromoBanner.vue';
import ReferralBanner from '../components/ReferralBanner.vue';
import RegisterBanner from '../components/RegisterBanner.vue';

export default {
  components: {
    HeroBanner,
    PromoBanner,
    ReferralBanner,
    RegisterBanner,
  }
}
</script>