import Warning from '../../public/warning.png';

export const warn = (time: number) => {
  chrome.notifications.create({
    type: 'basic',
    iconUrl: Warning,
    title: `${time}분 경과! 귀에 휴식을 취해주세요`,
    message: '장시간 소음 노출은 난청 및 이명의 원인이 됩니다',
  });
};

export const create = chrome.notifications.create;
