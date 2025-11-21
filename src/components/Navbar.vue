<script setup lang="ts">

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
  </nav>
</template>

<style scoped lang="scss">



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

  }
}
</style>
