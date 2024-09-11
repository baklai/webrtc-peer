<script setup>
import { ref } from 'vue';
import { mdiRemoteDesktop } from '@mdi/js';
import { useWebRTCStore } from '@/stores/webrtc';

import AppPageItem from '@/components/AppPageItem.vue';
import PeerConnect from '@/components/PeerConnect.vue';

const webrtc = useWebRTCStore();
</script>

<template>
  <div class=""></div>

  <AppPageItem>
    <template #icon>
      <mdi-icon :icon="mdiRemoteDesktop"></mdi-icon>
    </template>

    <template #heading>
      <div class="flex flex-row font-bold" v-if="webrtc.isConnect">
        <mdi-icon :icon="mdiRemoteDesktop" class="w-10 h-10 mr-2"></mdi-icon>
        <div>
          <p class="text-xl font-bold">Remote Desktop</p>
        </div>
      </div>
    </template>

    <div class="flex justify-center items-center w-full">
      <div
        class="flex flex-col justify-center w-full h-96 border border-black-soft rounded-lg py-2 px-4 gap-y-4"
        v-if="isConnect"
      >
        <div class="flex-grow overflow-hidden overflow-y-auto">
          <div class="flex flex-col mb-4 gap-4 py-4 px-2"></div>
        </div>

        <div class="flex justify-center items-center w-full h-14"></div>
      </div>

      <div class="flex flex-col justify-center items-center h-full" v-else>
        <PeerConnect />
      </div>
    </div>
  </AppPageItem>

  <div class=""></div>
</template>
