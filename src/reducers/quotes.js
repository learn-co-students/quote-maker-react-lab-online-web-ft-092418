export default (state = [], action) => {
  switch (action.type){

    case "ADD_QUOTE":
      return [...state, action.quote]
    case "REMOVE_QUOTE":
      return state.filter(quote => quote.id != action.quoteId)
    case "UPVOTE_QUOTE":
      const newState = state.filter(quote => quote.id != action.quoteId)
      const quote = state.find(quote => quote.id === action.quoteId)
      const newQuote = {...quote, votes: quote.votes += 1}
      return [...newState, newQuote]
    case "DOWNVOTE_QUOTE":
      const quote2 = state.find(quote => quote.id === action.quoteId)
      if (quote2.votes > 0){
        const newState2 = state.filter(quote => quote.id != action.quoteId)
        const newQuote2 = {...quote2, votes: quote2.votes -= 1}
        return [...newState2, newQuote2]
      } else {
        return state
      }
    default:
      return state;
  }
}
