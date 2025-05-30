// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		interface Locals {
			user: import('$lib/server/auth').SessionValidationResult['user'];
			session: import('$lib/server/auth').SessionValidationResult['session'];
		}
	}
}

declare module '*.svelte' {
	import type { ComponentType } from 'svelte';
	const component: ComponentType;
	export default component;
}

export {};
