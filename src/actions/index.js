import * as types from './../constants/ActionTypes';
import v4 from 'uuid/v4';

export const receiveCard = (manaCost, cmc, colors, type, rarity, text, power, toughness, rulings) => ({
  type: types.RECEIVE_CARD,
  id: v4(),
  manaCost,
  cmc,
  colors,
  types,
  rarity,
  text,
  power,
  toughness,
  rulings
});

export const displayResults = (json) => ({
  type: types.DISPLAY_RESULTS,
  searchId: v4(),
  json
})
