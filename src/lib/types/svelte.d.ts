declare module '*.svelte' {
  import type { ComponentType } from 'svelte';
  const component: ComponentType;
  export default component;
}

declare module '*.css' {
  const content: { [className: string]: string };
  export default content;
}

declare global {
  interface HTMLElement {
    classList: DOMTokenList;
  }
} 