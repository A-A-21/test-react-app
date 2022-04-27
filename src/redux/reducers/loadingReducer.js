const loadingReducer = (state = true, action) => {
  const { type } = action;
  switch (type) {
    case 'END_LOADING':
      return false;
    default:
      return state;
  }
};

export default loadingReducer;
