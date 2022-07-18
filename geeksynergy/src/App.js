import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from './components/Header';


import Login from './components/pages/Login'
import SignUp from './components/pages/SignUp';
import CompanyInfo from './components/pages/CompanyInfo';
import Home from './components/pages/Home';
import ProtectedRoute from './components/pages/ProtectedRoutes/ProtectedRoute';

import  {AuthProvider}  from './components/AuthProvider'

function App() {
  return (
    <AuthProvider>
    <BrowserRouter>
            <Header/>
            <Routes>
            <Route path="/" element={<ProtectedRoute />}/>
            <Route path="/" element={<Home />} exact />
            <Route path="/home" element={<Home />} />
            </Routes>

            <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/Companyinfo" element={<CompanyInfo />} />
           </Routes>

           
        </BrowserRouter>
        </AuthProvider>
  );
}

export default App;
