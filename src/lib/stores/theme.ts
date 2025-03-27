import { writable } from 'svelte/store';
import { browser } from '$app/environment';

// Initialize theme from localStorage or default to 'light'
const storedTheme = browser ? localStorage.getItem('theme') : 'light';
export const theme = writable<'light' | 'dark'>(storedTheme as 'light' | 'dark' || 'light');

// Subscribe to theme changes and update document class
if (browser) {
    theme.subscribe(value => {
        document.documentElement.classList.remove('light', 'dark');
        document.documentElement.classList.add(value);
        localStorage.setItem('theme', value);
    });
} 