<template>
  <section class="relative bg-black text-white py-16 flex flex-col items-center justify-center portfolio-section">
    <!-- Section Title -->
    <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold uppercase section-title tracking-wide">
      Our <span class="text-gold">Portfolio</span>
    </h1>
    <!-- Section Subtitle -->
    <p class="text-base md:text-lg lg:text-xl mt-4 text-center section-subtitle tracking-wide">
      Showcasing Our Recent Projects
    </p>

    <!-- Portfolio Grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 portfolio-container">
      <!-- Project Item -->
      <div
        v-for="(project, index) in projects"
        :key="index"
        class="portfolio-item relative overflow-hidden transition-transform transform hover:scale-105"
      >
        <img
          :src="project.image"
          :alt="`Project Image ${index + 1}`"
          class="w-full h-48 object-cover"
        />
        <div
          class="absolute inset-0 z-10 flex items-center justify-center bg-black bg-opacity-60 opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in-out"
        >
          <div class="text-center text-white px-4">
          </div>
        </div>
            <h3 class="text-lg md:text-xl font-bold mb-2">{{ project.title }}</h3>
            <p class="text-sm md:text-base">{{ project.description }}</p>
      </div>
    </div>


    <!-- Optional Background Image -->
    <div class="absolute inset-0 opacity-20 bg-cover bg-center bg-portfolio-image"></div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      projects: [
        {
          title: "Project Title 1",
          description:
            "Brief description of the project showcasing the key aspects and technologies used.",
          image:
            "https://muhaammedsuhaib.github.io/Front-end-Developer-portfolio/assets/imgs/avatar.jpg"
        },
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

/* Portfolio Section Styling */
.portfolio-section {
  height: auto;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

/* Section Title Animation */
.section-title {
  opacity: 0;
  animation: fadeInUp 1.5s ease-out forwards;
}
.section-subtitle {
  opacity: 0;
  animation: fadeInUp 2s ease-out forwards;
  animation-delay: 0.5s;
}

/* Portfolio Grid Styling */
.portfolio-container {
  width: 100%;
  max-width: 1200px;
}
.portfolio-item {
  position: relative;
  overflow: hidden;
}
.portfolio-item img {
  transition: transform 0.3s ease;
  border-radius: 8px;
}
.portfolio-item:hover img {
  transform: scale(1.1);
}
.portfolio-item div {
  transition: opacity 0.3s ease;
}

/* Ensure the overlay is above the image */
.portfolio-item div {
  z-index: 10;
}

/* Optional Background Image */
.bg-portfolio-image {
  background-image: url(""); /* Add your background image URL here */
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
</style>
