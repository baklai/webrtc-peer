<script setup>
import {
  mdiMessageTextOutline,
  mdiMessageVideo,
  mdiRemoteDesktop,
  mdiInformationOutline,
  mdiBookOpenVariant
} from '@mdi/js';

import AppPageItem from '@/components/AppPageItem.vue';
</script>

<template>
  <AppPageItem>
    <template #icon>
      <mdi-icon :icon="mdiMessageTextOutline"></mdi-icon>
    </template>
    <template #heading>Text Chat</template>

    A text-based chat using
    <a href="https://webrtc.org/" target="_blank" rel="noopener">WebRTC</a> is a messaging
    application that leverages WebRTC technology to establish direct
    <a href="https://en.wikipedia.org/wiki/Peer-to-peer/" target="_blank" rel="noopener">P2P</a>
    connections between users. WebRTC ensures secure real-time data transmission without the need
    for intermediary servers.
  </AppPageItem>

  <AppPageItem>
    <template #icon>
      <mdi-icon :icon="mdiMessageVideo"></mdi-icon>
    </template>
    <template #heading>Video Chat</template>

    A video chat using <a href="https://webrtc.org/" target="_blank" rel="noopener">WebRTC</a> is a
    video communication application that utilizes WebRTC technology to establish direct
    <a href="https://en.wikipedia.org/wiki/Peer-to-peer/" target="_blank" rel="noopener">P2P</a>
    video connections between users. WebRTC enables real-time transmission of audio and video data
    without relying on third-party servers, ensuring high speed and quality of communication.
  </AppPageItem>

  <AppPageItem>
    <template #icon>
      <mdi-icon :icon="mdiRemoteDesktop"></mdi-icon>
    </template>
    <template #heading>Remote Desktop</template>

    A WebRTC-based remote desktop is an application for remote computer access that uses WebRTC
    technology to transmit video and control in real-time over
    <a href="https://en.wikipedia.org/wiki/Peer-to-peer/" target="_blank" rel="noopener">P2P</a>
    connections. <a href="https://webrtc.org/" target="_blank" rel="noopener">WebRTC</a> ensures
    secure and fast data transmission without the need for intermediary servers.
  </AppPageItem>

  <AppPageItem>
    <template #icon>
      <mdi-icon :icon="mdiInformationOutline"></mdi-icon>
    </template>
    <template #heading>About client</template>

    Our application utilizes advanced
    <a href="https://webrtc.org/" target="_blank" rel="noopener">WebRTC</a> (Web Real-Time
    Communication) technology, which allows users to establish direct P2P connections for real-time
    data transfer. <a href="https://webrtc.org/" target="_blank" rel="noopener">WebRTC</a> ensures
    secure and stable communication without the need for centralized servers, reducing latency and
    enhancing interaction quality.
  </AppPageItem>

  <AppPageItem>
    <template #icon>
      <mdi-icon :icon="mdiBookOpenVariant"></mdi-icon>
    </template>
    <template #heading>Documentation</template>

    WebRTC
    <a href="https://webrtc.org/" target="_blank" rel="noopener">official documentation</a> provides
    you with all information you need to understand the technology.
  </AppPageItem>
</template>
