import React from 'react';
import { createContext, useState, useEffect } from 'react';
const Authcontext = createContext();
import { useNavigate } from 'react-router-dom';
export default Authcontext;

export const AuthProvider = ({ children }) => {
  let navigate = useNavigate();
  let login = async (e) => {
    e.preventDefault();
    

    try {
      const proxy = 'https://cors-anywhere.herokuapp.com/';
      const mainurl = 'https://lms-dev.webileapps.io';
      console.log(email, password);
      let result = await fetch(
        `https://lms-dev.webileapps.io/api/users/admin/login`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            email: email,
            password: password,
          }),
        }
      );
      console.log(result);
      result = await result.json();

      setAuthToken(result.token);

      console.log('result:', result);
      console.log(result.token);
      localStorage.setItem('authToken', JSON.stringify(result));
      setUser('a');
      navigate('/admin');
      // if (email === "webileadmin@webileapps.com" && password === "webile@123") {
      //   navigate('/admin');
      // } else {
      //   // alert("enter correct password")
      //   navigate("/")
      // }
    } catch (err) {
      console.log(err);
      alert(err.message);
    }
  };

  const changeemail = (e) => {
    setemail(e.target.value);
  };
  const changepassword = (e) => {
    setpassword(e.target.value);
  };
  const [user, setUser] = useState(null);
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [authToken, setAuthToken] = useState(null);
  let contextData = {
    login: login,
    changeemail: changeemail,
    changepassword: changepassword,
    user: setUser,
    authToken: authToken,
  };
  return (
    <Authcontext.Provider value={contextData}>{children}</Authcontext.Provider>
  );
};
