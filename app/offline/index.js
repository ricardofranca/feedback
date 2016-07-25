import  { FEEDBACK_OFFLINE } from '../api';

export default class OfflineWorker {

  type = 'online';

  constructor(store) {
    this.store = store;

    const appCache = window.applicationCache;

    if( appCache.status > appCache.UNCACHED ) {
      appCache.update();
    }

    window.addEventListener('load', function () {
      window.addEventListener('online', this.updateStatus.bind(this));
      window.addEventListener('offline', this.updateStatus.bind(this));
      window.applicationCache.addEventListener('updateready', this.updateVersion.bind(this));
    }.bind(this));
  }

  updateVersion = () => {
    if (window.applicationCache.status == window.applicationCache.UPDATEREADY) {
      appCache.swapCache();
      window.location.reload();
    }
  }

  register = () => {
    console.log("Qual evento?", this.type);
    let state = this.store.getState();



    if( state.offline ) {
      debugger;
    }

  }

  updateStatus = (event) => {
    this.type = event.type;
    this.store.dispatch({
      type: FEEDBACK_OFFLINE,
      payload: this.type === 'offline'
    });
  }

}