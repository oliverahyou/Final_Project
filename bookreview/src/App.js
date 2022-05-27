import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Browse from './components/Browse';
import Login from './components/Login';
import Signup from './components/Signup';
import Reviews from './components/Reviews';
import Review from './components/Review';


function App() {
  return (
    <div className="App">
     <Routes>
     <Route path="/" element={<Home />} />
     <Route path="browse" element={<Browse />} />
     <Route path="login" element={<Login />} />
     <Route path="signup" element={<Signup />} />
     <Route path="reviews" element={<Reviews />} />
     <Route path="review" element={<Review />} />
     

     
    </Routes> 
    
      
    </div>
  );
}

export default App;
