import React from "react";
import {Header} from "../../common/components/Header";
import {List, ListItem} from "@material-ui/core";
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
                <List>
                    <ListItem button>
                        Recipe 1
                    </ListItem>
                    <ListItem button>
                        Recipe 2
                    </ListItem>
                </List>
            </div>
        );

    }
}