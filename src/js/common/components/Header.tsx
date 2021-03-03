import React from "react";
import {Navigator} from "../utils/navigation/Navigator";

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
            <div>
                <button color={"inherit"}
                        onClick={() => this.props.nav.navigateBack()}
                        disabled={!this.props.nav.isBackAvailable()}>
                    Back
                </button>
                <button color={"inherit"}
                        onClick={() => this.props.nav.navigateForward()}
                        disabled={!this.props.nav.isForwardAvailable()}>
                    Forward
                </button>
                <h6 className={"title"}>{this.props.title}</h6>
            </div>);
    }


}