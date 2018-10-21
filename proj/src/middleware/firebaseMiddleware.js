import { get } from 'lodash/fp';

import database from 'config/firebase';

const firebaseMiddleware = ({dispatch}) => next => action => {
  if (get('meta.type', action) !== 'database') { 
    return next(action);
  };
};

export default firebaseMiddleware;