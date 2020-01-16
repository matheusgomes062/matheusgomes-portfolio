<template>
  <div id="app">
    <Header />
    <router-link to="/" class="router-link">
      <div class="mg-vertical mg-top">mgodev</div>
    </router-link>
    <main>
      <router-view />
    </main>
    <router-link to="/" class="router-link">
      <div class="mg-vertical mg-bottom">mgodev</div>
    </router-link>
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

body {
  margin: 0;
}

html {
  scroll-behavior: smooth;
}

.mg-vertical {
  position: fixed;
  z-index: 10;
  font-weight: 700;
  font-size: 18px;
  writing-mode: vertical-rl;
  transform: rotate(180deg);
  left: 10px;
}

.mg-top {
  top: 50px;
}

.mg-bottom {
  bottom: 50px;
}

.router-link {
  color: inherit;
}
</style>
