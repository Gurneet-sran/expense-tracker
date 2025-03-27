<script lang="ts">
  import { theme } from '$lib/stores/theme';
  import Icon from '$lib/components/Icon';
  
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

<style>
  .topbar {
    display: flex;
    align-items: center;
    padding: var(--spacing-md);
    background-color: var(--color-background);
    border-bottom: 1px solid var(--color-border);
    box-shadow: var(--shadow-sm);
    position: relative;
    z-index: 20;
  }
  
  .topbar__menu-button {
    padding: var(--spacing-sm);
    background: none;
    border: none;
    cursor: pointer;
    color: var(--color-text);
  }
  
  .topbar__menu-icon {
    font-size: 1.5rem;
  }
  
  .topbar__brand {
    margin-left: var(--spacing-md);
    flex: 1;
  }
  
  .topbar__title {
    font-size: var(--font-size-xl);
    font-weight: var(--font-weight-semibold);
    color: var(--color-primary);
    margin: 0;
  }
  
  .topbar__actions {
    display: flex;
    gap: var(--spacing-sm);
    align-items: center;
  }
  
  .topbar__action-button {
    padding: var(--spacing-sm);
    background: none;
    border: none;
    cursor: pointer;
    color: var(--color-text);
    border-radius: var(--radius-sm);
    transition: background-color var(--transition-fast);
    position: relative;
  }
  
  .topbar__action-button:hover {
    background-color: var(--color-background-light);
  }
  
  .topbar__theme-icon,
  .topbar__notification-icon,
  .topbar__user-icon {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  /* Notifications */
  .topbar__notifications {
    position: relative;
  }
  
  .topbar__notification-badge {
    position: absolute;
    top: -5px;
    right: -5px;
    background-color: var(--color-error);
    color: white;
    font-size: 0.75rem;
    padding: 2px 6px;
    border-radius: 10px;
    min-width: 18px;
    text-align: center;
  }
  
  .topbar__notifications-dropdown {
    position: absolute;
    top: 100%;
    right: 0;
    width: 300px;
    background-color: var(--color-background);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-md);
    box-shadow: var(--shadow-md);
    margin-top: var(--spacing-sm);
    z-index: 30;
  }
  
  .topbar__notifications-empty {
    padding: var(--spacing-md);
    text-align: center;
    color: var(--color-text-muted);
  }
  
  .topbar__notification-item {
    padding: var(--spacing-md);
    border-bottom: 1px solid var(--color-border);
    cursor: pointer;
  }
  
  .topbar__notification-item:last-child {
    border-bottom: none;
  }
  
  .topbar__notification-item:hover {
    background-color: var(--color-background-light);
  }
  
  .topbar__notification-item.unread {
    background-color: var(--color-background-light);
  }
  
  /* User Menu */
  .topbar__user {
    position: relative;
  }
  
  .topbar__user-avatar {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    object-fit: cover;
  }
  
  .topbar__user-dropdown {
    position: absolute;
    top: 100%;
    right: 0;
    width: 200px;
    background-color: var(--color-background);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-md);
    box-shadow: var(--shadow-md);
    margin-top: var(--spacing-sm);
    z-index: 30;
  }
  
  .topbar__user-info {
    padding: var(--spacing-md);
    border-bottom: 1px solid var(--color-border);
  }
  
  .topbar__user-name {
    font-weight: var(--font-weight-medium);
    color: var(--color-text);
  }
  
  .topbar__user-actions {
    padding: var(--spacing-sm);
  }
  
  .topbar__user-action {
    display: flex;
    align-items: center;
    gap: var(--spacing-sm);
    width: 100%;
    padding: var(--spacing-sm) var(--spacing-md);
    background: none;
    border: none;
    color: var(--color-text);
    cursor: pointer;
    border-radius: var(--radius-sm);
    transition: background-color var(--transition-fast);
  }
  
  .topbar__user-action:hover {
    background-color: var(--color-background-light);
  }
  
  /* Responsive Design */
  @media (max-width: 768px) {
    .topbar__title {
      font-size: var(--font-size-lg);
    }
  
    .topbar__notifications-dropdown,
    .topbar__user-dropdown {
      position: fixed;
      top: auto;
      bottom: 0;
      left: 0;
      right: 0;
      width: 100%;
      margin: 0;
      border-radius: var(--radius-md) var(--radius-md) 0 0;
      max-height: 80vh;
      overflow-y: auto;
    }
  } 
</style>

<header class="topbar">
  <div class="topbar__brand">
    <h1 class="topbar__title">{title}</h1>
  </div>
  <div class="topbar__actions">
    <button 
      class="topbar__action-button" 
      on:click={toggleTheme}
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
        on:click={toggleNotifications}
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
        on:click={toggleUserMenu}
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