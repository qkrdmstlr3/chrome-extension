import Timer from '../Timer';

const getMock = chrome.storage.local.get as jest.MockedFunction<typeof chrome.storage.local.get>;
const setMock = chrome.storage.local.set as jest.MockedFunction<typeof chrome.storage.local.set>;
const TIMER_NAME = 'TIMER_NAME';

beforeEach(() => {
  getMock.mockClear();
  setMock.mockClear();

  getMock.mockReturnValue({ [TIMER_NAME]: 1 } as any);
});

describe('Background/Timer', () => {
  it('increase test', async () => {
    const timer = new Timer(TIMER_NAME);
    await timer.increaseMinute();
    expect(setMock).toBeCalledTimes(2);
    expect(setMock).toBeCalledWith({ [TIMER_NAME]: 1 });
  });

  it('initializeMinute test', async () => {
    const timer = new Timer(TIMER_NAME);
    await timer.initializeMinute();
    expect(setMock).toBeCalledTimes(2);
    expect(setMock).toBeCalledWith({ [TIMER_NAME]: 0 });
  });

  it('getMinute test', async () => {
    const timer = new Timer(TIMER_NAME);
    const minute = await timer.getMinute();
    expect(minute).toBe(1);
    expect(getMock).toBeCalledTimes(2);
  });

  it('first create timer', async () => {
    getMock.mockReturnValue({ [TIMER_NAME]: undefined } as any);
    new Timer(TIMER_NAME);
    expect(getMock).toBeCalledTimes(1);
  });
});
