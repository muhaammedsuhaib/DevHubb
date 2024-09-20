<template>
  <div>
    <Navbar />
    <Hero />
    <Services />
    <Portfolio />
    <Contact />
    <Footer />
  </div>
</template>

<script>
import Navbar from '@/components/NavbarPage.vue'
import Hero from '@/components/HeroPage.vue'
import Services from '@/components/ServicesPage.vue'
import Portfolio from '@/components/PortfolioPage.vue'
import Contact from '@/components/ContactPage.vue'
import Footer from '@/components/FooterPage.vue'

export default {
  components: {
    Navbar,
    Hero,
    Services,
    Portfolio,
    Contact,
    Footer
  },
}
</script>
