<template>
  <section id="contact" class="py-16 bg-gray-900 text-white">
    <div class="container mx-auto text-center">
      <h2 class="text-3xl font-bold">Contact Us</h2>
      <p class="mt-4 text-lg">We would love to hear from you. Send us a message and we’ll respond as soon as possible.</p>
      <form class="mt-8">
        <input type="text" placeholder="Your Name" class="block w-full p-4 mb-4 rounded-lg bg-gray-800 border border-gray-600" />
        <input type="email" placeholder="Your Email" class="block w-full p-4 mb-4 rounded-lg bg-gray-800 border border-gray-600" />
        <textarea placeholder="Your Message" class="block w-full p-4 mb-4 rounded-lg bg-gray-800 border border-gray-600"></textarea>
        <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Send Message
        </button>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ContactPage',
}
</script>
