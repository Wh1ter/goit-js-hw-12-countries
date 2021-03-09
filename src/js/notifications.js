import { alert, defaultModules } from '@pnotify/core/dist/PNotify.js';
import * as PNotifyMobile from '@pnotify/mobile/dist/PNotifyMobile.js';
import '@pnotify/core/dist/BrightTheme.css';


function showMessage() {
  defaultModules.set(PNotifyMobile, {});

alert({
  text: 'Too many matches found. Please enter a more specific query!',
    delay: 4000,
});
}

export default showMessage;