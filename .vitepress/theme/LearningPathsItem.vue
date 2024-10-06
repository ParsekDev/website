<script setup lang="ts">
  interface Props {
    size?: "small" | "medium"
    learningPath: {
      title: ""
      text: ""
      link: ""
      target: ""
    }
  }

  withDefaults(defineProps<Props>(), {
    size: "medium"
  })
</script>

<template>
  <a class="vt-box" :href="learningPath.link">
    <p class="next-steps-link">{{ learningPath.title }}</p>
    <p class="next-steps-caption">{{ learningPath.text }}</p>
  </a>
</template>

<style scoped>
  .vt-box-container .vt-box {
    background-color: var(--vp-c-bg-soft);
    transition: color 0.5s, background-color 0.5s;
    padding: 28px 36px;
    border-radius: 8px;
    flex: 0 32%; /* default 3 column */
    font-size: 14px;
    font-weight: 500;
  }

  @media (max-width: 768px) {
    .vt-box-container .vt-box {
      flex: 0 100%;
      margin-bottom: 20px;
    }
  }
</style>
