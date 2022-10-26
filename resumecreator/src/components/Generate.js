import React, { Component } from "react";

class Generate extends Component {
    constructor() {
        super();
        this.state = {
        };
    }

    clickHandler = () => {
        const {information, education, work} = this.props;
    }

    render() {
        const {information, education, work} = this.props;
        return (
            <div>
                <button onClick={this.clickHandler}
                        disabled={!Object.keys(information).length|| 
                                  !Object.keys(education).length ||
                                  !Object.keys(work).length}>
                    Generate Resume</button>
            </div>
        )
    }
}

export default Generate;