import Background from '../Background/index';
import * as chrome from '../chrome/index';

class PopUp {
  private toggleButton: HTMLInputElement;

  constructor() {
    this.toggleButton = document.querySelector('input') as HTMLInputElement;
    this.initToggleButton();

    this.toggleButton?.addEventListener<any>('click', (event) => {
      chrome.storage.set('checked', event.target.checked);
      this.changeToggleButton(event.target.checked);
    });
  }

  async initToggleButton() {
    const checked: boolean = await chrome.storage.get('checked');
    this.toggleButton.checked = checked;
  }

  // restart alarm
  async changeToggleButton(checked: boolean) {
    if (checked) new Background();
    else {
      await chrome.storage.clearAll();
      chrome.alarms.clearAllAlarm();
      chrome.action.setBadgeText({ text: '' });
    }
    setTimeout(() => {
      window.close();
    }, 500);
  }
}

export default PopUp;
