import {get} from 'lodash/fp';

import firebase from 'config/firebase';

const dispatchActions = (dispatch, actionContainer, data) => {
  if (Array.isArray(actionContainer)) {
    actionContainer.forEach(action => dispatch(action(data)))
  } else {
    dispatch(actionContainer(data))
  }
};

const firebaseMiddleware = ({dispatch}) => next => action => {
  if (get('meta.type', action) !== 'firebase') {
    return next(action);
  }

  const db = firebase.database();

  const {method, databaseURL} = action.meta;
  const {onSuccess, onError} = action.payload;

  if (method === 'get') {
    db.ref().once('value').then(snapshot => {
      const list = snapshot.val();
      dispatchActions(dispatch, onSuccess, list)
    })
      .catch(err => {
        dispatchActions(dispatch, onError, err)
      })
  }

  if (method === 'post') {
    const item = action.payload.item;
    db.ref(`${databaseURL}/${item.id}`).set({...item}).then(() => {
      dispatchActions(dispatch, onSuccess, item)
    })
      .catch(err => {
        dispatchActions(dispatch, onError, err)
      })
  }

  if (method === 'delete') {
    const itemId = action.payload.itemId;
    db.ref(databaseURL).child(itemId).remove().then(() => {
      dispatchActions(dispatch, onSuccess, itemId)
    })
      .catch(err => {
        dispatchActions(dispatch, onError, err)
      })
  }

  if (method === 'put') {
    const item = action.payload.item;
    db.ref(`${databaseURL}/${item.id}`).update(item).then(() => {
      dispatchActions(dispatch, onSuccess, item)
    })
      .catch(err => {
        dispatchActions(dispatch, onError, err)
      })
  }
};

export default firebaseMiddleware;