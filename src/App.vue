<script setup lang="ts">
import Hero from '@/components/Hero.vue'
import Footer from '@/components/Footer.vue'
import ContactUs from '@/components/ContactUs.vue'
import OurServices from '@/components/OurServices.vue'
</script>

<template>
  <Hero></Hero>
  <OurServices id="our-services"></OurServices>
  <ContactUs id="contact-us"></ContactUs>
  <Footer></Footer>
</template>

<style scoped>
@font-face {
  font-family: "OpenSauce";
  src: url('/fonts/OpenSauceTwo-Regular.ttf') format("truetype");
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: "OpenSauce";
  src: url('/fonts/OpenSauceTwo-Bold.ttf') format("truetype");
  font-weight: bold;
  font-style: normal;
}

@font-face {
  font-family: "OpenSauce";
  src: url('/fonts/OpenSauceTwo-Italic.ttf') format("truetype");
  font-weight: normal;
  font-style: italic;
}
</style>
