<template>
    <div class="banner" :style="{ backgroundImage: 'url(' + imageSrc + ')' }">
        <div class="steps-container">
            <div class="title">
                <h5 style="color: white">3 Easy Steps to Refer</h5>
            </div>
            <div class="step-images">
                <div class="step-container">
                    <img class="step-image" src="../assets/Step01.png" alt="Step01" width="250px" height="200px">
                    <p class="step01-text">Create an account with Blackwell Global & log in to the Client Portal.</p>
                </div>
                <div class="step-container">
                    <img class="step-image" src="../assets/Step02.png" alt="Step02" width="250px" height="200px">
                    <p class="step02-text">Under the "Promotion" tab, copy your unique referral link & send it to your referee to scan your unique QR code to create an account with us.</p>
                </div>
                <div class="step-container">
                    <img class="step-image" src="../assets/Step03.png" alt="Step03" width="250px" height="200px">
                    <p class="step03-text">Monitor your referees in the Referral Activity section to track whether you've fulfilled the requirements for various rewards!</p>
                </div>
            </div>
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
    height: 500px;
    background-size: cover;
    background-position: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 20px;
}

.steps-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-bottom: 100px;
}

.title {
    margin-left: 20px;
    margin-bottom: 50px;
    /* Add margin to separate title from images */
}

.step-container {
    position: relative;
    display: inline-block;
    margin: 0 20px; /* Adjust margin as needed */
}

.step01-text {
    position: absolute;
    top: 55%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: left;
    width: 80%; /* Adjust width as needed */
    color: white; /* Adjust text color */
    font-size: 16px; /* Adjust font size as needed */
}

.step02-text {
    position: absolute;
    top: 65%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: left;
    width: 80%; /* Adjust width as needed */
    color: white; /* Adjust text color */
    font-size: 16px; /* Adjust font size as needed */
}

.step03-text {
    position: absolute;
    top: 65%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: left;
    width: 80%; /* Adjust width as needed */
    color: white; /* Adjust text color */
    font-size: 16px; /* Adjust font size as needed */
}

.step-images {
    display: flex;
}

.step-image {
    margin: 0 10px;
    /* Adjust margin as needed */
}
</style>
