const localStore = new Map<string, string>();

export function save(code: string, url: string): void {
  localStore.set(code, url);
}

export function find(code: string): string | null {
  return localStore.get(code) || null;
}