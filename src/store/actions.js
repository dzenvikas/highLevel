import { ADD_SECTION, REMOVE_SECTION, MOVE_UP, MOVE_DOWN } from "./actionTypes";

export const addSection = (id, currId) => ({
    type: ADD_SECTION, payload: { id, currId }
});
export const removeSection = () => ({ type: REMOVE_SECTION });
export const moveUp = () => ({ type: MOVE_UP });
export const moveDown = () => ({ type: MOVE_DOWN });