<script setup lang="ts">
defineProps<{ border?: string; size?: string }>();
</script>

<template>
  <div
    class="ui-loader inline-block h-[var(--ui-loader-size)] w-[var(--ui-loader-size)] animate-spin rounded-full border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
    role="status"
    :style="{
      '--ui-loader-size': size || '1.5rem',
      '--ui-loader-border': (border && `${border}px`) || '2px',
      borderWidth: 'var(--ui-loader-border)',
    }"
  >
    <span
      class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
      >Loading...</span
    >
  </div>
</template>
