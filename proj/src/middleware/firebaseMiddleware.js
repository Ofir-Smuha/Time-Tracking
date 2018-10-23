import { get } from 'lodash/fp';

import firebase from 'config/firebase';

const db = firebase.database()

const dispatchActions  = (dispatch, arr, data) => {
  arr.forEach(action => dispatch(action(data)))
}

const firebaseMiddleware = ({dispatch}) => next => action => {
  if (get('meta.type', action) !== 'database') {
    return next(action);
  };

  const { method, databaseURL} = action.meta
  const { onSuccess, onError} = action.payload

  if (method === 'get') {
    db.ref().once('value').then(snapshot => {
      const list = snapshot.val()
      if(Array.isArray(onSuccess)) {
        dispatchActions(dispatch, onSuccess, list)
      } else {
        dispatch(onSuccess(list))
      }
    })
    .catch(err => {
      if(Array.isArray(onError)) {
        dispatchActions(dispatch, onError, err)
      } else {
        dispatch(onError())
      };
    })
  }

  if (method === 'post') {
    const item = action.payload.item
    db.ref(databaseURL + '/' + item.id).set({...item}).then(() => {
      if(Array.isArray(onSuccess)) {
        dispatchActions(dispatch, onSuccess)
      } else {
        dispatch(onSuccess(item))
      }
    })
    .catch(err => {
      if(Array.isArray(onError)) {
        dispatchActions(dispatch, onError, err)
      } else {
        dispatch(onError())
      };
    })
  }

  if (method === 'delete') {
    const itemId = action.payload.itemId;
    db.ref(databaseURL + '/').child(itemId).remove().then(() => {
      if(Array.isArray(onSuccess)) {
        dispatchActions(dispatch, onSuccess, itemId)
      } else {
        dispatch(onSuccess(itemId))
      }
    })
    .catch(err => {
      if(Array.isArray(onError)) {
        dispatchActions(dispatch, onError, err)
      } else {
        dispatch(onError())
      };
    })
  }

  if (method === 'put') {
    const item = action.payload.item
    db.ref(databaseURL + '/' + item.id).update(item).then(() => {
      if(Array.isArray(onSuccess)) {
        dispatchActions(dispatch, onSuccess, item)
      } else {
        dispatch(onSuccess(item))
      }
    })
    .catch(err => {
      if(Array.isArray(onError)) {
        dispatchActions(dispatch, onError, err)
      } else {
        dispatch(onError())
      };
    })
  }
};

export default firebaseMiddleware;