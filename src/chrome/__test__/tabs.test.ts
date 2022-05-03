import { getAllAudibleTab } from '../tabs';

const tabsQueryMock = chrome.tabs.query as jest.MockedFunction<typeof chrome.tabs.query>;

describe('Api/Tabs', () => {
  it('getAllAudibleTab test', async () => {
    tabsQueryMock.mockReturnValue(new Promise((res) => res([])));
    const result = await getAllAudibleTab();

    expect(result).toHaveLength(0);
    expect(tabsQueryMock).toBeCalledTimes(1);
  });
});
