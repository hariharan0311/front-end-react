import { SAMPLE } from "./ActionType";
const initialState = {
  post: [],
  comments: [],
  todos: [],
  postById: [],
  deleteById: [],
  updateDetails: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SAMPLE.post:
      return {
        ...state,
        post: action.payload,
      };
    case SAMPLE.comments:
      return {
        ...state,
        comments: action.payload,
      };
    case SAMPLE.todos:
      return {
        ...state,
        todos: action.payload,
      };
    case SAMPLE.postById:
      return {
        ...state,
        postById: action.payload,
      };
    case SAMPLE.deleteById:
      return {
        ...state,
        deleteById: action.payload,
      };
    case SAMPLE.updateDetails:
      return {
        ...state,
        updateDetails: action.payload,
      };
    default:
      break;
  }
  return state;
};
