import { combineReducers } from "redux";
import sections from "./sections";
import sectionOrder from "./sectionOrder";

const combinedReducers = combineReducers({ sections, sectionOrder });

export default combinedReducers;
