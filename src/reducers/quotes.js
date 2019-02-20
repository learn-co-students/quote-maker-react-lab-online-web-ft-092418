import { combineReducers } from 'redux';
// import uuid from 'uuid';

export default (state = [], action) => {

  // let quote; 
  // let index;

  switch(action.type) {
    case 'ADD_QUOTE': 
      return [...state, action.quote];

    case 'REMOVE_QUOTE':
    return state.filter(quote => quote.id === action.quoteId);

    case 'UPVOTE_QUOTE':
    const newState = state.filter(quote => quote.id === action.quoteId);
    const quote = state.find(quote => quote.id === action.quoteId);
    const newQuote =  {...quote, votes: quote.votes += 1}

    return [newState, newQuote]
    // index = state.findIndex(quote => quote.id === action.quoteId);
    // quote = state[index];
    //   return [
    //     ...state.slice(0, index),
    //     {...quote, votes: quote.votes += 1},
    //     ...state.slice(index + 1)
    //   ];
    
    case 'DOWNVOTE_QUOTE':
    const newState = state.filter(quote => quote.id === action.quoteId);
    const quote = state.find(quote => quote.id === action.quoteId);
    const newQuote =  {...quote, votes: quote.votes -= 1}

    return [newState, newQuote]
  //   index = state.findIndex(quote => quote.id === action.quoteId);
  //   quote = state[index];

  //   if (quote.votes > 0) {
  //     return [
  //       ...state.slice(0, index),
  //       {...quote, votes: quote.votes -= 1},
  //       ...state.slice(index + 1)
  //     ];
  // }
  // return state;

  default: 
    return state;
  }
}