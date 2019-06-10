import { SORT_SECTION, ADD_SECTION } from "../actionTypes";
const initState = {
  '_435kdf3': { id: "_435kdf3" }
};

const sections = (state = initState, action) => {
  switch (action.type) {
    case SORT_SECTION:
      return state;
    case ADD_SECTION:
      const updatedSections = {
        ...state,
        [action.payload.id]: { id: action.payload.id }
      }
      return updatedSections;
    default:
      return state;
  }
};

export default sections;
