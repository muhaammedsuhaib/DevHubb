<template>
  <section class="relative bg-black text-white py-16 flex flex-col items-center justify-center">
    <!-- Section Title -->
    <h1 class="text-4xl md:text-5xl font-bold uppercase tracking-wide animate-fadeInUp">
      Our <span class="text-gold">Services</span>
    </h1>
    <!-- Section Subtitle -->
    <p class="text-lg md:text-xl mt-4 text-center tracking-wide animate-fadeInUp delay-150">
      Tailored Solutions to Meet Your Needs
    </p>

    <!-- Services List -->
    <div class="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-5">
      <!-- Service Item -->
      <div
        v-for="(service, index) in services"
        :key="service.title"
        class="text-center transform transition duration-500 hover:scale-105 animate-fadeInUp"
        :style="{ animationDelay: (index + 1) * 0.2 + 's' }"
      >
        <span :aria-label="service.title">
          <i :class="service.icon" class="text-4xl sm:text-5xl text-gold animate-bounceIn"></i>
        </span>
        <h3 class="text-xl font-bold mt-4">{{ service.title }}</h3>
        <p class="text-sm mt-2">{{ service.description }}</p>
      </div>
    </div>

    <!-- Why Choose Us Section -->
    <section class="bg-gray-800 text-white mt-10 py-16 px-6 text-center">
      <h2 class="text-3xl md:text-4xl font-bold mb-6 animate-fadeInUp">
        Why <span class="text-gold">Choose Us?</span>
      </h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <!-- Why Item -->
        <div
          v-for="(reason, index) in reasons"
          :key="reason.title"
          class="transition-transform transform hover:scale-105 animate-fadeInUp"
          :style="{ animationDelay: (index + 1) * 0.3 + 's' }"
        >
          <span :aria-label="reason.title">
            <i :class="reason.icon" class="text-4xl text-gold"></i>
          </span>
          <h3 class="text-xl font-bold mt-4">{{ reason.title }}</h3>
          <p class="text-sm mt-2">{{ reason.description }}</p>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
export default {
  data() {
    return {
      services: [
        { title: 'Web Development', icon: 'fas fa-laptop-code', description: 'Build modern and responsive websites tailored to your business needs.' },
        { title: 'UI/UX Design', icon: 'fas fa-paint-brush', description: 'Design user-friendly interfaces and experiences for web and mobile.' },
        { title: 'E-commerce Solutions', icon: 'fas fa-shopping-cart', description: 'Develop robust e-commerce platforms to boost your online sales.' },
        { title: 'SEO Optimization', icon: 'fas fa-search', description: 'Improve your website’s visibility and ranking on search engines.' },
        { title: 'Content Creation', icon: 'fas fa-pen-fancy', description: 'Create compelling content to engage your audience and boost your brand.' },
        { title: 'Digital Marketing', icon: 'fas fa-bullhorn', description: 'Drive targeted traffic and conversions through tailored marketing strategies.' },
      ],
      reasons: [
        { title: 'Quality Assurance', icon: 'fas fa-check-circle', description: 'We ensure the highest quality standards in all our projects.' },
        { title: 'Expert Team', icon: 'fas fa-users', description: 'Our team consists of experienced professionals in various fields.' },
        { title: 'Timely Delivery', icon: 'fas fa-clock', description: 'We deliver projects on time, every time, with no compromises.' },
        { title: 'Customer Support', icon: 'fas fa-headset', description: 'We provide ongoing support to ensure your success.' },
      ],
    };
  },
};
</script>

<style scoped>
.text-gold {
  color: #ffd700;
}

.animate-fadeInUp {
  opacity: 0;
  animation: fadeInUp 1s ease-out forwards;
}

.animate-bounceIn {
  animation: bounceIn 2s ease-in-out infinite;
}

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

@keyframes bounceIn {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-5px);
  }
}

.service-item:hover {
  box-shadow: 0 0 5px white;
}
</style>
