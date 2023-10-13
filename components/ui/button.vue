<script lang="ts" setup>
import clsx from 'clsx';

type Props = {
  type?: 'submit' | 'button';
  class?: string;
  icon?: string;
  disabled?: boolean;
  loading?: boolean;
  trailing?: boolean;
  variant?: 'solid' | 'outline' | 'link';
};

type Emits = {
  (e: 'click'): void;
};

const $ref = ref(null);

const props = withDefaults(defineProps<Props>(), {
  type: 'button',
  variant: 'solid',
  trailing: false,
});

const className = clsx('ui-btn', props.class, {
  'ui-btn--solid': props.variant === 'solid',
  'ui-btn--outline': props.variant === 'outline',
  'ui-btn--link': props.variant === 'link',
});

defineEmits<Emits>();
defineExpose({
  $ref,
});
</script>

<template>
  <button
    :type="type"
    :class="className"
    @click.prevent="$emit('click')"
    :disabled="disabled"
    ref="$ref"
  >
    <div :class="clsx(icon, 'mr-2')" v-if="icon && !trailing && !loading" />
    <UILoader v-if="loading" />
    <slot v-else />

    <div :class="clsx(icon, 'ml-2')" v-if="icon && trailing && !loading" />
  </button>
</template>

<style>
:root {
  --ui-btn-primary: #ff0000;
  --ui-btn-text: #f2f2f2;
  --ui-btn-rounded: 8px;
  --ui-btn-width: 8rem;
}

.ui-btn {
  @apply w-[var(--ui-btn-width)] text-[var(--ui-btn-text)] font-bold py-2 inline-flex items-center justify-center text-base border-transparent rounded-[var(--ui-btn-rounded)] bg-[var(--ui-btn-primary)] transition ease cursor-pointer hover:opacity-80 active:(bg-opacity-80) disabled:(opacity-60 cursor-not-allowed);
}

.ui-btn--outline {
  @apply border !bg-transparent border-[var(--ui-btn-primary)] text-[var(--ui-btn-primary)] hover:( !bg-[var(--ui-btn-primary)] !border-transparent !text-white);
}

.ui-btn--link {
  @apply !bg-transparent text-[var(--ui-btn-primary)] hover:(underline text-[var(--ui-btn-primary)]/80);
}
</style>
