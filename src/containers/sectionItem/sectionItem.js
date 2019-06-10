import React, { Component } from "react";
import store from "../../store";
import { addSection } from "../../store/actions";
import generateId from "../../helper/uniqueIdGenerator";
import "./sectionItem.css";

class SectionItem extends Component {
  constructor() {
    super();
    this.state = {
      isHovered: false
    }
    // this.isHovered = false;
  }

  addSectionHandler = () => {
    const id = generateId();
    const currId = this.props.id;
    store.dispatch(addSection(id, currId));
  }

  onHoverHandler = () => {
    this.setState({ isHovered: !this.state.isHovered })
  }

  render() {
    const classes = this.state.isHovered ? 'hl_page-creator--section active' : 'hl_page-creator--section';

    return (
      <section className={classes} onMouseEnter={this.onHoverHandler} onMouseLeave={this.onHoverHandler} >
        <h1>{this.props.id}</h1>
        <div className="hl_page-creator--actions">
          <div className="move-actions">
            <span data-tooltip="tooltip" data-placement="right" title="Up">
              <i className="icon icon-arrow-up-2" />
            </span>
            <span data-tooltip="tooltip" data-placement="right" title="Down">
              <i className="icon icon-arrow-down-2" />
            </span>
          </div>
          <div className="more-actions">
            <span data-tooltip="tooltip" data-placement="left" title="Settings">
              <i className="fas fa-cog" />
            </span>
            <span data-tooltip="tooltip" data-placement="left" title="Clone">
              <i className="far fa-eye" />
            </span>
            <span data-tooltip="tooltip" data-placement="left" title="Save">
              <i className="far fa-copy" />
            </span>
            <span data-tooltip="tooltip" data-placement="left" title="Delete">
              <i className="far fa-trash-alt" />
            </span>
          </div>
        </div>
        <span
          className="add-new-section"
          data-tooltip="tooltip"
          data-placement="bottom"
          title="Add New Section"
          onClick={this.addSectionHandler}
        >
          <i className="icon icon-plus" />
        </span>
        <div href="#" className="new-row-blank">
          <span className="btn btn-light5 btn-slim">Add New Row</span>
        </div>
      </section >
    );
  }
};

export default SectionItem;
