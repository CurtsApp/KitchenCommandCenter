import { AppBar, Button, IconButton, Toolbar, Typography } from "@material-ui/core";
import React from "react";
import { Navigator } from "../utils/navigation/Navigator";

interface Props {
    title: string;
    nav: Navigator;
}

export class Header extends React.Component<Props> {
    constructor(props: Props) {
        super(props);

    }

    render() {
        return (
            <AppBar color="primary" position="static">
                <Toolbar className="header">
                    <div className="row">
                        <Button color={"inherit"}
                            onClick={() => this.props.nav.navigateBack()}
                            disabled={!this.props.nav.isBackAvailable()}>
                            Back
                    </Button>
                        <Button color={"inherit"}
                            onClick={() => this.props.nav.navigateForward()}
                            disabled={!this.props.nav.isForwardAvailable()}>
                            Forward
                    </Button>
                    </div>

                    <Typography variant={"h6"}>{this.props.title}</Typography>
                </Toolbar>

            </AppBar>);
    }


}