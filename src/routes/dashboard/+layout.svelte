<script>
  import '../../styles/base.css';

  import TopBar from '$lib/components/TopBar'; // Assuming TopBar.svelte exists in the same directory
  import Sidebar from '$lib/components/Sidebar'; // Importing from the index.ts file
  // import { Outlet } from '@sveltejs/kit'; // Assuming you are using SvelteKit for routing

  // You'll likely manage the state of the sidebar open/close
  // in a parent component or a store. For this example, we'll use a local state.
  let isSidebarOpen = false;

  function toggleSidebar() {
    isSidebarOpen = !isSidebarOpen;
  }
</script>

<div class="dashboard">
  <TopBar />
  <div class="dashboard__content">
    <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />
    <main class="dashboard__main">
      <slot />
    </main>
  </div>
</div>

<style>
  .dashboard {
    display: flex;
    flex-direction: column;
    height: 100vh;
  }

  .dashboard__content {
    display: flex;
    flex: 1;
    overflow: hidden;
  }

  .dashboard__main {
    flex: 1;
    overflow: auto;
    background-color: var(--color-background-light);
    padding: var(--spacing-lg);
  }
</style>
