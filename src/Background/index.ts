import * as chrome from '../chrome/index';
import Timer from '../Timer/index';

class Background {
  alarmTimer: Timer;
  LIMITED_MINUTE_UNIT: number = 60;
  INITIALIZE_TIMER_STANDARD_MINUTE: number = 20;

  constructor() {
    this.alarmTimer = new Timer('alarmTimer');
    chrome.alarms.createAlarm(1 / 60);
    chrome.alarms.onAlarm.addListener(this.addAlarm.bind(this));
  }

  async addAlarm() {
    await this.alarmTimer.increaseMinute();

    const audibleTabs = await chrome.tabs.getAllAudibleTab();
    const alarmTimer = await this.alarmTimer.getMinute();

    const isAlarm = alarmTimer && !(alarmTimer % (this.LIMITED_MINUTE_UNIT / 3));
    if (audibleTabs.length && isAlarm) {
      chrome.notifications.warn(`음악을 재생한지 ${alarmTimer}분이 지났어요!`);
    }

    //FIXME: For test alarmTimer minute
    chrome.action.setBadgeText({
      text: `${alarmTimer}`,
    });
  }
}

export default Background;
