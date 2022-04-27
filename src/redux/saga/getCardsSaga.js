export const getCards = (cards) => {
  return {
    type: 'GET_CARDS',
    payload: cards,
  };
};
