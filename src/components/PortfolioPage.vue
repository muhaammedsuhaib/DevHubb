<template>
  <section id="portfolio" class="py-16 bg-gray-100">
    <div class="container mx-auto text-center">
      <h2 class="text-3xl font-bold">Our Portfolio</h2>
      <p class="mt-4 text-lg">Check out some of our recent projects.</p>
      <div class="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="bg-white p-6 rounded-lg shadow-md">
          <img src="project1.jpg" alt="Project 1" class="w-full h-48 object-cover rounded-lg" />
          <h3 class="text-xl font-semibold mt-4">Project One</h3>
        </div>
        <div class="bg-white p-6 rounded-lg shadow-md">
          <img src="project2.jpg" alt="Project 2" class="w-full h-48 object-cover rounded-lg" />
          <h3 class="text-xl font-semibold mt-4">Project Two</h3>
        </div>
        <div class="bg-white p-6 rounded-lg shadow-md">
          <img src="project3.jpg" alt="Project 3" class="w-full h-48 object-cover rounded-lg" />
          <h3 class="text-xl font-semibold mt-4">Project Three</h3>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'PortfolioPage',
}
</script>
