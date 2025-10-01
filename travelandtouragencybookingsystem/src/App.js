import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";
import LoginFormPage from './components/LoginForm';
import RegisterFormPage from './components/RegisterForm';
import TravelHomePage from './components/HomePage';
import AvailPackagePage from './components/PackagePage';
import ActivitiesPage from './components/ActivitiesPage';
import TimePage from './components/TimePage';
import ProfilePage from './components/Profile';

function App() {
  return (
    <div className="App">


      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/login" element={<LoginFormPage />} />
          <Route path="/register" element={<RegisterFormPage />} />
          <Route path="/homepage" element={<TravelHomePage />} />
          <Route path="/package/:destination" element={<AvailPackagePage />} />
          <Route path="/activities" element={<ActivitiesPage />} />
          <Route path="/datetime" element={<TimePage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
