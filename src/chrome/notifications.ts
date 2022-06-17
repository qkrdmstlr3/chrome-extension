import Warning from '../../public/warning.png';

export const warn = (message: string) => {
  chrome.notifications.create({
    type: 'basic',
    iconUrl: Warning,
    title: '휴식을 취하세요!',
    message,
  });
};

export const create = chrome.notifications.create;
