import React, { Component } from "react";

class Generate extends Component {
    constructor() {
        super();
        this.state = {
        };
    }

    clickHandler = () => {
        const {information, education, work} = this.props;
        console.log(information);
    }

    render() {
        const {information, education, work} = this.props;
        return (
            <div>
                <button onClick={this.clickHandler}
                        disabled={Object.keys(information).length === 0 || 
                                  Object.keys(education).length  === 0 ||
                                  Object.keys(work).length === 0}>
                    Generate Resume</button>
            </div>
        )
    }
}

export default Generate;