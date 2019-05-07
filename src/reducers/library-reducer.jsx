import * as types from './../constants/ActionTypes';

export default (state = {}, action) => {
  let newState;
  let newCardsByIdSlice;
  let newCardsByIdEntry
  switch (action.type) {
    case types.DISPLAY_RESULTS:
      newState = Object.assign({}, state, {
        [action.searchId]: {
          isFetching: false,
          search: action.json
        }
      }); 
      // newState.currentSearch = action.json;
      return newState;
    case types.RECEIVE_CARD:
      newCardsByIdEntry = Object.assign({}, state.cardsById[action.id], {
        isFetching: false,
        name: action.name,
        manaCost: action.manaCost,
        cmc: action.cmc,
        colors: action.colors,
        type: action.type,
        rarity: action.rarity,
        text: action.text,
        power: action.power,
        toughness: action.toughness,
        rulings: action.rulings,
        id: action.id
      });
      newCardsByIdSlice = Object.assign({}, state, {
        [action.id]: newCardsByIdEntry
      });
      return newCardsByIdSlice;
    default:
      return state;
  }
}
