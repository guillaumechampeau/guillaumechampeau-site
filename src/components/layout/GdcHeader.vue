<template>
  <div class="gdc-container absolute pt-[70px]">
    <img :src="LogoIcon" alt="gdc logo">
  </div>
</template>

<script setup lang="ts">
import LogoIcon from "@/assets/icons/logo.svg";
</script>

<script lang="ts">
export default {
  name: 'GdcHeader',
};
</script>
