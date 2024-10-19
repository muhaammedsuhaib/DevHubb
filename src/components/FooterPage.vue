<template>
  <footer class="bg-black text-white py-10 flex flex-col items-center p-10">
    <div class="container mx-auto text-center">
      <div class="flex space-x-6 mb-4">
        <a href="https://x.com/MuhaammedSuhaib" class="social-icon" aria-label="Twitter">
          <i class="fab fa-twitter"></i>
        </a>
        <a href="https://www.facebook.com/profile.php?id=100073352894286" class="social-icon" aria-label="Facebook">
          <i class="fab fa-facebook-f"></i>
        </a>
        <a href="https://www.linkedin.com/company/devhubb-technology/" class="social-icon" aria-label="LinkedIn">
          <i class="fab fa-linkedin-in"></i>
        </a>
        <a href="https://www.instagram.com/devhu.bb?igsh=MTA4YzhyMnlmcGcxdQ==" class="social-icon" aria-label="Instagram">
          <i class="fab fa-instagram"></i>
        </a>
        <a href="https://github.com/muhaammedsuhaib" class="social-icon" aria-label="github">
          <i class="fab fa-github"></i>
        </a>
      </div>
      <p class="text-xs md:text-sm copyright">
        &copy; 2024 DEVHUBB Technology. All Rights Reserved.
      </p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background-color: #000;
}

.text-gold {
  color: #ffd700;
}

/* Animations */
.section-title,
.section-subtitle,
.social-icon,
.copyright {
  opacity: 0;
  animation: fadeIn 1s ease-out forwards;
}

.section-title {
  animation-delay: 0.5s;
}

.section-subtitle {
  animation-delay: 0.7s;
}

.social-icon {
  font-size: 1.5rem;
  color: #ffd700; /* Gold color */
  transition: transform 0.3s;
}

.social-icon:hover {
  transform: scale(1.2); /* Scale effect on hover */
}

.copyright {
  animation-delay: 1s;
}

/* Animations */
@keyframes fadeIn {
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
