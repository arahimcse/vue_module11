<script>
import { ref } from 'vue';
import { useAuthStore } from '../store/AuthStore';
import { useRouter } from 'vue-router'
export default {
  setup() {
    const email = ref('');
    const password = ref('');
    const confirmPassword = ref('');
    const authStore = useAuthStore();
    const router = useRouter();
    const registerUser = () => {
      try {
        if (password.value !== confirmPassword.value) {
          throw new Error("Passwords don't match.");
        }
        authStore.register({ email: email.value, password: password.value });
        router.push({ name: "dashboard" })
      } catch (error) {
        alert(error)
      }
    };
    return { authStore, email, password, confirmPassword, registerUser };
  },
};
</script>

<template>
  <p class="mt-10">
  <section class="">
    <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto  lg:py-0">
      <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 ">
        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Register
          </h1>

          <div class="space-y-4 md:space-y-6">
            <form @submit.prevent="registerUser">
              <div class="my-3">
                <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                <input type="email" v-model="email" name="email"
                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="e.g: arahimcse@gmail.com" required="" />
              </div>
              <div class="my-3">
                <label for="password"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                <input v-model="password" type="password" name="password" id="password" placeholder="••••••••"
                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required="" />
              </div>
              <div class="my-3">
                <label for="confirmpassword" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm
                  Password</label>
                <input v-model="confirmPassword" type="password" name="password" id="confirmpassword"
                  placeholder="••••••••"
                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required="">
              </div>
              <p class="text-right my-5">
                <button type="submit"
                  class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Register</button>
              </p>
            </form>
            <p class="text-sm font-light text-gray-500 dark:text-gray-400">
              Have an account?
              <router-link class="font-medium text-primary-600 hover:underline dark:text-primary-500"
                to="/login">Login</router-link>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  </p>
</template>

<style scoped></style>