<script setup>
import { ref } from 'vue';
import { mdiDotsVertical } from '@mdi/js';

const props = defineProps({
  items: {
    type: Array,
    required: true,
    default: () => []
  }
});

const isOpen = ref(false);

const toggleMenu = () => {
  isOpen.value = !isOpen.value;
};

const onItemClick = action => {
  if (typeof action === 'function') {
    action();
  }
  isOpen.value = !isOpen.value;
};
</script>

<template>
  <div class="relative inline-block text-left">
    <button
      class="flex justify-center p-2 rounded-full text-white hover:bg-primary-50 focus:outline-none"
      @click="toggleMenu"
    >
      <mdi-icon :icon="mdiDotsVertical"></mdi-icon>
    </button>

    <div
      class="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
      role="menu"
      v-if="isOpen"
    >
      <div class="py-2" role="none">
        <div v-for="(item, index) in items" :key="index">
          <button
            v-if="!item?.separator"
            class="flex text-gray-700 w-full px-4 py-2 text-sm hover:bg-primary-50"
            role="menuitem"
            @click="onItemClick(item.action)"
          >
            <mdi-icon :icon="item.icon" v-if="item.icon" class="h-full mr-2"></mdi-icon>
            <span> {{ item.label }} </span>
          </button>
          <hr class="my-2" v-else />
        </div>
      </div>
    </div>
  </div>
</template>
