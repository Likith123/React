import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={[<Login/>]}/>
          <Route path="/" element={[<Header/>,<Home/>]}/>
          <Route path="/checkout" element={[<Header/>,<Checkout/>]} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
