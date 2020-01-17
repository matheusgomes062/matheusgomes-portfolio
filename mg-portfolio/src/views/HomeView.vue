<template>
  <div class="home">
    <Mg />
    <Work />
    <Skills />
    <WorkingSteps />
    <LetsMakeItHappen />
  </div>
</template>

<script>
// @ is an alias to /src
import Mg from "@/components/Mg.vue";
import Work from "@/components/Work.vue";
import WorkingSteps from "@/components/WorkingSteps.vue";
import LetsMakeItHappen from "@/components/LetsMakeItHappen.vue";
import Skills from "@/components/Skills.vue";

export default {
  name: "home",
  components: {
    Mg,
    Work,
    WorkingSteps,
    LetsMakeItHappen,
    Skills
  }
};
</script>

<style>
</style>
