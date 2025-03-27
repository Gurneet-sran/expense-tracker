<script lang="ts">
  import Icon from '$lib/components/Icon';
  import styles from './Sidebar.module.css';
  
  let { isOpen = false } = $props<{ isOpen?: boolean }>();
  
  function toggleSidebar() {
    isOpen = !isOpen;
  }

  let sidebarClass = $derived(isOpen ? `${styles.sidebar} ${styles['sidebar--open']}` : styles.sidebar);
</script>

<!-- @style(styles) -->

<aside class={sidebarClass}>
  <nav class={styles['sidebar__nav']}>
    <a
      class={styles['sidebar__link']}
      href="/dashboard"
      class:sidebar__link--active={styles['sidebar__link--active']}
    >
      <span class={styles['sidebar__link-icon']}>
        <Icon iconName="LayoutDashboard" size={20} />
      </span>
      <span class={styles['sidebar__link-text']}>Dashboard</span>
    </a>
  </nav>
  <button
    class={styles['sidebar__toggle']}
    onclick={toggleSidebar}
    aria-label={isOpen ? 'Close sidebar' : 'Open sidebar'}
  >
    <Icon iconName={isOpen ? 'ChevronLeft' : 'ChevronRight'} size={20} />
  </button>
</aside>