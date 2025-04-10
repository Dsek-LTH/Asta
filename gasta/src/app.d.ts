// See https://kit.svelte.dev/docs/types#app

import type { Display } from '$lib/api_bindings/read/Display';
import type { Playlist } from '$lib/api_bindings/read/Playlist';
import type { Schedule } from '$lib/api_bindings/read/Schedule';

// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface Platform {}
		interface ImportMetaEnv {
			SERVER_URL: string;
			LDAP_URL: string;
			LDAP_GROUPS: string;
			UUID5_NAMESPACE: string;
			REDIS_URL: string;
		}

		interface Locals {
			user: string;
			name: string;
		}
	}
}

export type State =
	| { type: 'Display'; content: Map<string, Display> }
	| { type: 'Playlist'; content: Map<string, Playlist> }
	| { type: 'Schedule'; content: Map<string, Schedule> };
