<script setup>
import { mdiAlertCircleOutline } from '@mdi/js';
import AppPageItem from '@/components/AppPageItem.vue';
</script>

<template>
  <div class=""></div>

  <AppPageItem>
    <template #icon>
      <mdi-icon :icon="mdiAlertCircleOutline"></mdi-icon>
    </template>

    <div class="flex flex-col h-96 w-full items-center place-content-center">
      <h1 class="text-white text-6xl font-bold mb-2">Not Found</h1>
      <span class="text-surface-500 mb-8"> Requested resource is not available </span>
      <div class="uppercase font-semibold text-primary-600 hover:text-primary-500">
        <i class="pi pi-home mr-2"></i>
        <RouterLink :to="{ name: 'home' }"> Back to home page </RouterLink>
      </div>
    </div>
  </AppPageItem>

  <div class=""></div>
</template>
