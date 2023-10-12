<script setup lang="ts">
defineProps({
  name: String,
  lastName: String,
  age: Number,
});
</script>

<template>
  <EHtml>
    <EHead />
    <EPreview>Test email</EPreview>
    <EBody>
      <h1>{{ name }} {{ lastName }}</h1>
      <p>Age: {{ age }}</p>
    </EBody>
  </EHtml>
</template>
