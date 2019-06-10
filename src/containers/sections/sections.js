import React from "react";
import SectionItem from "../sectionItem/sectionItem";
import store from "../../store";

const Sections = () => {
  const state = store.getState();
  console.log(state);

  let sects = state.sectionOrder.map(id => {
    return <SectionItem key={id} id={id} />;
  });

  return <div>{sects}</div>;
};

export default Sections;
