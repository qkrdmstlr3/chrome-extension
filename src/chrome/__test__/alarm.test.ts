import { createAlarm, clearAllAlarm, onAlarm } from '../alarms';

describe('Alarm test', () => {
  it('createAlarm test', () => {
    const createAlarmMock = mockForV3('alarms.create');
    createAlarm(60);

    expect(createAlarmMock).toBeCalledTimes(1);
    expect(createAlarmMock).toBeCalledWith({ periodInMinutes: 60 });
  });

  it('clearAllAlarm test', () => {
    const clearAllAlarmMock = mockForV3('alarms.clearAll');
    clearAllAlarm();

    expect(clearAllAlarmMock).toBeCalledTimes(1);
  });

  it('onAlarm test', () => {
    const fn = () => {};
    onAlarm.addListener(fn);
    expect(onAlarm.hasListener(fn)).toBeTruthy();
  });
});
