import axios from "axios";
import { clearLoading, setLoading } from "../actions/appActions";
import { setNewsList } from "../actions/newsActions";


const url =
"https://newsapi.org/v2/everything?" +
"q=Apple&" +
"from=2022-04-18&" +
"sortBy=popularity&" +
"apiKey=970cabc5060d40a29678da7f699b3f14";


export const getNews = async (dispatch) =>{
  try {
    dispatch( setLoading())
    const {data} = await axios.get(url);

    dispatch( setNewsList(data.articles))

  console.log(data.articles)
  } catch (error) {
    console.log(error);
  }finally{
    dispatch(clearLoading())
  }
  
}