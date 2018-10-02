import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const initialState = {
  loggedIn: false,
  username: "",
  firstName: "",
  profile: {},
  followers: [],
  repos: []
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_USERNAME":
      return {
        ...state,
        username: action.payload
      };
    case "CHANGE_FIRST_NAME":
      return {
        ...state,
        firstName: action.payload
      }
    case "LOGIN":
      return {
        ...state,
        loggedIn: true,
        profile: action.payload
      }
    case "LOGOUT":
      return {
        ...state,
        loggedIn: false,
        profile: {}
      }
    case "SAVE_FOLLOWERS":
      return {
        ...state,
        followers: action.payload
      }
    case "SAVE_REPOS":
      return {
        ...state,
        repos: action.payload
      }
    default:
      return state;
  }
};
  
export default createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk),
);