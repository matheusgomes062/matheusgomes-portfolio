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
          <div class="skill-container-circle"></div>
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
          description: "First language that i learned."
        },
        {
          name: "Javascript",
          description: "First language that i learned."
        },
        {
          name: "HTML",
          description: "First language that i learned."
        },
        {
          name: "CSS",
          description: "First language that i learned."
        },
        {
          name: "SQL",
          description: "First language that i learned."
        },
        {
          name: "C#",
          description: "First language that i learned."
        },
        {
          name: "JAVA",
          description: "First language that i learned."
        },
        {
          name: "Git",
          description: "First language that i learned."
        },
        {
          name: "C#",
          description: "First language that i learned."
        },
        {
          name: "C",
          description: "First language that i learned."
        },
        {
          name: "Python",
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