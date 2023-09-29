import MainPage from "./Page/mainPage/MainPage";
// import PrivateRoute from "./components/PrivateRoute";
import { Login } from "./Page/Login/Login";

let routes = [
    
    { path: '/', element: < Login /> },
    { path: 'main', element: < MainPage /> }

]

export default routes

