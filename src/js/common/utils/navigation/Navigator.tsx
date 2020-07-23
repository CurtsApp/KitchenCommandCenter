import {DEFAULT_VIEW, ViewDetails, ViewType} from "./NavUtil";
import React from "react";
import {LandingView} from "../../../views/landing/LandingView";
import {RecipeView} from "../../../views/recipe/RecipeView";

const VIEWS: ViewDetails[] = [{
    type: ViewType.Landing,
    getView: (nav: Navigator) => <LandingView nav={nav}/>
}, {
    type: ViewType.Recipe,
    getView: (nav: Navigator) => <RecipeView nav={nav}/>
}];

export class Navigator {
    currentView: ViewType;
    forceRedraw: () => void;

    constructor(redraw: () => void) {
        this.currentView = DEFAULT_VIEW;
        this.forceRedraw = redraw;
    }

    changeView(viewType: ViewType) {
        if(viewType !== this.currentView) {
            this.currentView = viewType;
            this.forceRedraw();
        }

    }

    getCurrentView() {
        return this.getViewDetails(this.currentView).getView(this);
    }

    getViewDetails(viewType: ViewType): ViewDetails {
        for (const viewDetails of VIEWS) {
            if (viewDetails.type === viewType) {
                return viewDetails;
            }
        }
        throw new Error("View type not found");
    }

}