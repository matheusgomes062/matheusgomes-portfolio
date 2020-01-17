<template>
  <div class="contact">
    <Contact />
    <ContactCards />
  </div>
</template>

<script>
import Contact from "@/components/Contact.vue";
import ContactCards from "@/components/ContactCards.vue";

export default {
  name: "ContactView",
  components: {
    Contact,
    ContactCards
  }
};
</script>

