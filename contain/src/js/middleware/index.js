import { ADD_ARTICLE } from "../constants/action-types";
const forbiddenWords = ["connard", "salop"];

export function forbiddenWordsMiddleware({ dispatch }) {
  return function(next) {
    return function(action) {
      // do your stuff
      if (action.type === ADD_ARTICLE) {
        const foundWord = forbiddenWords.filter(word =>
          action.payload.title.includes(word)
        );
        if (foundWord.length) {
          return console.log(
            "It's impossible to add this word, try with a other please!"
          );
        }
      }
      return next(action);
    };
  };
}
