import { numberReducer } from "./number";
import { userReducer } from "./login";

export default function reducers(state, action) {
  let newState = numberReducer(state, action);
  return userReducer(newState, action);
}
