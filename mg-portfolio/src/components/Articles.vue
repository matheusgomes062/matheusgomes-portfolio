
<template>
  <div class="wimg-articles-container">
    <div class="wimg-articles-title-text-container-position">
      <div class="wimg-articles-title-text-container">
        <h1 class="wimg-articles-title">Articles</h1>
        <section class="wimg-articles-description-container">
          <p
            class="wimg-articles-description"
          >These are some of the articles i have made in the course of the years. I'm Always trying to share the knowledge i have!</p>
        </section>
      </div>
    </div>
    <div class="wimg-articles-cards-container">
      <div class="wimg-articles-card">
        <!-- <img src="../assets/bg/unifesp-bg.png" alt="unifesp-bg" class="unifesp-bg" /> -->
        <h2>Programming Paradigm</h2>
      </div>
      <div class="wimg-articles-card" style="top:365px">
        <h2>How to make a Vue handler ...</h2>
      </div>
      <div class="wimg-articles-card" style="top:480px">
        <h2>Coalescing operator and ...</h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Articles",
  data() {
    return {
      articles: {}
    };
  }
};
</script>

<style lang="scss" >
@import "./styles/ArticlesStyle.scss";
</style>