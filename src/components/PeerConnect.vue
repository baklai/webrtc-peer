<script setup>
import { ref } from 'vue';
import imgPreview from '@/assets/preview.svg';
import { useWebRTCStore } from '@/stores/webrtc';

const webrtc = useWebRTCStore();

const peerID = ref(null);

const connectToPeer = () => {
  if (peerID.value) {
    webrtc.connectToPeer(peerID.value);
  }
};
</script>

<template>
  <form
    class="flex flex-col justify-center mx-auto w-full md:max-w-80 space-y-6"
    @submit.prevent="connectToPeer"
  >
    <div class="flex flex-col justify-center">
      <img :src="imgPreview" alt="Preview" width="300" height="300" class="m-auto" />

      <p class="m-auto text-center">Enter peer ID and connect to Peer or wait connect from Peer</p>
    </div>

    <div class="relative flex items-center">
      <input
        required
        type="text"
        v-model="peerID"
        class="focus:outline-none w-full text-sm text-gray-800 border border-gray-300 px-4 py-2 rounded-lg"
        placeholder="Enter Peer ID"
      />
    </div>

    <div class="text-center">
      <button
        type="submit"
        class="w-full py-2 px-4 rounded-lg text-white bg-primary-50 hover:bg-primary-100 focus:outline-none"
      >
        Connect to Peer
      </button>
    </div>
  </form>
</template>
