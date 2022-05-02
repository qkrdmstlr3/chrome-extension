import { get, set } from '../storage';

const getMock = chrome.storage.local.get as jest.MockedFunction<typeof chrome.storage.local.get>;
const setMock = chrome.storage.local.set as jest.MockedFunction<typeof chrome.storage.local.set>;
const KEY = 'key';
const VALUE = 'value';

describe('Storage test', () => {
  it('get test', async () => {
    getMock.mockReturnValue({ [KEY]: VALUE } as any);
    const result = await get(KEY);

    expect(getMock).toBeCalledTimes(1);
    expect(getMock).toBeCalledWith(KEY);
    expect(result).toBe(VALUE);
  });

  it('set test', () => {
    set(KEY, VALUE);

    expect(setMock).toBeCalledTimes(1);
    expect(setMock).toBeCalledWith({ [KEY]: VALUE });
  });
});
