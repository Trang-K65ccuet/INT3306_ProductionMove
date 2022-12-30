import { Outlet, Navigate } from 'react-router-dom'
import Cookies from "universal-cookie";
const cookies = new Cookies();
const PrivateRoute = ({children, ...rest}) => {
    let auth = cookies.get('access_token');
    return(
        auth ? <Outlet/> : <Navigate to="/"/>
    )
}
export default PrivateRoute;