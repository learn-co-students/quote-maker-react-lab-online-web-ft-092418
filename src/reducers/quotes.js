
export default function quotes(state = [], action) {
  let quote;
  let idx;
  switch (action.type) {

    case "ADD_QUOTE":
    return [...state, {author: action.quote.author, content: action.quote.content, id: action.quote.id, votes: 0}]
    
    case "REMOVE_QUOTE":
      idx = state.findIndex((el) => el.id === action.quoteId )
      return [...state.slice(0, idx), ...state.slice(idx + 1)]

    case "UPVOTE_QUOTE":
      idx = state.findIndex((el) => el.id === action.quoteId )
      quote = state[idx]
      return [...state.slice(0, idx),
        Object.assign({}, quote, {votes: quote.votes += 1}),
        ...state.slice(idx + 1)];

    case "DOWNVOTE_QUOTE":
    idx = state.findIndex((el) => el.id === action.quoteId )
    quote = state[idx]
    if (quote.votes > 0) {
      return [...state.slice(0, idx),
        Object.assign({}, quote, {votes: quote.votes -= 1}),
        ...state.slice(idx + 1)];
      } else {
        return state
      }

    default:
      return state;
  }
}




// function booksReducer(state = [], action) {
//   let idx;
//   switch (action.type) {
//     case "ADD_BOOK":
//     debugger;
//       return [...state, action.book];
    
//     case "REMOVE_BOOK":
//       idx = state.indexOf(action.id);
//       return[...state.slice(0, idx), ...state.slice(idx + 1)];

//     default:
//       return state;
//   }
// }


// function authorsReducer(state = [], action) {
//   let idx;
//   switch (action.type) {
//     case "ADD_AUTHOR":
//       return [...state, action.author];
 
//     case "REMOVE_AUTHOR":
//       idx = state.indexOf(action.id);
//       return [...state.slice(0, idx), ...state.slice(idx + 1)];

//     case "ADD_BOOK":
//       let existingAuthor = state.filter(
//         author => author.authorName === action.book.authorName
//       );
//       if (existingAuthor.length > 0) {
//         return state;
//       } else {
//         return [...state, { authorName: action.book.authorName, id: uuid() }];
//       }
 
//     default:
//       return state;
//   }
// }