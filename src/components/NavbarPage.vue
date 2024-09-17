<template>
  <nav class="relative flex items-center justify-between px-4 py-3 bg-teal-200 mb-3">
    <div class="container mx-auto flex items-center justify-between">
      <!-- Logo and Brand Name Section -->
      <div class="relative flex items-center lg:w-auto logo-container">
        <a href="#pablo" class="relative flex items-center py-2 whitespace-nowrap logo-link">
          <img src="@/assets/logo.png" alt="Logo" class="h-10 w-auto logo-img">
          <!-- Overlay Brand Name with Animation -->
          <span class="absolute inset-0 flex items-center justify-center text-sm font-bold text-black uppercase brand-name-animation" style="margin-left: 4rem; margin-top: 0.5rem;">
            DEVHUBB
          </span>
        </a>
      </div>
      <!-- Navbar Links -->
      <div class="flex items-center space-x-4 ml-auto nav-links">
        <a class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:text-yellow-500 nav-link" href="#pablo">
          <i class="fab fa-facebook-square text-lg leading-lg"></i>
        </a>
        <a class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:text-yellow-500 nav-link" href="#pablo">
          <i class="fab fa-twitter text-lg leading-lg"></i>
        </a>
        <a class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:text-yellow-500 nav-link" href="#pablo">
          <i class="fab fa-instagram text-lg leading-lg"></i>
        </a>
        <a class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:text-yellow-500 nav-link" href="#pablo">
          <i class="fab fa-github text-lg leading-lg"></i>
        </a>
      </div>
    </div>
  </nav>
</template>



<style scoped>
a.relative {
  position: relative;
}

img.logo-img {
  display: block; /* Ensures no extra space around the image */
  animation: logoFadeIn 2s ease-out; /* Animation for the logo image */
}

.brand-name-animation {
  opacity: 0;
  animation: fadeIn 2s ease-out forwards;
  text-align: center;
  white-space: nowrap; /* Prevents text wrapping */
  animation-delay: 0.5s; /* Delay for the brand name animation */
}

.nav-link {
  opacity: 0;
  animation: navLinkFadeIn 1s ease-out forwards;
  animation-delay: 1s; /* Delay for the navbar links animation */
}

.nav-links a:nth-child(1) { animation-delay: 1s; }
.nav-links a:nth-child(2) { animation-delay: 1.2s; }
.nav-links a:nth-child(3) { animation-delay: 1.4s; }
.nav-links a:nth-child(4) { animation-delay: 1.6s; }

@keyframes logoFadeIn {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes navLinkFadeIn {
  from {
    opacity: 0;
    transform: translateX(-10px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
</style>
