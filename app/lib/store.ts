const globalForStore = global as typeof globalThis & {
  localStore: Map<string, string>
}

if (!globalForStore.localStore) {
  globalForStore.localStore = new Map<string, string>()
}

const localStore = globalForStore.localStore

export function save(code: string, url: string): void {
  localStore.set(code, url);
}

export function find(code: string): string | null {
  return localStore.get(code) || null;
}