<template>
    <nav class="navbar navbar-expand-lg navbar-light fixed-top">
        <div class="navbar-brand">
            <a href="/"><img class="logo-image" src="../assets/logo-white.png" alt="Logo" width="200" height="40"></a>
        </div>
        <div class="collapse navbar-collapse justify-content-end">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <router-link class="nav-link btn-register" to="/register">REGISTER NOW</router-link>
                </li>
                <li class="nav-item">
                    <!-- <router-link class="nav-link" to="/login">Login</router-link> -->
                    <a class="nav-link" href="#" data-bs-toggle="modal" data-bs-target="#loginModal">Login</a>
                </li>
            </ul>
        </div>
    </nav>
</template>

<style>
nav {
    padding: 10px 20px;
    /* Adjust padding as needed */
    height: 80px;
    background-color: #06284a;
}

nav .nav-link {
    color: #fff;
    margin-right: 40px;
}

nav .nav-link:hover {
    color: rgba(255, 255, 255, 0.7);
    /* Adjust opacity for desired dimming */
}

.btn-register {
    color: #fff;
    font-size: 14px;
    font-weight: bold;
    margin: 4px 0 4px 0;
    background-color: #f98c1e;
    border-radius: 50px;
}

.logo-image {
    margin-left: 40px;
}
</style>