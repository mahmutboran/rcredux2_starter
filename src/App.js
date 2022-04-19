import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "./redux/actions/authActions";
import AppRouter from "./router/Router";
import { auth } from "./utils/firebaseUtil";


const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    const userInfo = auth.onAuthStateChanged((user)=>{
      dispatch(setCurrentUser(user))
    });
    //!clean-up function comp will anmount yaptık
    return userInfo;

  }, [dispatch])
  
  return (
    <div>
      <AppRouter />
    </div>
  );
};

export default App;
