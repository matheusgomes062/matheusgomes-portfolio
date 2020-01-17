<template>
  <div class="mpc-container">
    <img src="../assets/bg/mpc-bg.svg" alt="mpc-bg" class="mpc-bg" />
    <div class="mpc-container-position">
      <div class="mpc-cards-container">
        <div class="mpc-card-container" v-for="(project,index) in projects" :key="index">
          <!-- <div class="mp-card">
          </div>-->
          <div class="mpc-name-container">
            <p class="mpc-name">{{project.name}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyProjectsCards",
  data() {
    return {
      projects: [
        {
          name: "project 1",
          description: "description 1"
        },
        {
          name: "project 2",
          description: "description 1"
        },
        {
          name: "project 3",
          description: "description 1"
        },
        {
          name: "project 4",
          description: "description 1"
        }
      ]
    };
  }
};
</script>

<style lang="scss" >
@import "./styles/MPCStyle.scss";
</style>