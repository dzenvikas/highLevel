import React, { Component } from "react";

class RowItem extends Component {
    render() {
        return (
            <div class="hl_page-creator--row">
                <div class="hl_page-creator--actions">
                    <div class="move-actions">
                        <span data-tooltip="tooltip" data-placement="top" title="Up"><i class="icon icon-arrow-up-2"></i></span>
                        <span data-tooltip="tooltip" data-placement="top" title="Down"><i class="icon icon-arrow-down-2"></i></span>
                    </div>
                    <div class="more-actions">
                        <span data-tooltip="tooltip" data-placement="top" title="Settings"><i class="fas fa-cog"></i></span>
                        <span data-tooltip="tooltip" data-placement="top" title="Clone"><i class="far fa-eye"></i></span>
                        <span data-tooltip="tooltip" data-placement="top" title="Save"><i class="far fa-copy"></i></span>
                        <span data-tooltip="tooltip" data-placement="top" title="Delete"><i class="far fa-trash-alt"></i></span>
                    </div>
                </div>
                <span class="add-new-row" data-tooltip="tooltip" data-placement="bottom" title="Add New Row"><i class="icon icon-plus"></i></span>
                <div class="hl_page-creator--column">
                    <div href="#" class="new-element-blank">
                        <span class="btn btn-light6 btn-slim">Add New Element</span>
                    </div>
                </div>
            </div>
        )
    }

};
export default RowItem;