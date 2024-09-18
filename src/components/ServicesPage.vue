<template>
  <section class="relative bg-black text-white py-16 flex flex-col items-center justify-center services-section">
    <!-- Section Title -->
    <h1 class="text-4xl md:text-5xl font-bold uppercase section-title tracking-wide">
      Our <span class="text-gold">Services</span>
    </h1>
    <!-- Section Subtitle -->
    <p class="text-lg md:text-xl mt-4 text-center section-subtitle tracking-wide">
      Tailored Solutions to Meet Your Needs
    </p>

    <!-- Services List -->
    <div class="mt-12 flex flex-wrap justify-center gap-8 services-container">
      <!-- Web Development -->
      <div class="service-item text-center transition-transform transform hover:scale-105">
        <i class="fas fa-laptop-code text-4xl sm:text-5xl text-gold"></i>
        <h3 class="text-xl font-bold mt-4">Web Development</h3>
        <p class="text-sm mt-2">
          Build modern and responsive websites tailored to your business needs.
        </p>
      </div>
      <!-- UI/UX Design -->
      <div class="service-item text-center transition-transform transform hover:scale-105">
        <i class="fas fa-paint-brush text-4xl sm:text-5xl text-gold"></i>
        <h3 class="text-xl font-bold mt-4">UI/UX Design</h3>
        <p class="text-sm mt-2">
          Design user-friendly interfaces and experiences for web and mobile.
        </p>
      </div>
      <!-- E-commerce Solutions -->
      <div class="service-item text-center transition-transform transform hover:scale-105">
        <i class="fas fa-shopping-cart text-4xl sm:text-5xl text-gold"></i>
        <h3 class="text-xl font-bold mt-4">E-commerce Solutions</h3>
        <p class="text-sm mt-2">
          Develop robust e-commerce platforms to boost your online sales.
        </p>
      </div>
      <!-- SEO Optimization -->
      <div class="service-item text-center transition-transform transform hover:scale-105">
        <i class="fas fa-search text-4xl sm:text-5xl text-gold"></i>
        <h3 class="text-xl font-bold mt-4">SEO Optimization</h3>
        <p class="text-sm mt-2">
          Improve your website’s visibility and ranking on search engines.
        </p>
      </div>
      <!-- Content Creation -->
      <div class="service-item text-center transition-transform transform hover:scale-105">
        <i class="fas fa-pen-fancy text-4xl sm:text-5xl text-gold"></i>
        <h3 class="text-xl font-bold mt-4">Content Creation</h3>
        <p class="text-sm mt-2">
          Create compelling content to engage your audience and boost your brand.
        </p>
      </div>
      <!-- Digital Marketing -->
      <div class="service-item text-center transition-transform transform hover:scale-105">
        <i class="fas fa-bullhorn text-4xl sm:text-5xl text-gold"></i>
        <h3 class="text-xl font-bold mt-4">Digital Marketing</h3>
        <p class="text-sm mt-2">
          Drive targeted traffic and conversions through tailored marketing strategies.
        </p>
      </div>
    </div>

    <!-- Why Choose Us -->
    <section class="bg-gray-800 text-white mt-10 py-16 px-6 text-center why-choose-us-section">
      <h2 class="text-3xl md:text-4xl font-bold mb-6">
        Why <span class="text-gold">Choose Us?</span>
      </h2>
      <div class="flex flex-wrap justify-center gap-8">
        <!-- Quality Assurance -->
        <div class="why-item transition-transform transform hover:scale-105">
          <i class="fas fa-check-circle text-4xl text-gold"></i>
          <h3 class="text-xl font-bold mt-4">Quality Assurance</h3>
          <p class="text-sm mt-2">
            We ensure the highest quality standards in all our projects.
          </p>
        </div>
        <!-- Expert Team -->
        <div class="why-item transition-transform transform hover:scale-105">
          <i class="fas fa-users text-4xl text-gold"></i>
          <h3 class="text-xl font-bold mt-4">Expert Team</h3>
          <p class="text-sm mt-2">
            Our team consists of experienced professionals in various fields.
          </p>
        </div>
        <!-- Timely Delivery -->
        <div class="why-item transition-transform transform hover:scale-105">
          <i class="fas fa-clock text-4xl text-gold"></i>
          <h3 class="text-xl font-bold mt-4">Timely Delivery</h3>
          <p class="text-sm mt-2">
            We deliver projects on time, every time, with no compromises.
          </p>
        </div>
        <!-- Customer Support -->
        <div class="why-item transition-transform transform hover:scale-105">
          <i class="fas fa-headset text-4xl text-gold"></i>
          <h3 class="text-xl font-bold mt-4">Customer Support</h3>
          <p class="text-sm mt-2">
            We provide ongoing support to ensure your success.
          </p>
        </div>
      </div>
    </section>

    <!-- Optional Background Image -->
    <div class="absolute inset-0 opacity-20 bg-cover bg-center bg-services-image"></div>
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

/* Services Section Styling */
.services-section {
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

/* Services List Animation */
.service-item {
  opacity: 0;
  animation: fadeIn 1s ease-out forwards;
}
.services-container .service-item:nth-child(1) {
  animation-delay: 1s;
}
.services-container .service-item:nth-child(2) {
  animation-delay: 1.2s;
}
.services-container .service-item:nth-child(3) {
  animation-delay: 1.4s;
}
.services-container .service-item:nth-child(4) {
  animation-delay: 1.6s;
}
.services-container .service-item:nth-child(5) {
  animation-delay: 1.8s;
}
.services-container .service-item:nth-child(6) {
  animation-delay: 2s;
}

/* Why Choose Us Section Styling */
.why-choose-us-section {
  background-color: #2d2d2d;
}
.why-item {
  max-width: 250px;
  margin: 0 auto;
}

/* Optional Background Image */
.bg-services-image {
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
