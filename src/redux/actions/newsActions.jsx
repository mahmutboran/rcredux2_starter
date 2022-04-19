import { CLEAR_NEWS_LİST, SET_NEWS_LİST } from "../types/newsTypes";

export const setNewsList = (news) => ({
  type: SET_NEWS_LİST,
  payload:news,
})
export const clearNewsList = () => ({
  type: CLEAR_NEWS_LİST,

})
