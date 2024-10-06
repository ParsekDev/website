<script setup lang="ts">
  import { computed } from 'vue'
  import LearningPathsItem from './LearningPathsItem.vue'

  interface Props {
    size?: 'small' | 'medium'
    learningPaths: []
  }

  const props = withDefaults(defineProps<Props>(), {
    size: 'medium'
  })

  const classes = computed(() => [props.size, `count-${props.learningPaths.length}`])
</script>

<template>
  <div class="vt-box-container next-steps">
    <LearningPathsItem :size="size" :learningPath="learningPath" v-for="learningPath in learningPaths" :key="learningPath.text" />
  </div>
</template>

<style scoped>
  .vt-box-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
</style>
