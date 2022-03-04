import {Fetching_Api} from "../middlewares"
import  {Fetch_users} from "../Type/usertype"

export const getusers = ()=>async(dispatch)=>{
    console.log("accessed")
try{
const users=await dispatch({
    [Fetching_Api]:{
            url :`/users/admin/users`,
            method:"GET"
    }

})


dispatch({
    type:Fetch_users,
    users:users
})
return users;

}catch(error){
alert(`${error}`)
}
}


export const onGetUsersbyId = (users_id) => async (dispatch) => {
    console.log("on get user accessed")
    try {
      const getUsersbyId = await dispatch({
        [Fetching_Api]: {
          url: `/users/admin/users/${users_id}`,
          method: 'GET',
        },
      });
      return getUsersbyId ;
    } catch (error) {
      alert(error);
    }
  };