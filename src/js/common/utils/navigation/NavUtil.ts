import {ReactElement} from "react";
import {ViewProps} from "../../../views/View";
import {Navigator} from "./Navigator";

export interface ViewDetails {
    type: ViewType;
    getView: (nav: Navigator) => ReactElement<ViewProps>;
}

export interface NavFrame {
    type: ViewType;
    data: any; // This is the model that the view needs 
}

export enum ViewType {
    Recipe,
    NewRecipe,
    Landing
}

export const DEFAULT_VIEW = ViewType.Landing;