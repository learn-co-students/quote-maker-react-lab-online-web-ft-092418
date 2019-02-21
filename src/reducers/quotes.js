export default  (state = [], action) => {
  switch (action.type) {
    case 'ADD_QUOTE':
      return [...state, action.quote]
    case 'REMOVE_QUOTE':
      return state.filter(quote => quote.id !== action.quoteId)
    case 'UPVOTE_QUOTE':
      let newState = state.map(quote => {
        if (quote.id === action.quoteId){
          quote.votes++
        }
        return quote
      })
      return newState
    case 'DOWNVOTE_QUOTE':
      let quote = state.find(quote => quote.id === action.quoteId)
      newState = [...state]
      if (quote.votes > 0){
        newState = state.map(quote => {
          if (quote.id === action.quoteId){
            quote.votes--
          }
          return quote
        })
      }
      return newState

    default: 
      return state
  }
}
