import reduxApi from 'redux-api';
import fetch from 'isomorphic-fetch';
import {transformers} from 'redux-api';

const invitesMapping = {
    invitesRest: {
        url: '/invites/:id',
        crud: true,
        transformer: transformers.array,
        options: {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }
    }
};

const rest = reduxApi(invitesMapping).use('fetch', (url, opts)=> {
  return fetch(url, opts).then((r)=> r.json().then(
    (d)=> new Promise(
      (resolve, reject)=> {
        if (r.status >= 200 && r.status < 300) {
          resolve(d);
        } else {
          reject(d);
        }
      }
    )));
});

export default rest;