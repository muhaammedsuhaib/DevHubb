<template>
  <section id="contact" class="relative bg-black text-white py-16 flex flex-col items-center justify-center portfolio-section">
    <!-- Section Title -->
    <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold uppercase section-title tracking-wide">
      Contact <span class="text-gold">Us</span>
    </h1>
    <!-- Section Subtitle -->
    <p class="text-base md:text-lg lg:text-xl mt-4 text-center section-subtitle tracking-wide">
      Get in touch with DEVHUBB Technology!
    </p>

    <!-- Contact Info and Form Container -->
    <div class="mt-8 w-full max-w-7xl flex flex-col-reverse lg:flex-row justify-center gap-8 px-4">
      <!-- Form -->
      <form @submit.prevent="submitForm" id="contact-form" class="flex-1 w-full max-w-md px-4  flex flex-col space-y-6 p-6 bg-gray-900 rounded-lg shadow-lg">
        <!-- Name Field -->
        <div class="mb-4">
          <label for="name" class="block text-sm font-medium text-white">Name</label>
          <div class="flex items-center bg-gray-800 text-white rounded-md">
            <i class="p-2 text-gold fas fa-user text-xl"></i>
            <input
              v-model="form.name"
              type="text"
              id="name"
              class="w-full p-2 bg-gray-800 text-white rounded-md"
              placeholder="Enter your name"
              required
            />
          </div>
        </div>

        <!-- Email Field -->
        <div class="mb-4">
          <label for="email" class="block text-sm font-medium text-white">Email</label>
          <div class="flex items-center bg-gray-800 text-white rounded-md">
            <i class="p-2 text-gold fas fa-envelope text-xl"></i>
            <input
              v-model="form.email"
              type="email"
              id="email"
              class="w-full p-2 bg-gray-800 text-white rounded-md"
              placeholder="Enter your email"
              required
            />
          </div>
        </div>

        <!-- Message Field -->
        <div class="mb-4">
          <label for="message" class="block text-sm font-medium text-white">Message</label>
          <div class="flex items-start bg-gray-800 text-white rounded-md">
            <i class="p-2 text-gold fas fa-comment-dots text-xl"></i>
            <textarea
              v-model="form.message"
              id="message"
              class="w-full p-2 bg-gray-800 text-white rounded-md"
              placeholder="Write your message"
              required
            ></textarea>
          </div>
        </div>

        <!-- Submit Button -->
        <button
          type="submit"
          id="button"
          class="w-full p-2 bg-gold text-black font-bold rounded-md hover:bg-yellow-600 transition duration-300"
        >
          Submit
        </button>
      </form>
      
      <!-- Contact Info -->
<div class="flex-1 flex flex-col space-y-6 p-6 bg-gray-900 rounded-lg shadow-lg">
  <!-- Phone -->
  <div class="flex items-center text-gold space-x-2">
    <i class="fas fa-phone-alt text-xl"></i>
    <a href="tel:7306890297" class="hover:underline">7306890297</a>
  </div>
  <!-- Email -->
  <div class="flex items-center text-gold space-x-2">
    <i class="fas fa-envelope text-xl"></i>
    <a href="mailto:devhubb0@gmail.com" class="hover:underline">devhubb0@gmail.com</a>
  </div>
  <!-- WhatsApp -->
  <div class="flex items-center text-gold space-x-2">
    <i class="fab fa-whatsapp text-xl"></i>
    <a href="https://wa.me/7306890297" target="_blank" rel="noopener noreferrer" class="hover:underline">
      WhatsApp
    </a>
  </div>
  <!-- Address -->
  <div class="flex items-center text-gold space-x-2">
    <i class="fas fa-map-marker-alt text-xl"></i>
     <a href="https://maps.app.goo.gl/DtZtjrksFHy18qSs8" target="_blank" rel="noopener noreferrer" class="hover:underline">
    <span>Malappuram, Kerala, PIN 679582</span>
    </a>
  </div>
  <!-- Office Hours -->
  <div class="flex items-center text-gold space-x-2">
    <i class="fas fa-clock text-xl"></i>
    <span>Available: Mon-Fri, 9:00 AM - 6:00 PM</span>
  </div>
  <!-- LinkedIn -->
  <div class="flex items-center text-gold space-x-2">
    <i class="fab fa-linkedin text-xl"></i>
    <a href="https://www.linkedin.com/company/devhubb-technology/" target="_blank" rel="noopener noreferrer" class="hover:underline">
      LinkedIn
    </a>
  </div>
</div>

    </div>
  </section>
</template>

<script>
import emailjs from 'emailjs-com';
import { useToast } from 'vue-toastification';

export default {
  data() {
    return {
      form: {
        name: '',
        email: '',
        message: '',
      },
    };
  },
  methods: {
    async submitForm() {
      const toast = useToast();
      const btn = document.getElementById('button');
      btn.textContent = 'Sending...';

      const serviceID = 'service_asuq6vm';
      const templateID = 'template_g3w0gop';

      // Initialize EmailJS with your API key
      emailjs.init('NonG5gIHcys8UMrmw');

      // Data object containing form input
      const data = {
        name: this.form.name,
        email: this.form.email,
        message: this.form.message,
      };

      try {
        await emailjs.send(serviceID, templateID, data);
        toast.success("Email Sent Successfully!", {
          position: "top-center",
          timeout: 5000,
          closeOnClick: true,
          pauseOnFocusLoss: true,
          pauseOnHover: true,
          draggable: true,
          draggablePercent: 0.6,
          showCloseButtonOnHover: false,
          hideProgressBar: true,
          closeButton: "button",
          icon: true,
          rtl: false
        });
        this.resetForm();
      } catch (err) {
        toast.error('Failed to send email. Please try again.', {
          position: "top-center",
          timeout: 5000,
          closeOnClick: true,
          pauseOnFocusLoss: true,
          pauseOnHover: true,
          draggable: true,
          draggablePercent: 0.6,
          showCloseButtonOnHover: false,
          hideProgressBar: true,
          closeButton: "button",
          icon: true,
          rtl: false
        });
        console.error(err);
      } finally {
        btn.textContent = 'Submit';
      }
    },
    resetForm() {
      this.form.name = '';
      this.form.email = '';
      this.form.message = '';
    },
  },
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

/* Button Transition */
button:hover {
  background-color: #fcd34d; /* Light yellow */
  transition: background-color 0.3s ease;
}
</style>
