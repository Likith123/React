import './App.css';
import React, {useEffect} from 'react';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import {auth} from './firebase';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import { useStateValue } from './StateProvider';
function App() {
  const [{},dispatch] = useStateValue();
//will only runs when the app component loads
  useEffect(()=>
  {
      auth.onAuthStateChanged(authUser => {
        if(authUser)
        {
            dispatch({
              type: 'SET-USER',
              user: authUser
            })
        }
        else{
            dispatch({
              type: 'SET-USER',
              user: null
            })
        }
      })
  },[])
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
