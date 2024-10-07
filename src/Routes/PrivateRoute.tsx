 
import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';  

const PrivateRoute: React.FC = () => {
  const token = useSelector((state: RootState) => state.auth.user.token);  
  const tokenLocal = localStorage.getItem('token'); 
  if (!token && !tokenLocal) {
    return <Navigate to="/login" />;
  } 
 
  return <Outlet />;
};

export default PrivateRoute;
