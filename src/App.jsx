import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import UserSignUp from './pages/user/UserSignup';
import UserProfile from './pages/user/UserProfile';
import CaptainSignup from './pages/captain/CaptainSignup';
import CaptainProfile from './pages/captain/CaptainProfile';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />
        <Route path="/users/signup" element={<UserSignUp />} />
        <Route path="/users/profile" element={<UserProfile />} />
        <Route path="/captains/signup" element={<CaptainSignup />} />
        <Route path="/captains/profile" element={<CaptainProfile />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}