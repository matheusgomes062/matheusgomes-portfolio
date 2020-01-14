<template>
  <div class="home">
    <Mg />
    <Work />
  </div>
</template>

<script>
// @ is an alias to /src
import Mg from "@/components/Mg.vue";
import Work from "@/components/Work.vue";

export default {
  name: "home",
  components: {
    Mg,
    Work
  }
};
</script>
