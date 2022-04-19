import { SET_NEWS_LİST,CLEAR_NEWS_LİST } from "../types/newsTypes"

const initialState = {
    newsList: [],
}

const newsReducer= (state = initialState, { type, payload }) => {
  switch (type) {

  case SET_NEWS_LİST:
    return { ...state, newsList:payload }
  case CLEAR_NEWS_LİST:
    return initialState.newsList

  default:
    return state
  }
}
  export default newsReducer;
