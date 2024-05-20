import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProfilePage from './pages/Profile';
import Users from './pages/Users';
import Register from './pages/Register';
import HomePage from './pages/HomePage';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
