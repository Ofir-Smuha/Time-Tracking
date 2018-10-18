const apiMiddleware = store => next => action => {
  next(action);
}

export default apiMiddleware