<template>
  <nav>
    <h1>Navigate Router</h1>
    <ul class="nav-link">
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/products">Products</router-link></li>
      <li><router-link to="/about">About</router-link></li>
      <li>Total todo: {{ totalTodos }}</li>
    </ul>
  </nav>
</template>
<script>
  export default {
    name: 'Navbar',
    computed: {
      totalTodos() {
        return this.$store.state.todos.length;
      },
    }
  }
</script>
<style scoped>
  nav {
    background: #335;
    color: #fff;
    text-align: center;
    padding: 10px;
  }

  nav ul.nav-link {
    display: flex;
    justify-content: space-around;
    align-items: center;
    list-style: none;
    padding: 0;
  }

  nav ul.nav-link a {
    color: #fff;
    text-decoration: none;
  }

  nav ul.nav-link a:hover {
    color: rgb(83, 203, 250);
  }
</style>
