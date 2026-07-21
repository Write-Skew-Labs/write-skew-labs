<script setup lang="ts">
import { Icon } from "@iconify/vue";
import { Label } from 'reka-ui'



</script>

<template>
  <div class="contact-us-container dark">
    <div class="contact-info">
      <h1 class="contact-info__heading">Get in touch</h1>
      <p class="contact-info__subheading">Have a complex challenge or an idea worth exploring? Our team of engineers and consultants are ready to help you design, build, and scale it right.</p>
      <div class="contact-medium-container">
        <div class="contact-medium">
          <Icon icon="ri:building-line" class="symbol"/>
          <p>C-19A Rajeev Nagar,<br> Street No. 11, New Delhi - 110086</p>
        </div>
        <div class="contact-medium">
          <Icon icon="ic:round-phone" class="symbol"/>
          <p>+91-9136066636</p>
        </div>
        <div class="contact-medium">
          <Icon icon="material-symbols:mail-outline-rounded" class="symbol"/>
          <p>hello@writeskewlabs.com</p>
        </div>
      </div>

    </div>
    <form class="form">
      <div class="form__row">
        <div class="form__field">
          <Label
            for="first-name"
            class="form__field__label"
          > First name </Label>
          <input id="first-name" type="text" name="first_name" />
        </div>
        <div class="form__field">
          <Label
            for="first-name"
            class="form__field__label"
          > Last name </Label>
          <input id="last-name" type="text" name="last_name" />
        </div>
      </div>

      <div class="form__field">
        <Label
          for="email"
          class="form__field__label"
        > Email </Label>
        <input id="email" type="email" name="email" />
      </div>

      <div class="form__field">
        <Label
          for="phone"
          class="form__field__label"
        > Phone number </Label>
        <input id="phone" type="tel" name="phone" />
      </div>

      <div class="form__field">
        <Label
          for="message"
          class="form__field__label"
        > Message </Label>
        <textarea id="phone" type="tel" name="message" ></textarea>
      </div>

      <div class="form__actions">
        <button type="submit">Send message</button>
      </div>

    </form>
  </div>
</template>

<style scoped lang="scss">
  $small-device-breakpoint: 576px;
  $single-column-breakpoint: 768px;

  .contact-us-container {
    display: flex;
    flex-wrap: wrap;
    container-type: inline-size;

    > * {
      flex-basis: 50%;
      padding: 8rem 2rem;
      @container (width <= #{$single-column-breakpoint})  {
        flex-basis: 100%;
        padding: 3rem 2rem;
      }
    }
  }

  .contact-info {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    border-right: 1px solid var(--gray-7);
    font-size: 1.1rem;
    line-height: 2rem;
    background: radial-gradient(
        circle at top right,
        var(--blue-3),
        transparent 60%
    ),
    linear-gradient(
        to bottom right,
        #0f172a,
        #111827,
        #0f172a
    );
    @container (width <= #{$single-column-breakpoint})  {
      font-size: 1rem;
    }

    &__heading {
      font-size: 2.8rem;
      color: var(--gray-12);

      @container (width <= #{$single-column-breakpoint})  {
        font-size: 2.3rem;
      }
    }

    &__subheading {
      color: var(--gray-11);
    }
  }

  .contact-medium-container {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    color: var(--gray-12);
  }
  .contact-medium {
    display: flex;
    align-items: center;
    font-size: 1rem;
    gap: 0.9rem;
    @container (width <= #{$single-column-breakpoint})  {
      font-size: 0.9rem;
    }

    .symbol {
      font-size: 1.5rem;
    }
  }

  .form {
    container-type: inline-size;
    display: flex;
    flex-direction: column;
    gap: 1.4rem;
    background-color: var(--blue-2);
    &__row {
      display: flex;
      flex-wrap: wrap;
      gap: 2rem;

      > * {
        flex: 1 1 calc(50% - 1rem);
        min-width: 0;

        @container (width <= #{$small-device-breakpoint})  {
          flex-basis: 100%;
        }
      }


    }

    &__field {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;

      &__label {
        font-weight: bold;
        color: var(--gray-12);
      }

      textarea {
        min-height: 180px;
        resize: vertical;
      }
    }

    &__actions {
      width: 100%;
      display: flex;
      justify-content: flex-end;
    }
  }


</style>
