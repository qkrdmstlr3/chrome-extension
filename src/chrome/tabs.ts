export const getAllAudibleTab = async (): Promise<chrome.tabs.Tab[]> => {
  return await chrome.tabs.query({
    audible: true,
  });
};
