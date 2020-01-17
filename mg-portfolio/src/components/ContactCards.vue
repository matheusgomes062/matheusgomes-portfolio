<template>
  <div class="contact-cards-container">
    <div class="contact-cards-container-position">
      <div class="contact-cards-position-container">
        <div class="contact-card-container" v-for="(contact,index) in contacts" :key="index">
          <div class="contact-name-container">
            <p class="contact-name">{{contact.type}}</p>
            <p class="contact-info">{{contact.info}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactCards",
  data() {
    return {
      contacts: [
        {
          type: "Phone / wpp",
          inof: "9999-9999"
        },
        {
          type: "LinkedIn",
          inof: "9999-9999"
        },
        {
          type: "Github",
          inof: "9999-9999"
        },
        {
          type: "E-mail",
          inof: "9999-9999"
        }
      ]
    };
  }
};
</script>

<style lang="scss" >
@import "./styles/ContactCardsStyle.scss";
</style>