<script setup lang="ts">
import { Icon } from "@iconify/vue";
import { ref } from 'vue';

const currentYear = ref(new Date().getFullYear());
</script>

<template>
  <footer class="footer-container dark">
    <div class="footer">
      <div class="logo">
        <img class="logo__img" src="/images/white_logo.png" alt="company-logo">
      </div>
      <div class="links">
        <div class="links__column">
          <div class="links__column__header">
            Solutions
          </div>
          <div class="links__column__item">
            Marketing
          </div>
          <div class="links__column__item">
            Analytics
          </div>
          <div class="links__column__item">
            Automation
          </div>
          <div class="links__column__item">
            Commerce
          </div>
          <div class="links__column__item">
            Insights
          </div>
        </div>
        <div class="links__column">
          <div class="links__column__header">
            Support
          </div>
          <div class="links__column__item">
            Submit Ticket
          </div>
          <div class="links__column__item">
            Documentation
          </div>
          <div class="links__column__item">
            Guides
          </div>
        </div>
        <div class="links__column">
          <div class="links__column__header">
            Company
          </div>
          <div class="links__column__item">
            About
          </div>
          <div class="links__column__item">
            Blog
          </div>
          <div class="links__column__item">
            Jobs
          </div>
          <div class="links__column__item">
            Press
          </div>
        </div>
        <div class="links__column">
          <div class="links__column__header">
            Legal
          </div>
          <div class="links__column__item">
            Terms of Service
          </div>
          <div class="links__column__item">
            Privacy Policy
          </div>
          <div class="links__column__item">
            License
          </div>
        </div>
      </div>
      <div class="newsletter-container">
        <div class="text-container">
          <p class="text-container__title">Subscribe to our newsletter</p>
          <p class="text-container__subtitle">The latest news, articles, and resources, sent to your inbox weekly.</p>
        </div>
        <div class="cta-container">
          <input id="subscription_email" class="email_input" type="text" placeholder="Enter your email" />
          <button class="cta-container__subscribe">Subscribe</button>
        </div>

      </div>
      <div class="copyright-socials-container">
        <p>&copy; {{ currentYear }} Write Skew Labs LLP. All rights reserved.</p>
        <div class="icons-container">
          <a href="#" target="_blank" rel="noopener noreferrer">
            <Icon icon="line-md:facebook" class="symbol"/>
          </a>
          <a href="https://www.linkedin.com/company/write-skew-labs-llp" target="_blank" rel="noopener noreferrer">
            <Icon icon="line-md:linkedin" class="symbol"/>
          </a>
          <a href="https://www.instagram.com/writeskewlabs/" target="_blank" rel="noopener noreferrer">
            <Icon icon="line-md:instagram" class="symbol"/>
          </a>
          <a href="https://github.com/Write-Skew-Labs" target="_blank" rel="noopener noreferrer">
            <Icon icon="line-md:github" class="symbol"/>
          </a>
          <a href="https://x.com/WriteSkewLabs" target="_blank" rel="noopener noreferrer">
            <Icon icon="line-md:twitter-x" class="symbol"/>
          </a>
        </div>
      </div>
    </div>
  </footer>

</template>

<style scoped lang="scss">
// SCSS Variable because css custom properties are not
// supported in container queries
$footer-breakpoint: 768px;
$small-device-breakpoint: 576px;


@property --hero-padding-left {
  syntax: "<length>";
  inherits: true;
  initial-value: 4rem;
}

.footer-container {
  container-type: inline-size;
  --hero-padding-left: 4rem;
}

.footer {
  color: var(--gray-12);

  background-color: var(--blue-2);
  display: flex;
  flex-direction: column;
  padding-left: var(--hero-padding-left);
  padding-right: var(--hero-padding-left);
  padding-top: 3rem;

  @container (width <= #{$footer-breakpoint}) {
    --hero-padding-left: 2rem;
  }
}

.logo {
  width: 3.5rem;
  height: 3.5rem;
  margin-bottom: 3rem;
  &:hover {
    cursor: pointer;
  }
  &__img {
    width: 100%;
    height: 100%
  }
}



.links {
  display: grid;
  row-gap: 4rem;
  grid-template-areas: "a b c d";
  grid-template-columns: 1fr 1fr 1fr 1fr;
  padding-bottom: 3rem;
  border-bottom: thin solid var(--gray-7);
  margin-bottom: 2rem;
  &__column {
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
    &__header {
      color: var(--gray-12);
      font-weight: bold;
      margin-bottom: 0.7rem;
    }
    &__item {
      color: var(--gray-11);
    }
  }

  @container (width <= #{$footer-breakpoint}) {
    grid-template-areas: "a b"
                         "c d";
    grid-template-columns: 1fr 1fr;
    --hero-padding-left: 2rem;
  }
}

.newsletter-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 1.5rem;
  padding-bottom: 2rem;
  margin-bottom: 2rem;
  border-bottom: thin solid var(--gray-7);
}

.text-container {
  display: flex;
  gap: 0.8rem;
  flex-direction: column;

  &__title {
    color: var(--gray-12);
    font-weight: bold;
  }

  &__subtitle {
    color: var(--gray-11);
  }
}

.cta-container {
  display: flex;
  flex-wrap: wrap;
  gap: 1.2rem;

  //.email_input {
  //  max-height: 40px;
  //  padding-inline: .75rem;
  //  padding-block: .375rem;
  //  border-radius: .375rem;
  //  flex: 1 0 16rem;
  //  background-color: oklab(100% 0 0 / 0.05);
  //  font-size: .875rem;
  //  line-height: 1.5rem;
  //  border: none;
  //  outline: oklch(37.3% .034 259.733) solid 1px;
  //  outline-offset: calc(1px * -1);
  //  caret-color: var(--gray-12);
  //  color: var(--gray-12);
  //
  //  &:focus {
  //    outline: 2px solid oklch(58.5% .233 277.117);
  //  }
  //
  //  @container (width <= 350px) {
  //    flex-basis: auto;
  //  }
  //}

  &__subscribe {
    padding: 0.6em 1em;
    flex: 1 0 auto;
    justify-content: center;
  }
}

.copyright-socials-container {
  margin-bottom: 2rem;
  display: flex;
  gap: 1.5rem;
  justify-content: space-between;
  flex-wrap: wrap-reverse;
  @container (width <= #{$footer-breakpoint}) {
    p {
      width: 100%;
    }
  }
}

.icons-container {
  color: var(--gray-11);
  display: flex;
  align-items: center;
  gap: 1.5rem;
  .symbol {
    width: 1.5rem;
    height: 1.5rem;

    :hover {
      color: var(--gray-12);
      cursor: pointer;
    }
  }

  a {
    height: max-content;
    color: unset;
  }

  .twitter {
    width: 1.1rem;
    height: 1.1rem;
  }

  .instagram {
    width: 1.7rem;
    height: 1.7rem;
  }
}

</style>
