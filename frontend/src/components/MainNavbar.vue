<template>
    <nav class="navbar navbar-expand-lg navbar-light fixed-top">
        <div class="navbar-brand">
            <a href="/"><img class="logo-image" src="../assets/logo-white.png" alt="Logo" width="200" height="40"></a>
        </div>
        <div class="collapse navbar-collapse justify-content-end">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <router-link v-if="!isLoggedIn" class="nav-link btn-register" to="/register">REGISTER
                        NOW</router-link>
                </li>
                <li class="nav-item">
                    <router-link v-if="!isLoggedIn" class="nav-link" to="/login">Login</router-link>
                    <button v-if="isLoggedIn" @click="handleLogout" class="nav-link btn btn-secondary">Logout</button>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
import { computed } from 'vue';
import { useAuthStore } from '../store/user';

export default {
    name: 'MainNavbar',
    setup() {
        const isLoggedIn = computed(() => useAuthStore().isLoggedIn);

        const handleLogout = async () => {
            try {
                await useAuthStore().logout();
            } catch (error) {
                console.error('Logout failed:', error.message);
            }
        };

        return { isLoggedIn, handleLogout };
    },
};
</script>

<style>
nav {
    padding: 10px 20px;
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
    transition: transform 0.3s ease;
}

.btn-register:hover {
    transform: scale(1.1);
}

.logo-image {
    margin-left: 40px;
}
</style>