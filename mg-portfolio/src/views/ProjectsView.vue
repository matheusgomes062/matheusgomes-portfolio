<template>
  <div class="projects">
    <MyProjects />
    <MyProjectsCards />
    <LetsMakeItHappen />
  </div>
</template>

<script>
import MyProjects from "@/components/MyProjects.vue";
import LetsMakeItHappen from "@/components/LetsMakeItHappen.vue";
import MyProjectsCards from "@/components/MyProjectsCards.vue";

export default {
  name: "Projects",
  components: {
    MyProjects,
    MyProjectsCards,
    LetsMakeItHappen
  }
};
</script>

