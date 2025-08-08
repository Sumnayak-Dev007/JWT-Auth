import './App.css';
import { AuthProvider } from './context/AuthContext'
import {BrowserRouter as Router} from "react-router-dom"

function App() {
  return (
    <Router>
      <AuthProvider>

      </AuthProvider>
    </Router>
    
  );
}

export default App;
