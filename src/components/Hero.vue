<script setup lang="ts">

import Navbar from '@/components/Navbar.vue'
</script>

<template>
  <section class="hero-container">
    <div class="hero dark">
      <div class="hero__left">
        <Navbar class="navbar"></Navbar>
        <div class="hero__content">
          <h1 class="hero__title">Write once, right always</h1>
          <p class="hero__subtitle">
            Write Skew Labs — ensuring consistency across code, data, and design.
          </p>
          <div class="hero__cta-container">
            <button class="hero__cta__contact-us">Contact Us</button>
            <button class="hero__cta__secondary">
              Our Services
            </button>
          </div>
        </div>
      </div>
      <div class="hero__image"></div>
    </div>
  </section>
</template>

<style scoped lang="scss">
  // SCSS Variable because css custom properties are not
  // supported in container queries
  $single-column-breakpoint: 768px;
  $small-device-breakpoint: 576px;

  @property --hero-height {
    syntax: "<length>";
    inherits: false;
    initial-value: 100vh;
  }

  @property --hero-padding-left {
    syntax: "<length>";
    inherits: true;
    initial-value: 4rem;
  }

  .hero-container {
    container-type: inline-size;
  }

  .hero {
    --hero-padding-left: 4rem;
    display: grid;
    grid-template-rows: auto 1fr;
    grid-template-columns: 1fr 1fr; /* content | image */
    height: 100vh;
    background-color: var(--blue-2);
    color: var(--gray-12);
    position: relative;

    @container (width <= #{$single-column-breakpoint}) {
      grid-template-columns: 1fr; /* content | image */
      --hero-padding-left: 2rem;
    }



    .navbar {
      padding-left: var(--hero-padding-left);
      grid-column: 1 / -1;   /* full width across both columns */
      grid-row: 1;
      //position: sticky;      /* sticks to top on scroll */
      top: 0;
      z-index: 10;           /* above hero image */
    }

    &__left {
      grid-column: 1;        /* left column */
      grid-row: 2;           /* second row */
      display: grid;
      grid-template-rows: auto 1fr;
      z-index: 2;
    }

    &__content {
      display: flex;
      justify-content: center;
      flex-direction: column;
      padding: 3rem var(--hero-padding-left);
      @container (width <= #{$single-column-breakpoint}) {
        align-items: center;
        text-align: center;
      }
    }

    &__title {
      font-size: 4rem;
      font-weight: bolder;
      line-height: 1.3;
      margin-bottom: 1.5rem;
      @container (width <= #{$small-device-breakpoint}) {
        font-size: 3rem;
      }
    }

    &__subtitle {
      font-size: 1.125rem;
      font-weight: bold;
      margin-bottom: 2rem;
      max-width: 32rem;
      line-height: 1.7;
      color: var(--gray-11);
      @container (width <= #{$small-device-breakpoint}) {
        font-size: 1rem;
      }
    }

    &__cta-container {
      display: flex;
      gap: 2.5rem;
      @container (width <= #{$small-device-breakpoint}) {
        font-size: 0.8rem;
      }
    }

    &__cta__secondary {
      background-color: unset;
      padding: unset;
      @container (width <= #{$small-device-breakpoint}) {
        font-size: 0.8rem;
      }
    }

    &__image {
      grid-column: 2;        /* right column */
      grid-row: 2;
      position: relative;
      overflow: hidden;      /* keep the overflow here, NOT on .hero */
      height: 100%;
    }

    &__image::before {
      content: "";
      position: absolute;
      inset: 0;
      background: url('./hero_250_kb.webp') right center/cover no-repeat; /* image path */
      clip-path: polygon(30% 0, 100% 0, 100% 100%, 10% 100%);

      @container (width <= 1024px) {
        background-position: 60% center;
      }

      @container (width <= 768px) {
        display:none;
      }
    }
  }
</style>
