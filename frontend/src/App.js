import './App.css';
import PrivateRoute from './utils/PrivateRoute';
import { AuthProvider } from './context/AuthContext';
import { Routes, Route } from "react-router-dom";

import Navbar from './views//Navbar';
import Dashboard from './views/Dashboard';
import Loginpage from './views/Loginpage';
import Registerpage from './views/Registerpage';
import HomePage from './views/HomePage';

function App() {
  return (

      <AuthProvider>
        <Navbar />  {/* Always visible */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Loginpage />} />
          <Route path="/register" element={<Registerpage />} />
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
        </Routes>
      </AuthProvider>
  );
}

export default App;
