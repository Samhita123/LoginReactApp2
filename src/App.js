import logo from './logo.svg';
import { BrowserRouter as Router, Switch, Route, Routes } from 'react-router-dom'
import './App.css';
import HomePage from './Components/HomePage';
import LandingPage from './Components/LandingPage';
import ForgotPasswordPage from './Components/ForgotPasswordPage'
import LoginPage from './Components/LoginPage';
import RegisterPage from './Components/RegisterPage'
import EmployeePage from './Components/EmployeePage';

export default function App() {
  return (
    <Router>
            <div>
                <Routes>
                    <Route exact path="/" element={ <LandingPage /> } />
                    <Route path="/login" element={ <LoginPage />} />
                    <Route path="/register" element={ <RegisterPage />} />
                    <Route path="/forget-password" element={ <ForgotPasswordPage />} />
                    <Route path="/home" element={ <HomePage />} />
                    <Route path="/employee" element={<EmployeePage />}/>
                </Routes>
                
            </div>
        </Router>
  );
}


