import { FEEDBACK_OFFLINE } from 'api/actions';

// consultar chrome://appcache-internals/
export default class OfflineWorker {
  type = 'online';

  constructor(store) {
    this.store = store;
    window.addEventListener('load', this.load);
  }

  load = () => {

    if ('serviceWorker' in navigator) {
      //window.addEventListener("install", this.handleInstall);
      this.handleInstall();
    }

    const appCache = window.applicationCache;
    window.addEventListener('online', this.updateStatus.bind(this));
    window.addEventListener('offline', this.updateStatus.bind(this));
    if (appCache.status > appCache.UNCACHED) {
      appCache.addEventListener('updateready', this.updateVersion.bind(this));
      appCache.update();
    }
  }

  handleInstall = () => {
    navigator.serviceWorker.register('/assets/js/sw.js', { scope: './' }).then(function(reg) {
        if(reg.installing) {
          console.log('Service worker installing');
        } else if(reg.waiting) {
          console.log('Service worker installed');
        } else if(reg.active) {
          console.log('Service worker active');
        }
      }).catch(function(error) {
        console.log('Registration failed with ' + error);
      });
  }

  updateVersion = () => {
    const { applicationCache, location } = window;
    applicationCache.swapCache();
    location.reload();
  }

  register = () => {
    console.log('Qual evento?', this.type, arguments);
    const state = this.store.getState();
    console.log('state', state);
  }

  updateStatus = (event) => {
    this.type = event.type;
    this.store.dispatch({
      type: FEEDBACK_OFFLINE,
      payload: this.type === 'offline',
    });
  }

}
