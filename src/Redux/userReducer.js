
const initialstate = {
  email: "",
  password: "",
  authtoken: ""
}
const userReducer = (state = initialstate, action) => {
  switch (action.type) {
      case "SET_EMAIL":
          return { ...state, email: action.payload }
      case "SET_PASSWORD":
          return { ...state, password: action.payload }
      case "SET_TOKEN":
          return { ...state, authtoken: action.payload }
      default:
          return state;
  }
}
export default userReducer