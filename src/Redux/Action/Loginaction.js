
import { Fetching_Api } from "../middlewares";
import { LOGIN_SUCCESS, LOGOUT_SUCCESS } from "../Type/logintype"


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



// export const userLogin = (obj) => async (dispatch) => {
//     const navigate=useNavigate()
//      try {
   
//        let result = await fetch("http://localhost:3000/api/users/admin/login", {
//          method: 'POST',
//          headers: {
//            'Content-Type': 'application/json',
//            "Accept": "application/json"
//          },
//          body: JSON.stringify({
//            'email': obj.email,
//            'password': obj.password
//          })
//        })
//        result = await result.json();
//        console.log(result);
//        localStorage.setItem("authToken", JSON.stringify(result))
       
//        // console.log('result:', result);
//        // console.log(result.token);
//        // localStorage.setItem('authToken', JSON.stringify(result));
      
//        if (email === "webileadmin@webileapps.com" && password === "webile@123") {
//            navigate('/admin');
//          } else {
//            // alert("enter correct password")
//            navigate("/")
//          }
   
//        dispatch({
//          type: "SET_TOKEN",
//          payload: result.token
//        })
//      }
//      catch (err) {
//        alert(err.message);
//      }
//    }
   
   

   