import { Fetch_users } from '../Type/usertype';

const initialState = {
  users: [],
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case Fetch_users: {
      return {
        ...state,
        users: action.users.users,
        page: action.users.page,
        limit: action.users.limit,
        totalMatches: action.users.totalMatches
      };
    }
  }
  return state;
}
