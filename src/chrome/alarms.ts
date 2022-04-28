export const createAlarm = (minute: number) => {
  chrome.alarms.create({
    periodInMinutes: minute,
  });
};

export const clearAllAlarm = () => {
  chrome.alarms.clearAll();
};

export const onAlarm = chrome.alarms.onAlarm;
