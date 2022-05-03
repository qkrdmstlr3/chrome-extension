import { warn, create } from '../notifications';

const createMock = chrome.notifications.create as jest.MockedFunction<typeof chrome.notifications.create>;

beforeEach(() => {
  createMock.mockClear();
});

describe('Api/Notification', () => {
  it('create test', async () => {
    const dummyObj = {
      type: 'basic' as chrome.notifications.TemplateType,
      iconUrl: '/',
      title: 'watch out',
      message: 'message',
    };
    create(dummyObj);

    expect(createMock).toBeCalledTimes(1);
    expect(createMock).toBeCalledWith(dummyObj);
  });

  it('warn test', () => {
    warn('message');

    expect(createMock).toBeCalledTimes(1);
  });
});
