<script lang="ts">
  import Icon from '../Icon/Icon.svelte';
  import './Sidebar.css';

  let isOpen = $state(true);
</script>

<aside class="sidebar" class:sidebar--open={isOpen}>
  <nav class="sidebar__nav">
    <a href="/dashboard" class="sidebar__link" class:sidebar__link--active={true}>
      <span class="sidebar__link-icon">
        <Icon iconName="LayoutDashboard" />
      </span>
      
        <span class="sidebar__link-text">Dashboard</span>
      
    </a>
    <a href="/transactions" class="sidebar__link">
      <span class="sidebar__link-icon">
        <Icon iconName="Receipt" />
      </span>
      
        <span class="sidebar__link-text">Transactions</span>
      
    </a>
    <a href="/categories" class="sidebar__link">
      <span class="sidebar__link-icon">
        <Icon iconName="Tags" />
      </span>
      
        <span class="sidebar__link-text">Categories</span>
      
    </a>
    <a href="/reports" class="sidebar__link">
      <span class="sidebar__link-icon">
        <Icon iconName="BarChart3" />
      </span>
      
        <span class="sidebar__link-text">Reports</span>
      
    </a>
  </nav>
  <button 
    class="sidebar__toggle" 
    on:click={() => isOpen = !isOpen}
    aria-label={isOpen ? 'Close sidebar' : 'Open sidebar'}
  >
    <Icon iconName={isOpen ? 'ChevronLeft' : 'ChevronRight'} />
  </button>
</aside>