import React from "react";
import {Navigator} from "../common/utils/navigation/Navigator"

export interface ViewProps {
    nav: Navigator
}

export interface ViewState {

}

export abstract class View<T extends ViewProps, S extends ViewState> extends React.Component<T, S> {

}