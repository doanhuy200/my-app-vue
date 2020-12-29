<template>
  <div id="app">
    <Header />
    <Navbar />
    <router-view />
    <Todos />
  </div>
</template>

<script>
  import Header from "./components/Header";
  import Navbar from "./components/Navbar"
  import Todos from "./components/Todos";

  export default {
    name: 'App',
    components: { Header, Todos, Navbar },
  };
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
  }

</style>
