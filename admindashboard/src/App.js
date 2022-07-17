import './App.css';

import { Navigate, Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home';
import Signin from './pages/Signin/Signin';
import Signup from './pages/signup/Signup';
import ForgotPassword from './pages/forgotpassword/ForgotPassword';

import { useEffect } from 'react';
import UserInfo from './container/userinfo/UserInfo';
import ListGroup from './container/listgroup/ListGroup';
import Setting from './container/setting/Setting';
import { useSelector } from 'react-redux';
function App() {
  
  let stateGet=useSelector(state => state);
  const isLoggedIn = localStorage.getItem("login")

  // const isLoggedIn = stateGet.userGetInfo.isLogin

  // console.log(isLoggedIn);
  if (isLoggedIn !== 'true' ) {
    return (
      <div className='App'>
        <Routes>
          <Route path="/sign-in" element={<Signin />} />
          <Route path="/sign-up" element={<Signup />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/" element={<Navigate to="/sign-in" />} />

        </Routes>
      </div>
    );
  }
  else
    return (
      <div className='App'>
        <Routes>
          <Route path="/sign-in" element={<Signin />} />
          <Route path="/sign-up" element={<Signup />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/" element={<Home />} >
            <Route path='/user-info' element={<UserInfo />} />
            <Route path='/list-groups' element={<ListGroup />} />
            <Route path='/settings' element={<Setting />} />
          </Route>
        </Routes>
      </div>
    );

}

export default App;
