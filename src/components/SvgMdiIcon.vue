<script setup>
import SvgIcon from '@jamescoyle/vue-icon';

const props = defineProps({
  icon: {
    type: String,
    required: true
  }
});
</script>

<template>
  <svg-icon type="mdi" :path="icon"></svg-icon>
</template>
