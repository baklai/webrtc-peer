<script setup>
import { ref, computed } from 'vue';
import {
  mdiChatRemoveOutline,
  mdiExitToApp,
  mdiMessageTextOutline,
  mdiEmailFastOutline
} from '@mdi/js';
import { useWebRTCStore } from '@/stores/webrtc';
import AppPageItem from '@/components/AppPageItem.vue';
import PeerConnect from '@/components/PeerConnect.vue';
import PopupMenu from '@/components/PopupMenu.vue';

import { dateTimeToStr } from '@/utils/index';

const webrtc = useWebRTCStore();

const message = ref();

const menuItems = [
  {
    icon: mdiChatRemoveOutline,
    label: 'Remove messages',
    action: () => {
      webrtc.clearMessages();
    }
  },
  { separator: true },
  {
    icon: mdiExitToApp,
    label: 'Exit from chat',
    action: () => {
      webrtc.desconnectFromPeer();
    }
  }
];

const isConnect = computed(() => {
  return webrtc.connect;
});

const sendMessage = () => {
  if (message.value) {
    webrtc.sendMessage(message.value);
    message.value = '';
  }
};
</script>

<template>
  <div class=""></div>

  <AppPageItem>
    <template #icon>
      <mdi-icon :icon="mdiMessageTextOutline"></mdi-icon>
    </template>

    <template #heading>
      <div class="flex justify-between" v-if="isConnect">
        <div class="flex justify-center text-white">
          <mdi-icon :icon="mdiMessageTextOutline" class="h-full mr-2"></mdi-icon>
          <h3 class="text-xl font-bold">Text Chat</h3>
        </div>
        <PopupMenu :items="menuItems" />
      </div>
    </template>

    <div class="flex justify-center items-center w-full">
      <div
        class="flex flex-col justify-center w-full h-96 border border-black-soft rounded-lg py-2 px-4 gap-y-4"
        v-if="isConnect"
      >
        <div class="flex-grow overflow-hidden overflow-y-auto">
          <div class="flex flex-col mb-4 gap-4 py-4 px-2">
            <div
              :class="[
                'flex',
                { 'justify-start': msg.type === 'in' },
                { 'justify-end': msg.type === 'out' }
              ]"
              v-for="(msg, idx) in webrtc.messages"
              :key="idx"
            >
              <div class="flex flex-col justify-start" v-if="msg.type === 'in'">
                <div class="bg-gray-100 rounded-lg px-4 py-2 max-w-40 md:max-w-80">
                  <span class="text-gray-900 text-sm break-words">{{ msg.message }}</span>
                </div>
                <small class="text-gray-500">{{ dateTimeToStr(msg.datetime) }}</small>
              </div>
              <div class="flex flex-col justify-end" v-else>
                <div class="bg-green-500 rounded-lg px-4 py-2 max-w-40 md:max-w-80">
                  <span class="text-white text-sm break-words">{{ msg.message }}</span>
                </div>
                <small class="text-gray-500 text-end">{{ dateTimeToStr(msg.datetime) }}</small>
              </div>
            </div>
          </div>
        </div>

        <div class="flex justify-center items-center w-full h-14">
          <input
            type="text"
            v-model="message"
            @keydown.enter="sendMessage"
            class="outline-none bg-transparent text-white border border-black-soft rounded-lg py-2 px-4 w-full mr-4"
            placeholder="Type a message..."
          />
          <button
            class="flex items-center justify-center bg-primary-300 hover:bg-primary-50 text-white font-bold py-2 px-4 rounded"
            @click="sendMessage"
          >
            <mdi-icon :icon="mdiEmailFastOutline" class="w-5 h-5 mr-2"></mdi-icon>
            <IconSendMessage />
            <span>Send</span>
          </button>
        </div>
      </div>

      <div class="flex flex-col justify-center items-center h-full" v-else>
        <PeerConnect />
      </div>
    </div>
  </AppPageItem>

  <div class=""></div>
</template>
