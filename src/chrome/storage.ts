export const get = async <T>(key: string): Promise<T> => {
  return (await chrome.storage.local.get(key))[key] as T;
};

export const set = async <T>(key: string, value: T) => {
  await chrome.storage.local.set({ [key]: value });
};
