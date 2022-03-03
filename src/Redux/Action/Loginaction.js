
import { Fetching_Api } from "../middlewares";
import { LOGIN_SUCCESS, LOGOUT_SUCCESS } from "../Type/logintype"
// import {useNavigate} from "react-router"
// let navigate =useNavigate()

export const userLogin=(body)=>async(dispatch)=>{
    try{
        const data=await dispatch({
         type:Fetching_Api,
         [Fetching_Api] : {  url:`/users/admin/login`,
            method:"POST",
            body,
        }
    
        })
        dispatch({
            type:LOGIN_SUCCESS,
            body:{...data}

        })
        return data;
    }catch(error){
        console.log(error);
    }
}

export const logout = () => ({
    type: LOGOUT_SUCCESS,
  });



