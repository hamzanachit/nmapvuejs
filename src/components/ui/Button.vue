<template>
  <component
    :is="as"
    :class="cn(
      'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0',
      variantClasses,
      sizeClasses,
      className
    )"
    v-bind="$attrs"
    @click="$emit('click', $event)"
  >
    <slot />
  </component>
</template>

<script setup>
import { computed } from "vue";
import { cn } from "../../lib/utils";

const props = defineProps({
  as: {
    type: [String, Object],
    default: "button"
  },
  variant: { type: String, default: "default" },
  size: { type: String, default: "default" },
  className: String,
});

defineEmits(["click"]);

const variantClasses = computed(() => {
  const variants = {
    default: "bg-primary text-primary-foreground hover:bg-primary/90",
    destructive: "bg-destructive text-white hover:bg-destructive/90",
    outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
    ghost: "hover:bg-accent hover:text-accent-foreground",
    link: "text-primary underline-offset-4 hover:underline",
  };
  return variants[props.variant] || variants.default;
});

const sizeClasses = computed(() => {
  const sizes = {
    default: "h-9 px-4 py-2",
    xs: "h-6 rounded-md px-2 text-xs",
    sm: "h-8 rounded-md px-3 text-sm",
    lg: "h-10 rounded-md px-8",
    icon: "size-9",
    "icon-xs": "size-6 rounded-md",
    "icon-sm": "size-8",
    "icon-lg": "size-10",
  };
  return sizes[props.size] || sizes.default;
});
</script>