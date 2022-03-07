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

  export const onUpdateManagerUsers =(user_id, manager) => async (dispatch) => {
    const md = { id: manager?.id, name: manager?.name, email: manager?.email };
    try {
      const assign_manager = await dispatch({
        [Fetching_Api]: {
          url: `/users/admin/users/${user_id}/assign_manager`,
          method: 'POST',
          types: [UPDATE_USERS_MANAGER, UPDATE_USERS_MANAGER_SUCCESS],
          body: md,
        },
      });
      dispatch({
        type: UPDATE_USERS_MANAGER_SUCCESS,
        body: assign_manager,
      });
      return assign_manager;
    } catch (error) {
      throw new Error('Manager Not Assigned. ' + error);
    }
  };



  export const onUpdateUsers =
  (id, name, email, designation, joining_date) =>
  async (dispatch) => {
    try {
      const updateUsers = await dispatch({
        [Fetching_Api]: {
          url: `/users/admin/users/${id}/update`,
          method: 'POST',
          types: [UPDATE_USERS_SUCCESS, UPDATE_USERS],
          body: { name, email, designation, joining_date },
        },
      });
      dispatch({
        type: UPDATE_USERS_SUCCESS,
        body: updateUsers,
      });
      return updateUsers;
    } catch (error) {
      throw new Error('Error updating users. ' + error);
    }
  };


  export const onSearchUsers = (term) => async (dispatch) => {
    try {
      const users = await dispatch({
        [Fetching_Api]: {
          url: `/users/users/search?term=${term}`,
          method: 'GET',
        },
      });
      return users;
    } catch (error) {
      alert(`${error}`);
    }
  };
  
