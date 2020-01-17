<template>
  <div class="courses-container">
    <div class="courses-container-position">
      <!-- <img src="../assets/bg/bg-5.svg" alt="courses-background" /> -->
      <div class="courses-container-text">
        <div class="courses-container-title-text">
          <h1 class="courses-title">Courses</h1>
        </div>
        <div class="courses-text-container-description">
          <p
            class="courses-text-description"
          >All the courses i've done trought the years. Most of then are online.</p>
        </div>
      </div>
      <div class="courses-container-courses">
        <div
          class="courses-container-single-courses"
          v-for="(course,index) in courses"
          :key="index"
        >
          <div class="course-container-circle">
            <!-- <img :src="getIconUrl(course.icon)" alt="course-icon" class="course-icon" /> -->
          </div>
          <div class="course-name-container">
            <p class="course-name">{{course.title | truncate(5, '...')}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Courses",
  data() {
    return {
      courses: [
        {
          title: "Vue.Js Full Course",
          description: "First course i ever made.",
          icon: "icon path"
        },
        {
          title: "WordPress REST API",
          description: "First course i ever made.",
          icon: "icon path"
        },
        {
          title: "Web Design Full Course",
          description: "First course i ever made.",
          icon: "icon path"
        },
        {
          title: "CSS Flexbox",
          description: "First course i ever made.",
          icon: "icon path"
        },
        {
          title: "Adobe XD",
          description: "First course i ever made.",
          icon: "icon path"
        },
        {
          title: "C#",
          description: "First course i ever made.",
          icon: "icon path"
        },
        {
          title: "Machine Learning - Stanford",
          description: "First course i ever made.",
          icon: "icon path"
        },
        {
          title: "Git and Open Source Contribution",
          description: "First course i ever made.",
          icon: "icon path"
        },
        {
          title: "AdobeXd",
          description: "First course i ever made.",
          icon: "icon path"
        },
        {
          title: "AdobeXd",
          description: "First course i ever made.",
          icon: "icon path"
        }
      ],
      filters: {
        truncate: function(text, length, suffix) {
          return text.substring(0, length) + suffix;
        }
      }
    };
  }
};
</script>

<style lang="scss" >
@import "./styles/CoursesStyle.scss";
</style>