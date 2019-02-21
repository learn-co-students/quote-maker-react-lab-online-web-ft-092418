export default  (state = [], action) => {
  switch (action.type) {
    case 'ADD_QUOTE':
      return [...state, action.quote]
    case 'REMOVE_QUOTE':
      return state.filter(quote => quote.id !== action.quoteId)
    case 'UPVOTE_QUOTE':
      let newState = state.filter(quote => quote.id !== action.quoteId)
      let quote = state.find(quote => quote.id === action.quoteId)
      let newQuote = {...quote, votes: quote.votes += 1 }
      return [...newState, newQuote]
    case 'DOWNVOTE_QUOTE':
      quote = state.find(quote => quote.id === action.quoteId)
      if (quote.votes > 0){
        newState = state.filter(quote => quote.id !== action.quoteId)
        newQuote = {...quote, votes: quote.votes -= 1 }
        return [...newState, newQuote]
      } else {
        return [...state]
      }
    default: 
      return state
  }
}
