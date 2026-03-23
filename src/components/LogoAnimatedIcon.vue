<script setup lang="ts">
import { getWindow } from "../helpers/getWindow.js";
import {computed} from "vue";

const { icon } = defineProps({
  icon: {
    type: Object,
    required: true,
  },
});

const { windowWidth } = getWindow();

// const motionBlurCount = computed(() => windowWidth.value > 640 ? 12 : 8)
const motionBlurCount = 0

</script>

<template>
  <img :src="icon.name" alt="d icon" :class="icon.animation">
  <template v-if="icon.motionBlur !== false">
    <img v-for="i in motionBlurCount"
         :key="icon.name + i"
         :class="`gdelay-${i + 1} ${icon.animation}`"
         :src="icon.name"
         :alt="`${icon.name} icon`"
         class="opacity-5"
    >
  </template>

</template>

<style scoped lang="scss">

</style>