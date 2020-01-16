<template>
  <div class="skills-container">
    <div class="skills-container-position">
      <img src="../assets/bg/bg-5.svg" alt="skills-background" />
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
            <img :src="getIconUrl(skill.icon)" alt="skill-icon" class="skill-icon" />
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
          icon: "vuejs-brands.svg",
          description: "First language that i learned."
        },
        {
          name: "Javascript",
          icon: "js-brands.svg",
          description: "First language that i learned."
        },
        {
          name: "HTML",
          icon: "html5-brands.svg",
          description: "First language that i learned."
        },
        {
          name: "CSS",
          icon: "css3-alt-brands.svg",
          description: "First language that i learned."
        },
        {
          name: "SQL",
          icon: "sql-brands.svg",
          description: "First language that i learned."
        },
        {
          name: "C#",
          icon: "csharp-alt-brands.svg",
          description: "First language that i learned."
        },
        {
          name: "Git",
          icon: "git-alt-brands.svg",
          description: "First language that i learned."
        },
        {
          name: "JAVA",
          icon: "java-brands.svg",
          description: "First language that i learned."
        },
        {
          name: "C",
          icon: "c-brands.svg",
          description: "First language that i learned."
        },
        {
          name: "Python",
          icon: "python-brands.svg",
          description: "First language that i learned."
        }
      ]
    };
  },
  methods: {
    getIconUrl(iconName) {
      return require("../assets/skills/" + iconName);
    }
  }
};
</script>

<style lang="scss" >
@import "./styles/SkillsStyle.scss";
</style>