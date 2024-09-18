<template>
  <section
    class="relative bg-black text-white py-16 flex flex-col items-center justify-center hero-section"
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
      <!-- HTML5 -->
      <div class="tech-item text-center">
        <i class="fab fa-html5 text-4xl sm:text-5xl hover:text-gold"></i>
        <p class="text-xs sm:text-sm mt-2">HTML5</p>
      </div>
      <!-- CSS3 -->
      <div class="tech-item text-center">
        <i class="fab fa-css3-alt text-4xl sm:text-5xl hover:text-gold"></i>
        <p class="text-xs sm:text-sm mt-2">CSS3</p>
      </div>
      <!-- JavaScript -->
      <div class="tech-item text-center">
        <i class="fab fa-js-square text-4xl sm:text-5xl hover:text-gold"></i>
        <p class="text-xs sm:text-sm mt-2">JavaScript</p>
      </div>
      <!-- React -->
      <div class="tech-item text-center">
        <i class="fab fa-react text-4xl sm:text-5xl hover:text-gold"></i>
        <p class="text-xs sm:text-sm mt-2">React</p>
      </div>
      <!-- Vue.js -->
      <div class="tech-item text-center">
        <i class="fab fa-vuejs text-4xl sm:text-5xl hover:text-gold"></i>
        <p class="text-xs sm:text-sm mt-2">Vue.js</p>
      </div>
      <!-- Angular -->
      <div class="tech-item text-center">
        <i class="fab fa-angular text-4xl sm:text-5xl hover:text-gold"></i>
        <p class="text-xs sm:text-sm mt-2">Angular</p>
      </div>
      <!-- Bootstrap -->
      <div class="tech-item text-center">
        <i class="fab fa-bootstrap text-4xl sm:text-5xl hover:text-gold"></i>
        <p class="text-xs sm:text-sm mt-2">Bootstrap</p>
      </div>
      <!-- Tailwind CSS -->
      <div class="tech-item text-center">
        <i class="fab fa-css3-alt text-4xl sm:text-5xl hover:text-gold"></i>
        <p class="text-xs sm:text-sm mt-2">Tailwind CSS</p>
      </div>
      <!-- Node.js -->
      <div class="tech-item text-center">
        <i class="fab fa-node text-4xl sm:text-5xl hover:text-gold"></i>
        <p class="text-xs sm:text-sm mt-2">Node.js</p>
      </div>
      <!-- Express.js -->
      <div class="tech-item text-center">
        <i class="fas fa-server text-4xl sm:text-5xl hover:text-gold"></i>
        <p class="text-xs sm:text-sm mt-2">Express.js</p>
      </div>
      <!-- NestJS -->
      <div class="tech-item text-center">
        <i class="fas fa-cube text-4xl sm:text-5xl hover:text-gold"></i>
        <p class="text-xs sm:text-sm mt-2">NestJS</p>
      </div>
      <!-- MongoDB -->
      <div class="tech-item text-center">
        <i class="fas fa-database text-4xl sm:text-5xl hover:text-gold"></i>
        <p class="text-xs sm:text-sm mt-2">MongoDB</p>
      </div>
      <!-- Git -->
      <div class="tech-item text-center">
        <i class="fab fa-git-alt text-4xl sm:text-5xl hover:text-gold"></i>
        <p class="text-xs sm:text-sm mt-2">Git</p>
      </div>
      <!-- TypeScript -->
      <div class="tech-item text-center">
        <i class="fab fa-js-square text-4xl sm:text-5xl hover:text-gold"></i>
        <p class="text-xs sm:text-sm mt-2">TypeScript</p>
      </div>
      <!-- SASS/SCSS -->
      <div class="tech-item text-center">
        <i class="fab fa-sass text-4xl sm:text-5xl hover:text-gold"></i>
        <p class="text-xs sm:text-sm mt-2">SASS</p>
      </div>
    </div>
    <!-- Optional Hero Background Image -->
    <div
      class="absolute inset-0 opacity-20 bg-cover bg-center bg-hero-image"
    ></div>
  </section>
</template>

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
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

/* Hero Title Animation */
.hero-title {
  opacity: 0;
  animation: fadeInUp 1.5s ease-out forwards;
}
.hero-subtitle {
  opacity: 0;
  animation: fadeInUp 2s ease-out forwards;
  animation-delay: 0.5s;
}
.cta-btn {
  opacity: 0;
  animation: fadeInUp 2.5s ease-out forwards;
  animation-delay: 1s;
}

/* Technologies Section Animation */
.tech-item {
  opacity: 0;
  animation: fadeIn 1s ease-out forwards;
}
.tech-icons div:nth-child(1) {
  animation-delay: 1.2s;
}
.tech-icons div:nth-child(2) {
  animation-delay: 1.4s;
}
.tech-icons div:nth-child(3) {
  animation-delay: 1.6s;
}
.tech-icons div:nth-child(4) {
  animation-delay: 1.8s;
}
.tech-icons div:nth-child(5) {
  animation-delay: 2s;
}
.tech-icons div:nth-child(6) {
  animation-delay: 2.2s;
}
.tech-icons div:nth-child(7) {
  animation-delay: 2.4s;
}
.tech-icons div:nth-child(8) {
  animation-delay: 2.6s;
}
.tech-icons div:nth-child(9) {
  animation-delay: 2.8s;
}
.tech-icons div:nth-child(10) {
  animation-delay: 3s;
}
.tech-icons div:nth-child(11) {
  animation-delay: 3.2s;
}
.tech-icons div:nth-child(12) {
  animation-delay: 3.4s;
}
.tech-icons div:nth-child(13) {
  animation-delay: 3.6s;
}
.tech-icons div:nth-child(14) {
  animation-delay: 3.8s;
}
.tech-icons div:nth-child(15) {
  animation-delay: 4s;
}

/* Contact Info Animation */
.contact-info {
  opacity: 0;
  animation: fadeInUp 2.5s ease-out forwards;
  animation-delay: 1.5s;
}

.bg-hero-image {
  background-image: url("");
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
