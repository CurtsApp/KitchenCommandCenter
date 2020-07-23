import {AppBar} from "@material-ui/core";
import React from "react";

interface Props {
    title: string;
}

export class Header extends React.Component<Props> {
    constructor(props: Props) {
        super(props);

    }

    render() {
        return (
            <AppBar color="primary" position="static">
                <h1>{this.props.title}</h1>
            </AppBar>);
    }


}