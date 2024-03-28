<template>
  <div class="banner" :style="{ backgroundImage: 'url(' + imageSrc + ')' }">
    <div class="content-wrapper">
      <img class="logomark-image" src="../assets/logomark.png" alt="Logomark" height="130">
      <div class="text-content">
        <h1 style="font-size: 57px;">TRADING TANGO</h1>
        <h2 style="font-size: 28px;">VALENTINE'S DAY PROMOTION<br>1 - 29 February 2024</h2>
        <p style="font-size: 14px;">* <a href="#" style="color: #f98c1e;">Terms & conditions</a> apply</p>
      </div>
    </div>
    <h2 style="color: #f98c1e;">Collect All Rewards</h2>
    <div class="box-grid">
      <div class="box"><p>US$200 credits</p></div>
      <div class="box"><p>INR₹2000 gift card</p></div>
      <div class="box"><p>US$400 credits</p></div>
      <div class="box"><p>INR₹20,000 gift card</p></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    imageSrc: {
      type: String,
      required: true
    }
  }
}
</script>

<style>
.banner {
  margin-top: 80px;
  width: 100%;
  height: 600px;
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 20px;
}

.content-wrapper {
  display: flex;
  flex-direction: row;
  align-items: center;
    /* margin-bottom: 100px; */
}

.logomark-image {
  margin-right: 50px;
  margin-bottom: 150px;
}

.text-content {
  text-align: center;
  margin-left: 50px;
  margin-bottom: 100px;
}

h2 {
  font-size: 24px;
}

.box-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px; /* Adjust gap between boxes */
  margin-top: 10px; /* Adjust margin as needed */
}

.box {
  padding: 10px;
  width: 300px; /* Adjust box width as needed */
  height: 50px; /* Adjust box height as needed */
  background-color: rgba(6, 40, 74, 0.5); /* Adjust box background color */ 
  border-radius: 5px; /* Adjust box border radius */
  /* Add other styling as needed */
}

.box p {
  color: #f98c1e;
}
</style>