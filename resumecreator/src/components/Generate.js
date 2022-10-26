import React, { Component } from "react";

class Generate extends Component {
    constructor() {
        super();
        this.state = {
            displayResume: false
        };
    }

    clickHandler = () => {
        const {information, education, work} = this.props;
        this.setState({displayResume: true});
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
                {this.state.displayResume && <h1>{information.firstName}</h1>}
            </div>
        )
    }
}

export default Generate;