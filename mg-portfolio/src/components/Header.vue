<template>
  <header>
    <nav>
      <router-link to="/whois" class="router-link">
        <h1 class="header-text">Who is MG?</h1>
      </router-link>
      <router-link to="/projects" class="router-link">
        <h1 class="header-text">Projects</h1>
      </router-link>
      <router-link to="/" class="router-link">
        <h1 class="header-text">Contact</h1>
      </router-link>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style lang="scss" >
@import "./styles/HeaderStyle.scss";
</style>