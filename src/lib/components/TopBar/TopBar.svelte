<script lang="ts">
  import { theme } from '$lib/stores/theme';
  import Icon from '$lib/components/Icon';
  import './TopBar.css';
  
  interface Notification {
    id: string;
    message: string;
    read: boolean;
  }

  interface User {
    name: string;
    avatar?: string;
  }

  let title = $state('Dashboard');
  let user = $state<User>({ name: 'User' });
  let notifications = $state<Notification[]>([]);
  
  let showUserMenu = $state(false);
  let showNotifications = $state(false);
  
  function toggleTheme() {
    theme.set($theme === 'light' ? 'dark' : 'light');
  }

  function toggleUserMenu() {
    showUserMenu = !showUserMenu;
    if (showUserMenu) showNotifications = false;
  }

  function toggleNotifications() {
    showNotifications = !showNotifications;
    if (showNotifications) showUserMenu = false;
  }

  function handleKeydown(event: KeyboardEvent) {
    if (event.key === 'Escape') {
      showUserMenu = false;
      showNotifications = false;
    }
  }

  let unreadCount = $derived(notifications.filter(n => !n.read).length);
</script>

<svelte:window on:keydown={handleKeydown} />

<header class="topbar">
  <div class="topbar__brand">
    <h1 class="topbar__title">{title}</h1>
  </div>
  <div class="topbar__actions">
    <button 
      class="topbar__action-button" 
      onclick={toggleTheme}
      aria-label="Toggle theme"
      title="Toggle theme"
    >
      <span class="topbar__theme-icon">
        <Icon iconName={$theme === 'light' ? 'Moon' : 'Sun'} size={20} />
      </span>
    </button>

    <div class="topbar__notifications">
      <button 
        class="topbar__action-button" 
        onclick={toggleNotifications}
        aria-label="Toggle notifications"
        title="Notifications"
      >
        <span class="topbar__notification-icon">
          <Icon iconName="Bell" size={20} />
          {#if unreadCount > 0}
            <span class="topbar__notification-badge">{unreadCount}</span>
          {/if}
        </span>
      </button>
      
      {#if showNotifications}
        <div class="topbar__notifications-dropdown">
          {#if notifications.length === 0}
            <p class="topbar__notifications-empty">No notifications</p>
          {:else}
            {#each notifications as notification}
              <div class="topbar__notification-item" class:unread={!notification.read}>
                {notification.message}
              </div>
            {/each}
          {/if}
        </div>
      {/if}
    </div>

    <div class="topbar__user">
      <button 
        class="topbar__action-button" 
        onclick={toggleUserMenu}
        aria-label="Toggle user menu"
        title="User menu"
      >
        <span class="topbar__user-icon">
          {#if user.avatar}
            <img src={user.avatar} alt={user.name} class="topbar__user-avatar" />
          {:else}
            <Icon iconName="User" size={20} />
          {/if}
        </span>
      </button>

      {#if showUserMenu}
        <div class="topbar__user-dropdown">
          <div class="topbar__user-info">
            <span class="topbar__user-name">{user.name}</span>
          </div>
          <div class="topbar__user-actions">
            <button class="topbar__user-action">
              <Icon iconName="Settings" size={16} />
              Settings
            </button>
            <button class="topbar__user-action">
              <Icon iconName="LogOut" size={16} />
              Logout
            </button>
          </div>
        </div>
      {/if}
    </div>
  </div>
</header>