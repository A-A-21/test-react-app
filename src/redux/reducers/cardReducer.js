const cardReducer = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case 'ALL CARDS':
      return payload;
    default:
      return state;
  }
};

export default cardReducer;
