import React from 'react';
import { connect } from 'react-redux';
import {getCards, displayResults} from './../actions';


function App({dispatch}) {
let _searchTerm = null;

console.log(_searchTerm)

function getCards(color){
  // dispatch(requestCard());
    return fetch(`https://api.magicthegathering.io/v1/cards?colors=${color}`).then(
      response => response.json(),
      error => console.log('An error occurred.', error)
    ).then(function(json) {
      if(json.cards.length > 0) {
      console.log(json)
      dispatch(displayResults(json));
    } else {
      console.log("something has gone wrong")
    };
  })
}

function cardSearch(e){
  e.preventDefault();
  console.log(_searchTerm.value);
  dispatch(getCards(_searchTerm.value));
  _searchTerm.value = '';
}

  return (
    <div>
      <form onSubmit={cardSearch}>
        <input ref={(input) => { _searchTerm = input; }} placeholder="Color" type="text" />
        <button>Click</button>
      </form>
    </div>
  );
}
export default connect()(App);
