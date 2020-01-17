<template>
  <div class="contact-container">
    <div class="contact-container-position">
      <div class="contact-title-text-container-position">
        <div class="contact-title-text-container">
          <h1 class="contact-title">Contact</h1>
          <section class="contact-description-container">
            <p class="contact-description">Say hey!</p>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contact",
  data() {
    return {
      contacts: [
        {
          type: "phone",
          inof: "9999-9999"
        },
        {
          type: "phone",
          inof: "9999-9999"
        },
        {
          type: "phone",
          inof: "9999-9999"
        },
        {
          type: "phone",
          inof: "9999-9999"
        }
      ]
    };
  }
};
</script>

<style lang="scss" >
@import "./styles/ContactStyle.scss";
</style>