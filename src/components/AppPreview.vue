<script setup>
import { useToast } from 'vue-toastification';

const toast = useToast();

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  subtitle: {
    type: String,
    required: true
  }
});

const copyToClipboard = () => {
  toast.success('Peer ID copy to clipboard');
  return props.subtitle;
};
</script>

<template>
  <div class="greetings">
    <h1 class="green !font-semibold">
      {{ title }}
      <p class="text-xs text-gray-500 uppercase cursor-pointer">
        <span class="text-gray-500">PEER ID:</span>
        &nbsp;
        <span v-clipboard="copyToClipboard" v-tooltip.bottom="'Copy to clipboard'">
          {{ subtitle }}
        </span>
      </p>
    </h1>

    <h3>
      <slot />
    </h3>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
