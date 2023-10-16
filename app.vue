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
  <div class="max-w-full min-h-screen">
    <section>
      <h1 class="text-3xl underline text-white/80">Select:</h1>
      <div class="max-w-xs mx-auto">
        <UISelect
          v-bind="selected"
          label="name"
          value-key="code"
          :options="options"
        />
      </div>
    </section>
    <section class="mx-8">
      <h1 class="text-3xl underline mb-4">Button:</h1>
      <div class="flex gap-3">
        <UIButton>Click here</UIButton>
        <UIButton variant="outline">Click here</UIButton>
        <UIButton variant="link">Click here</UIButton>
        <UIButton variant="outline" loading>Click here</UIButton>
        <UIButton disabled>Click here</UIButton>
        <UIButton variant="outline" disabled>Click here</UIButton>
        <UIButton icon="i-ph-wind-bold" variant="link">Add</UIButton>
      </div>
    </section>
  </div>
</template>

<style>
:root {
  --ui-btn-text: white;
  --ui-btn-primary: #0000ff;
  --ui-btn-rounded: 8px;
}
</style>
