<script>
import { useAuthStore } from '../store/AuthStore';
import { useRouter } from 'vue-router'
export default {
  setup() {
    const authStore = useAuthStore();
    const router = useRouter();
    const logoutUser = () => {
      authStore.logout();
      router.push({name:'login'})
    };

    return { authStore, logoutUser };
  },
};
</script>

<template>
  <div>
    <h2 class=" text-3xl">Welcome, {{ authStore.currentUser }}</h2>
    <button class="bg-red-400 p-4 mt-5 text-white text-xl hover:bg-red-600" @click="logoutUser">Log Out</button>
  </div>
</template>
