<script setup>
import { ref, onMounted } from 'vue';
import { RouterLink, RouterView } from 'vue-router';
import AppPreview from '@/components/AppPreview.vue';

import { useWebRTCStore } from '@/stores/webrtc';

const disabledSelectedFromHTML = ref({
  '-webkit-user-select': 'none',
  '-moz-user-select': 'none',
  '-ms-user-select': 'none',
  '-o-user-select': 'none',
  'user-select': 'none'
});

const webrtc = useWebRTCStore();

onMounted(() => {
  webrtc.initialize();
});
</script>

<template>
  <header class="leading-normal max-h-screen">
    <img
      alt="Peer logo"
      class="block mx-auto mt-0 mb-8 lg:my-0 lg:mr-8"
      src="@/assets/logo.png"
      width="125"
      height="125"
    />

    <div class="wrapper">
      <AppPreview title="WebRTC Peer" :subtitle="webrtc.peerId">
        WebRTC is a technology that allows peer devices to directly exchange data without the need
        for a central server.
      </AppPreview>

      <nav class="w-full text-xs text-center mt-8">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/chat">Chat</RouterLink>
        <RouterLink to="/video">Video</RouterLink>
        <RouterLink to="/remote">Remote</RouterLink>
      </nav>
    </div>
  </header>

  <main>
    <RouterView />
  </main>
</template>

<style scoped>
nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
