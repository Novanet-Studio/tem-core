<script setup lang="ts">
const selected = ref('');

const options = [
  {
    name: 'Option 1',
    code: 'option1',
  },
  {
    name: 'Option 2',
    code: 'option1',
  },
];
</script>

<template>
  <div class="max-w-full min-h-screen bg-dark">
    <h1 class="text-3xl underline text-white/80">Select:</h1>
    <div class="max-w-xs mx-auto">
      <AppSelect
        v-bind="selected"
        label="name"
        value-key="code"
        :options="options"
      />
    </div>
  </div>
</template>
