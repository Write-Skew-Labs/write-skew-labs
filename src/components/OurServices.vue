<script setup lang="ts">
import { Icon } from "@iconify/vue";

</script>

<template>
  <div class="our-services-container dark">
    <div class="our-services">
      <h6 class="our-services__tagline">BUILD SMARTER</h6>
      <h1 class="our-services__heading">
        Engineering the systems <br> your business will rely on tomorrow
      </h1>
      <p class="our-services__sub-heading">
        Write Skew Labs design and ships complex, production ready systems - from cloud native platforms to AI powered applications. We help teams move from idea to scalable, secure reality without losing speed or quality.
      </p>
      <div class="services">
        <div class="services__item">
          <Icon icon="mdi:code-json" class="service-logo"></Icon>
          <div class="service-description">
            <h2 class="service-description__heading">
              High-performance Web & APIs
            </h2>
            <p>
              From dashboards to customer-facing platforms, we build fast, accessible web apps and APIs that are easy to extend, monitor, and maintain — without sacrificing developer experience.
            </p>
          </div>
        </div>
        <div class="services__item">
          <Icon icon="streamline-ultimate:cloud-data-transfer-bold" class="service-logo"></Icon>
          <div class="service-description">
            <h2 class="service-description__heading">
              Cloud-native & DevOps
            </h2>
            <p>
              We architect resilient infrastructures on AWS, Azure, and GCP with CI/CD, observability, and automated scaling baked in. Stay always-on while your systems adapt to real-world load in real time.
            </p>
          </div>
        </div>
        <div class="services__item">
          <Icon icon="bi:database-up" class="service-logo"></Icon>
          <div class="service-description">
            <h2 class="service-description__heading">
              Data Platforms & AI Solutions
            </h2>
            <p>
              We design secure data pipelines, optimized databases, and AI workflows using ML, NLP, and analytics. Turn messy data into reliable insight, recommendations, and automation.
            </p>
          </div>
        </div>
        <div class="services__item">
          <Icon icon="si:ai-shield-line" class="service-logo"></Icon>
          <div class="service-description">
            <h2 class="service-description__heading">
              Scalable, Secure Architectures
            </h2>
            <p>
              We engineer distributed, fault-tolerant systems with strong security practices — from identity and access control to threat modeling and compliance guidance for growing teams.
            </p>
          </div>
        </div>
        <div class="services__item">
          <Icon icon="carbon:microservices-1" class="service-logo"></Icon>
          <div class="service-description">
            <h2 class="service-description__heading">
              System Modernization & Cloud Migration
            </h2>
            <p>
              We transform legacy systems into cloud-native, containerized, and scalable platforms using serverless models, and hybrid cloud architectures — ensuring minimal downtime and long-term maintainability.
            </p>
          </div>
        </div>
        <div class="services__item">
          <Icon icon="devicon-plain:opentelemetry" class="service-logo"></Icon>
          <div class="service-description">
            <h2 class="service-description__heading">
              Observability & Telemetry
            </h2>
            <p>
              We implement full-stack observability using metrics, logs, and traces to monitor system performance, understand behavior, detect anomalies, and gain real-time operational insights across distributed environments.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<style scoped lang="scss">
  $single-column-breakpoint: 768px;
  .our-services-container {
    container-type: inline-size;
    background-color: var(--gray-3);
    color: var(--gray-12);
  }

  .our-services {
    text-align: center;
    padding: 8rem 4rem;
    @container (width <= #{$single-column-breakpoint})  {
      padding: 3rem 2rem;
    }

    &__tagline {
      font-size: 0.8rem;
      letter-spacing: 3px;
      margin-bottom: 1rem;
    }

    &__heading {
      margin-bottom: 1.5rem;
      font-size: 2.8rem;
      line-height: 3.5rem;
      @container (width <= #{$single-column-breakpoint})  {
        font-size: 2.3rem;
        line-height: 2.8rem;
      }
    }

    &__sub-heading {
      max-width: 75ch;
      margin-left: auto;
      margin-right: auto;
      margin-bottom: 4rem;
      font-size: 1rem;
      word-spacing: 0.2rem;
      @container (width <= #{$single-column-breakpoint})  {
        margin-bottom: 2.5rem;
      }
    }
  }

  .services {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 350px));
    margin-left: auto;
    margin-right: auto;
    max-width: 1200px;
    text-align: left;
    justify-content: center;
    gap: 1rem 1rem;
    align-items: stretch;
    @container (width <= #{$single-column-breakpoint})  {
      grid-template-columns: repeat(auto-fill, minmax(0, 350px));
    }

    &__item {
      display: flex;
      position: relative;
      gap: 1rem;
      padding: 1.5rem;
      //background-color: var(--gray-5);
      color: var(--gray-12);
      border-radius: 0.375rem;
    }
  }

  .service-description {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .service-logo {
    font-size: 2.5rem;
    position: relative;
    top: 6px;
    flex-shrink: 0;
  }
</style>
