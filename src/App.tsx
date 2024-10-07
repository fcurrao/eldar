import { BrowserRouter as Router, Routes, Route , Navigate } from 'react-router-dom';
import PrivateRoute from './Routes/PrivateRoute';
import { useSelector } from 'react-redux';
import { RootState } from './redux/store'; 
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import Home from './pages/Home';

const App: React.FC = () => {
  const { token } = useSelector((state: RootState) => state.auth.user);   

  return (
    <Router>
      <Routes> 
        <Route path="/login" element={!token ? <Login /> : <Navigate to="/home" />} /> 
        <Route path="/home" element={<PrivateRoute />}>
          <Route index element={<Home />} />
        </Route> 
        <Route path="/" element={<PrivateRoute />}>
          <Route index element={<Home />} />
        </Route>  
        <Route path="*" element={<NotFound />} /> 
      </Routes>
    </Router>
  );
};

export default App;