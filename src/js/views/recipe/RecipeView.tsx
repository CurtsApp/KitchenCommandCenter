import React from "react";
import {Header} from "../../common/components/Header";
import {View, ViewProps, ViewState} from "../View";


interface Props extends ViewProps {

}

export class RecipeView extends View<Props, ViewState> {
    constructor(props: Props) {
        super(props);

    }

    render() {
        return (
            <div>
                <Header title={"Your Recipes"} nav={this.props.nav}/>
                <ul>
                    <li>
                        Recipe 1
                    </li>
                    <li>
                        Recipe 2
                    </li>
                </ul>
            </div>
        );

    }
}