import { MOVE_UP, MOVE_DOWN, ADD_SECTION } from "../actionTypes";

const INIT_STATE = ["_435kdf3"];

const sectionOrder = (state = INIT_STATE, action) => {
  switch (action.type) {
    case MOVE_UP:
      return state;
    case MOVE_DOWN:
      return state;
    case ADD_SECTION:
      const index = state.indexOf(action.payload.currId) + 1;
      const id = action.payload.id;
      console.log(index);
      const newArr = [
        ...state.slice(0, index),
        id,
        ...state.slice(index)
      ]
      return newArr;
    default:
      return state;
  }
};

export default sectionOrder;
