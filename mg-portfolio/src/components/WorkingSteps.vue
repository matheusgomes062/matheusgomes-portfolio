<template>
  <div class="working-steps-container">
    <div class="working-steps-container-position">
      <div class="working-steps-container-position">
        <h1 class="title-150">Working steps</h1>
      </div>
      <div class="working-steps-container-position">
        <div class="working-steps-container-container-steps">
          <div v-for="(step, index) in steps" :key="index" class="working-steps-container-steps">
            <div class="working-steps-container-step">
              <div class="working-steps-container-title">
                <div class="working-steps-container-bgimg">
                  <h2 class="working-steps-step-title">{{step.title}}</h2>
                </div>
              </div>
              <div class="working-steps-container-text">
                <section class="working-steps-container-section">
                  <p class="working-steps-text">{{step.text}}</p>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "WorkingSteps",
  data() {
    return {
      steps: [
        {
          title: "Briefing",
          text:
            "What the site want to achieve? \nWhat is the users needs? \n And most important, \nwhat is your goal?"
        },
        {
          title: "Information Architeture",
          text:
            "Here i define the most important areas of the site and what will be his content."
        },
        {
          title: "Wireframe",
          text:
            "In this part i make the interaction design of the website, no color or typograph defined, only the essentials."
        },
        {
          title: "Design",
          text:
            "The fun part. Here i add color, images, typograph and style to the website can have the face of the customer or the brand."
        },
        {
          title: "Code",
          text:
            "The final part. Here i work hard to make the website responsive, fast and consistent on most of the devices."
        }
      ]
    };
  }
};
</script>

<style lang="scss" >
@import "./styles/WorkingStepsStyle.scss";
</style>