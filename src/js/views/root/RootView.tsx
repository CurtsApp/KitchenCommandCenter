import React, {ReactElement} from "react";
import {Navigator} from "../../common/utils/navigation/Navigator";
import {ViewType} from "../../common/utils/navigation/NavUtil";
import {LandingView} from "../landing/LandingView";
import {RecipeView} from "../recipe/RecipeView";

interface Props {

}

interface State {
    navigator: Navigator;
}

export class RootView extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            navigator: new Navigator(() => this.setState(this.state))
        }

    }

    render() {
        return this.state.navigator.getCurrentView()
    }

}