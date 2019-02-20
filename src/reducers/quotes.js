export default (state = [], action) => {
  switch (action.type){
    case 'ADD_QUOTE':
      return [...state, action.quote]
    case 'REMOVE_QUOTE':
      return state.filter(quote => quote.id != action.quoteId)
    case 'UPVOTE_QUOTE':
      const newState = state.map(quote => {
        if(quote.id === action.quoteId){
          console.log(quote.votes)
          quote.votes ++
        }
        return quote
      })
      return newState
    case 'DOWNVOTE_QUOTE':
    const newState1 = state.map(quote => {
      if(quote.id === action.quoteId && quote.votes > 0){
        console.log(quote.votes)
        quote.votes --
      }
      return quote
    })
    return newState1
    default:
      return state
  }
}
