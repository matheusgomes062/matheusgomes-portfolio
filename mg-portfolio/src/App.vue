<template>
  <div id="app">
    <Header />
    <main>
      <router-view />
    </main>
    <!-- <Footer /> -->
  </div>
</template>

<script>
import Header from "@/components/Header.vue";

export default {
  components: {
    Header
  }
};
</script>

<style lang="scss">
// @import "./normalize.css";
@import url("https://fonts.googleapis.com/css?family=Montserrat:400,500,600,700,800,900&display=swap");

* {
  font-family: "Montserrat", sans-serif;
}
</style>
