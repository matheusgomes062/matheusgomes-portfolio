<template>
  <div class="courses-container">
    <div class="courses-container-position">
      <div class="courses-container-text">
        <div class="courses-container-title-text">
          <img src="../assets/mini-squares/mini-square-3.png" alt="mini-square-3" class="ms-3" />
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
            <img :src="getIconUrl(course.icon)" alt="course-icon" class="course-icon" />
          </div>
          <div class="course-name-container">
            <p class="course-name">{{ course.title | truncate(10, "...") }}</p>
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
          title: "Vue.Js",
          description: "First course i ever made.",
          icon: "origamid-brand.png"
        },
        {
          title: "WordPress REST API",
          description: "First course i ever made.",
          icon: "origamid-brand.png"
        },
        {
          title: "Web Design",
          description: "First course i ever made.",
          icon: "origamid-brand.png"
        },
        {
          title: "CSS Flexbox",
          description: "First course i ever made.",
          icon: "origamid-brand.png"
        },
        {
          title: "Adobe XD",
          description: "First course i ever made.",
          icon: "origamid-brand.png"
        },
        {
          title: "C#",
          description: "First course i ever made.",
          icon: "udemy-brand.jpg"
        },
        {
          title: "Machine Learning - Stanford",
          description: "First course i ever made.",
          icon: "coursera-brand.png"
        },
        {
          title: "Git and Open Source Contribution",
          description: "First course i ever made.",
          icon: "udemy-brand.jpg"
        },
        {
          title: "Linux SO Introduction",
          description: "First course i ever made.",
          icon: "udemy-brand.jpg"
        },
        {
          title: "Linux Terminal",
          description: "First course i ever made.",
          icon: "udemy-brand.jpg"
        }
      ]
    };
  },
  filters: {
    truncate: function(text, length, suffix) {
      if (!text) return "";
      if (text.length > length) return text.substring(0, length) + suffix;
      else return text;
    }
  },
  methods: {
    getIconUrl(iconName) {
      return require("../assets/" + iconName);
    }
  }
};
</script>

<style lang="scss" >
@import "./styles/CoursesStyle.scss";
</style>