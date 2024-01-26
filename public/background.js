console.log('background is running')
chrome.runtime.onInstalled.addListener(() => {
   // Schedule an initial alarm
   chrome.alarms.create('popupAlarm', { delayInMinutes: 0.1, periodInMinutes: 0.5 });
 });

 chrome.alarms.onAlarm.addListener((alarm) => {
   if (alarm.name === 'popupAlarm') {
     // Open the extension popup
     
   }
 });