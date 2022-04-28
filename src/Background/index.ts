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

    const isAlarm = !(alarmTimer % (this.LIMITED_MINUTE_UNIT / 6));
    if (audibleTabs.length && isAlarm) {
      // TODO: CHANGE WITH WINDOW
    }

    //FIXME: For test alarmTimer minute
    chrome.action.setBadgeText({
      text: `${alarmTimer}`,
    });
  }
}

export default Background;
