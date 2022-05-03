import * as chrome from '../chrome/index';

class Timer {
  private timerName: string;

  constructor(timerName: string) {
    this.timerName = timerName;
    chrome.storage.get<number>(timerName).then((minute) => {
      chrome.storage.set<number>(timerName, minute ?? 0);
    });
  }

  async increaseMinute() {
    const minute = await chrome.storage.get<number>(this.timerName);
    await chrome.storage.set(this.timerName, minute + 1);
  }

  async initializeMinute() {
    await chrome.storage.set(this.timerName, 0);
  }

  async getMinute() {
    return await chrome.storage.get<number>(this.timerName);
  }
}

export default Timer;
