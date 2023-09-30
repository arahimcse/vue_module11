<script setup>
</script>

<template>
  <header class="bg-black border-b-light-100 border-b h-20 text-white items-center justify-center flex p-5 text-2xl">
    Assignment 1 (Module 11)</header>
  <section class="flex">
    <aside class="w-[450px] bg-black ">
      <router-view name="LeftSideBar"></router-view>
    </aside>
    <main class="w-full min-h-screen p-5">
      <router-view></router-view>
    </main>
  </section>
  <footer></footer>
</template>

<style scoped></style>