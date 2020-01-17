<template>
  <div class="whois">
    <WiMg />
    <Education />
    <Articles />
    <Courses />
    <LetsMakeItHappen />
  </div>
</template>

<script>
import WiMg from "@/components/WiMg.vue";
import LetsMakeItHappen from "@/components/LetsMakeItHappen.vue";
import Education from "@/components/Education.vue";
import Articles from "@/components/Articles.vue";
import Courses from "@/components/Courses.vue";

export default {
  name: "Whois",
  components: {
    WiMg,
    LetsMakeItHappen,
    Education,
    Articles,
    Courses
  }
};
</script>

