<template>
  <div class="wimg-education-container">
    <div class="wimg-education-title-text-container-position">
      <div class="wimg-education-title-text-container">
        <img src="../assets/mini-squares/mini-square-1.png" alt="mini-square-1" class="ms-1" />
        <h1 class="wimg-education-title">Education</h1>
        <section class="wimg-education-description-container">
          <p
            class="wimg-education-description"
          >This is my education path, the graduations i had in the course of the years. Also the path i tend to follow for the next years to come.</p>
        </section>
      </div>
    </div>
    <div class="wimg-education-university-cards-container">
      <div class="wimg-education-university-card">
        <h2>Federal University of São Paulo</h2>
      </div>
      <div class="wimg-education-university-card" style="top:425px">
        <h2>More?</h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Education"
};
</script>

<style lang="scss" >
@import "./styles/EducationStyle.scss";
</style>