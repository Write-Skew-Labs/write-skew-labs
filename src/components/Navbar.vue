<script setup lang="ts">

import { Icon } from '@iconify/vue'
import ScrollLink from '@/components/ScrollLink.vue'
</script>

<template>
  <nav class="navbar dark">
    <div class="navbar__logo">
      <img class="navbar__img" src="/images/white_logo.png" alt="company-logo">
    </div>
    <ul class="navbar__links">
      <li tabindex="0" class="navbar__links__item">About</li>
      <li tabindex="0" class="navbar__links__item">Services</li>
      <li tabindex="0" class="navbar__links__item">Portfolio</li>
      <li tabindex="0" class="navbar__links__item">Blog</li>
      <li tabindex="0" class="navbar__links__item">Career</li>
    </ul>
    <button class="navbar__menu-btn">
      <Icon icon="material-symbols:menu" class="symbol"/>
    </button>

  </nav>
<!--  <div class="dropdown-menu-container" ref="menuContainer">-->
<!--    <nav class="dropdown-menu-links" ref="itemContainer">-->
<!--      <div class="action-btn-container">-->
<!--        <Button-->
<!--          class="action-btn-container__donate-btn"-->
<!--          label="Donate"-->
<!--          icon="pi pi-heart-fill"-->
<!--          :pt="{ root: 'action-btn-container__donate-btn' }"-->
<!--          @click="onDonateClick()"-->
<!--        />-->
<!--      </div>-->
<!--      <hr>-->
<!--      <Button class="nav-link" label="Who we are" link />-->
<!--      <hr>-->
<!--      <RouterLink to="/what-we-do" class="router-link-no-underline">-->
<!--        <Button class="nav-link" label="What we do" link />-->
<!--      </RouterLink>-->
<!--      <hr>-->
<!--      <Button class="nav-link" label="Our Works" link />-->
<!--      <hr>-->
<!--      <Button class="nav-link" label="Our Values" link />-->
<!--      <hr>-->
<!--    </nav>-->
<!--  </div>-->
</template>

<style scoped lang="scss">
$single-column-breakpoint: 768px;


.navbar {
  display: flex;
  gap: 2rem;
  align-items: center;
  padding-top: 1rem;
  padding-bottom: 1rem;
  color: var(--gray-12);

  &__logo {
    width: 3.5rem;
    height: 3.5rem;
    &:hover {
      cursor: pointer;
    }
  }

  &__img {
    width: 100%;
    height: 100%
  }

  &__links {
    flex: 1 0 auto;
    display: flex;
    gap: 2rem;
    list-style-type: none;
    &__item {
      padding: 0.25rem 0.5rem;
      &:hover {
        text-decoration: underline;
        cursor: pointer;
      }
    }
    @container (width <= #{$single-column-breakpoint}) {
      display: none;
    }
  }

  &__menu-btn {
    display: none;
    color: var(--gray-12);
    padding: 0.75em 1em;
    @container (width <= #{$single-column-breakpoint}) {
      display: flex;
      margin-left: auto;
      margin-right: 2rem;
    }
  }

  //Todo

  .dropdown-menu-container {
    height: 0;
    overflow: hidden;
    transition: all 0.3s ease;
    position: sticky;
    top: 72px;
    z-index: 1099;
    background-color: white;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;

    nav {
      display: flex;
      flex-direction: column;
      gap: 2px;
      padding-top: 1rem;
      padding-bottom: 2rem;

      .action-btn-container {
        display: flex;
        justify-content: center;

        &__donate-btn {
          height: 2.5rem;
          width: 85%;
        }

        margin-bottom: 1rem;
      }

      .nav-link {
        font-size: 0.9rem;
        display: flex;
        justify-content: left;
        padding-left: 2rem;
      }

      hr {
        border: none;
        height: 1px;
        background-color: #e8e8e8;
      }
    }

    @media (min-width: 992px) {
      display: none;
    }
  }
}
</style>
