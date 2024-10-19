<template>
  <nav class="fixed top-0 left-0 w-full px-4 py-3 bg-black z-50">
    <div class="container mx-auto flex items-center justify-between">
      <!-- Logo and Brand Name Section -->
      <div class="relative flex items-center lg:w-auto">
        <a href="#" class="relative flex items-center py-2 whitespace-nowrap">
          <img src="@/assets/logo.png" alt="Logo" class="h-10 w-auto logo-img">
          <!-- Brand Name with Animation -->
          <span class="absolute inset-0 flex items-center justify-center text-sm font-bold text-white uppercase brand-name-animation" style="margin-left: 4rem; margin-top: 0.5rem;">
            DEVHUBB
          </span>
        </a>
      </div>
      <!-- Navbar Links -->
      <div class="flex items-center space-x-4 ml-auto">
        <a class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:text-gold nav-link" href="https://www.linkedin.com/company/devhubb-technology/">
          <i class="fab fa-linkedin-in text-lg leading-lg"></i>
        </a>
        <a class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:text-gold nav-link" href="https://x.com/MuhaammedSuhaib">
          <i class="fab fa-twitter text-lg leading-lg"></i>
        </a>
        <a class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:text-gold nav-link" href="https://www.instagram.com/devhu.bb?igsh=MTA4YzhyMnlmcGcxdQ==">
          <i class="fab fa-instagram text-lg leading-lg"></i>
        </a>
        <a class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:text-gold nav-link" href="https://github.com/muhaammedsuhaib">
          <i class="fab fa-github text-lg leading-lg"></i>
        </a>
      </div>
    </div>
  </nav>
</template>


<style scoped>
/* Primary Colors */
.bg-black {
  background-color: #000000;
}

.text-white {
  color: #ffffff;
}

.hover\:text-gold:hover {
  color: #FFD700;
}

/* Logo Animation */
img.logo-img {
  display: block;
  animation: logoFadeIn 2s ease-out;
}

/* Brand Name Animation */
.brand-name-animation {
  opacity: 0;
  animation: fadeIn 2s ease-out forwards;
  white-space: nowrap;
  animation-delay: 0.5s;
}

/* Navbar Link Animation */
.nav-link {
  opacity: 0;
  animation: navLinkFadeIn 1s ease-out forwards;
  animation-delay: 1s;
}

/* Individual Link Delays */
.nav-links a:nth-child(1) {
  animation-delay: 1s;
}
.nav-links a:nth-child(2) {
  animation-delay: 1.2s;
}
.nav-links a:nth-child(3) {
  animation-delay: 1.4s;
}
.nav-links a:nth-child(4) {
  animation-delay: 1.6s;
}

/* Keyframes */
@keyframes logoFadeIn {
  0% {
    opacity: 0;
    transform: scale(0.9);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes fadeIn {
  0% {
    opacity: 0;
    transform: translateY(10px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes navLinkFadeIn {
  0% {
    opacity: 0;
    transform: translateX(-10px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}
</style>
