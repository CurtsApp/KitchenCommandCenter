import {Header} from "../../common/components/Header";
import React from "react";
import {Button} from "@material-ui/core";
import {View, ViewProps, ViewState} from "../View";
import {ViewType} from "../../common/utils/navigation/NavUtil";

interface Props extends ViewProps{

}

export class LandingView extends View<Props, ViewState> {
    constructor(props: Props) {
        super(props);
    }

    render() {
        return (
            <div className={"view"}>
                <Header title={"Welcome"} nav={this.props.nav}/>
                <Button onClick={() => {
                    this.props.nav.navTo(ViewType.Recipe);
                }}>Your Recipes</Button>
                <Button>New Recipe</Button>
            </div>
        );
    }
}