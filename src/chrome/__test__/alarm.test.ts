import { createAlarm, clearAllAlarm, onAlarm } from '../alarms';

const createMock = chrome.alarms.create as jest.MockedFunction<typeof chrome.alarms.create>;
const clearAllAlarmMock = chrome.alarms.clearAll as jest.MockedFunction<typeof chrome.alarms.clearAll>;

describe('Api/Alarm', () => {
  it('createAlarm test', () => {
    createAlarm(60);

    expect(createMock).toBeCalledTimes(1);
    expect(createMock).toBeCalledWith({ periodInMinutes: 60 });
  });

  it('clearAllAlarm test', () => {
    clearAllAlarm();

    expect(clearAllAlarmMock).toBeCalledTimes(1);
  });

  it('onAlarm test', () => {
    const fn = () => {};
    onAlarm.addListener(fn);
    expect(onAlarm.hasListener(fn)).toBeTruthy();
  });
});
