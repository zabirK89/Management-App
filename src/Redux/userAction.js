import * as types from "./Actiontype"
import { useNavigate } from "react-router-dom"

export const setEmail = (email) => {
  return {
    type: "SET_EMAIL",
    payload: email,

  }
}

export const setPassword = (password) => {
  return {
    type: "SET_PASSWORD",
    payload: password,

  }
}

 

export const userLogin = (obj) => async (dispatch) => {
 
  try {

    let result = await fetch("http://localhost:3000/api/users/admin/login", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "Accept": "application/json"
      },
      body: JSON.stringify({
        'email': obj.email,
        'password': obj.password
      })
    })
    result = await result.json();
    // console.log(result);
    localStorage.setItem("authToken", JSON.stringify(result))
    
    // console.log('result:', result);
    // console.log(result.token);
    // localStorage.setItem('authToken', JSON.stringify(result));
   

    dispatch({
      type: "SET_TOKEN",
      payload: result.token
    })
  }
  catch (err) {
    alert(err.message);
  }
}


