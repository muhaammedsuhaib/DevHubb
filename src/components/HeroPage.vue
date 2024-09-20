<template>
  <section
    class="relative bg-black text-white py-16 flex flex-col items-center justify-center bg-cover hero-section" 
  >
    <!-- Hero Title -->
    <h1 class="text-4xl md:text-5xl font-bold uppercase hero-title tracking-wide">
      DEVHUBB <span class="text-gold">Technology</span>
    </h1>

    <!-- Hero Subtitle -->
    <p class="text-lg md:text-xl mt-4 text-center hero-subtitle tracking-wide">
      Freelance Web Development for Modern & Scalable Solutions
    </p>

    <!-- Call to Action Button -->
    <a
      href="#contact"
      class="mt-8 px-6 py-2 md:px-8 md:py-3 bg-gold text-black font-bold uppercase rounded-full hover:bg-yellow-600 transition-all cta-btn"
    >
      Get Started
    </a>

    <!-- Technologies Section -->
    <div class="mt-12 flex flex-wrap justify-center space-x-4 sm:space-x-6 tech-icons">
      <div v-for="(tech, index) in technologies" :key="index" class="tech-item text-center hover:text-yellow-400" :style="{ animationDelay: tech.delay }">
        <i :class="tech.icon" class="text-4xl sm:text-5xl transition-transform duration-300 hover:text-gold hover:scale-125"></i>
        <p class="text-xs sm:text-sm mt-2 hover:scale-125">{{ tech.name }}</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      technologies: [
        { name: "HTML5", icon: "fab fa-html5", delay: "1.2s" },
        { name: "CSS3", icon: "fab fa-css3-alt", delay: "1.4s" },
        { name: "JavaScript", icon: "fab fa-js-square", delay: "1.6s" },
        { name: "React", icon: "fab fa-react", delay: "1.8s" },
        { name: "Vue.js", icon: "fab fa-vuejs", delay: "2s" },
        { name: "Angular", icon: "fab fa-angular", delay: "2.2s" },
        { name: "Bootstrap", icon: "fab fa-bootstrap", delay: "2.4s" },
        { name: "Tailwind CSS", icon: "fab fa-css3-alt", delay: "2.6s" },
        { name: "Node.js", icon: "fab fa-node", delay: "2.8s" },
        { name: "Express.js", icon: "fas fa-server", delay: "3s" },
        { name: "NestJS", icon: "fas fa-cube", delay: "3.2s" },
        { name: "MongoDB", icon: "fas fa-database", delay: "3.4s" },
        { name: "Git", icon: "fab fa-git-alt", delay: "3.6s" },
        { name: "TypeScript", icon: "fab fa-js-square", delay: "3.8s" },
        { name: "SASS", icon: "fab fa-sass", delay: "4s" }
      ]
    };
  }
};
</script>

<style scoped>
/* Primary Colors */
.text-gold {
  color: #ffd700;
}
.bg-gold {
  background-color: #ffd700;
}

/* Hero Section Styling */
.hero-section {
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url("../assets/bg-devhubb.png");
}

/* Hero Title Animation */
.hero-title, .hero-subtitle, .cta-btn {
  opacity: 0;
  animation: fadeInUp ease-out forwards;
}
.hero-title {
  animation-duration: 1.5s;
}
.hero-subtitle {
  animation-duration: 2s;
  animation-delay: 0.5s;
}
.cta-btn {
  animation-duration: 2.5s;
  animation-delay: 1s;
}

/* Technologies Section Animation */
.tech-item {
  opacity: 0;
  animation: fadeIn 1s ease-out forwards;
}

/* Animations */
@keyframes fadeInUp {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeIn {
  0% {
    opacity: 0;
    transform: scale(0.9);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
</style>
