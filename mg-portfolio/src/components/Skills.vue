<template>
  <div class="skills-container">
    <div class="skills-container-position">
      <img src="../assets/bg-5.svg" alt="skills-background" />
      <div class="skill-container-text">
        <div class="skill-container-title-text">
          <h1 class="skills-title">Skills</h1>
        </div>
        <div class="skills-text-container-description">
          <p class="skills-text-description">
            These are my programming skills. You'll
            find that i'm mostly a front-end dev
            and a machine learning student by love!
          </p>
        </div>
      </div>
      <div class="skill-container-skills">
        <div class="skill-container-single-skill" v-for="(skill,index) in skills" :key="index">
          <div class="skill-container-circle">
            <img :src="`${skill.icon}`" alt="skill-icon" class="skill-icon" />
            {{skill.icon}}
          </div>
          <div class="skill-name-container">
            <p class="skill-name">{{skill.name}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Skills",
  data() {
    return {
      skills: [
        {
          name: "Vue.js",
          icon: "../assets/vuejs-brands.svg",
          description: "First language that i learned."
        },
        {
          name: "Javascript",
          icon: "../assets/vuejs-brands.svg",
          description: "First language that i learned."
        },
        {
          name: "HTML",
          icon: "../assets/vuejs-brands.svg",
          description: "First language that i learned."
        },
        {
          name: "CSS",
          icon: "../assets/vuejs-brands.svg",
          description: "First language that i learned."
        },
        {
          name: "SQL",
          icon: "../assets/vuejs-brands.svg",
          description: "First language that i learned."
        },
        {
          name: "C#",
          icon: "../assets/vuejs-brands.svg",
          description: "First language that i learned."
        },
        {
          name: "Git",
          icon: "../assets/vuejs-brands.svg",
          description: "First language that i learned."
        },
        {
          name: "C#",
          icon: "../assets/vuejs-brands.svg",
          description: "First language that i learned."
        },
        {
          name: "JAVA",
          icon: "../assets/vuejs-brands.svg",
          description: "First language that i learned."
        },
        {
          name: "C",
          icon: "../assets/vuejs-brands.svg",
          description: "First language that i learned."
        },
        {
          name: "Python",
          icon: "../assets/vuejs-brands.svg",
          description: "First language that i learned."
        }
      ]
    };
  }
};
</script>

<style lang="scss" >
@import "./styles/SkillsStyle.scss";
</style>