import {DEFAULT_VIEW, NavFrame, ViewDetails, ViewType} from "./NavUtil";
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
    private readonly forceRedraw: () => void;
    private frames: NavFrame[];
    private activeFrameIndex: number;

    constructor(redraw: () => void) {
        this.forceRedraw = redraw;
        this.frames = [];
        this.activeFrameIndex = -1;
        this.navTo(DEFAULT_VIEW);
    }

    navTo(viewType: ViewType) {
        const currentFrame = this.getCurrentFrame();
        if(currentFrame === undefined || viewType !== currentFrame.type) {
            this.frames = this.frames.slice(0, this.activeFrameIndex + 1);
            this.pushToHistory({
                type: viewType,
                data: {}
            });
            this.activeFrameIndex++;
            this.forceRedraw();
        }

    }
    public isBackAvailable(): boolean {
        return this.frames.length > 1;
    }

    public isForwardAvailable(): boolean {
        return this.activeFrameIndex < this.frames.length - 1;
    }

    public navigateBack() {
        if(this.isBackAvailable()) {
            this.activeFrameIndex--;
            this.forceRedraw();
        }
    }

    public navigateForward() {
        if(this.isForwardAvailable()) {
            this.activeFrameIndex++;
            this.forceRedraw();
        }
    }

    getCurrentView() {
        return this.getViewDetails(this.getCurrentFrame().type).getView(this);
    }

    private getViewDetails(viewType: ViewType): ViewDetails {
        for (const viewDetails of VIEWS) {
            if (viewDetails.type === viewType) {
                return viewDetails;
            }
        }
        throw new Error("View type not found");
    }

    private pushToHistory(frame: NavFrame) {
        this.frames.push(frame);
    }

    private getCurrentFrame(): NavFrame {
        return this.frames[this.activeFrameIndex];
    }

}