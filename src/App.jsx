
import HomePage from './pages/HomePage';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import LoginPage from './pages/LoginPage';
import { useSelector } from 'react-redux';
import Adminpage from './pages/Adminpage';
import UsersPage from './pages/UsersPage';


function App() {

  const isLoggedIn = useSelector(state => state.admin.isLoggedIn || false);

  return (
 
    <Router>
  <Routes>
  {isLoggedIn ? (<Route path="/" element={<HomePage />} /> ) : (<Route path="/" element={<LoginPage />} />)}
<Route path="/admin"   element={isLoggedIn ? <Adminpage /> : <Navigate to="/" />} />
<Route path="/users"   element={isLoggedIn ? <UsersPage /> : <Navigate to="/" />} />
</Routes>

  </Router>
    
    


  

  );
}

export default App;
