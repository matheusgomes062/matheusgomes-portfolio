<template>
  <div class="home">
    <div class="mg-vertical mg-top">mgodev</div>
    <Mg />
    <Work />
    <Skills />
    <WorkingSteps />
    <LetsMakeItHappen />
    <div class="mg-vertical mg-bottom">mgodev</div>
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
.mg-vertical {
  position: fixed;
  z-index: 10;
  font-weight: 500;
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
</style>
