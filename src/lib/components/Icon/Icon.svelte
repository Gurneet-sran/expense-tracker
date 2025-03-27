<script lang="ts">
  import * as icons from 'lucide-svelte';
  import type { SvelteComponent } from 'svelte';
  import { theme } from '$lib/stores/theme';

  export let iconName: keyof typeof icons;
  export let size: number = 24;
  export let strokeWidth: number = 2;
  export let className: string = '';

  // Get the icon component dynamically
  $: IconComponent = icons[iconName] as typeof SvelteComponent;
</script>

<svelte:component
  this={IconComponent}
  size={size}
  strokeWidth={strokeWidth}
  class={className}
  color="currentColor"
/> 