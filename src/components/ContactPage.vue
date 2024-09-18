<template>
  <section class="relative bg-black text-white py-16 flex flex-col items-center justify-center portfolio-section">
    <!-- Section Title -->
    <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold uppercase section-title tracking-wide">
      Contact Us
    </h1>
    <!-- Section Subtitle -->
    <p class="text-base md:text-lg lg:text-xl mt-4 text-center section-subtitle tracking-wide">
      Get in touch with us!
    </p>

    <!-- Form -->
    <form @submit.prevent="submitForm" class="mt-8 w-full max-w-md">
      <!-- Name Field -->
      <div class="mb-4">
        <label for="name" class="block text-sm font-medium text-white">Name</label>
        <input
          v-model="form.name"
          type="text"
          id="name"
          class="mt-1 block w-full p-2 bg-gray-800 text-white rounded-md"
          placeholder="Enter your name"
          required
        />
      </div>

      <!-- Email Field -->
      <div class="mb-4">
        <label for="email" class="block text-sm font-medium text-white">Email</label>
        <input
          v-model="form.email"
          type="email"
          id="email"
          class="mt-1 block w-full p-2 bg-gray-800 text-white rounded-md"
          placeholder="Enter your email"
          required
        />
      </div>

      <!-- Message Field -->
      <div class="mb-4">
        <label for="message" class="block text-sm font-medium text-white">Message</label>
        <textarea
          v-model="form.message"
          id="message"
          class="mt-1 block w-full p-2 bg-gray-800 text-white rounded-md"
          placeholder="Write your message"
          required
        ></textarea>
      </div>

      <!-- Submit Button -->
      <button
        type="submit"
        class="w-full p-2 bg-gold text-black font-bold rounded-md hover:bg-yellow-600"
      >
        Submit
      </button>
    </form>
  </section>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: '',
        email: '',
        message: ''
      }
    };
  },
  methods: {
    submitForm() {
      // Handle form submission logic
      console.log('Form data:', this.form);
      alert('Form submitted!');
    }
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
