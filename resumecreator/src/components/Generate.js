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
                {this.state.displayResume && 
                <div className="generated">
                    <div className="header">
                        <h1>{information.firstName} {information.lastName}</h1>
                        <h2>{information.phone} {information.email}</h2>
                    </div>
                    <div className="education">
                        <h1>Education History</h1>
                        {education.map(entry => {
                            return (
                            <>
                                <p>{entry.school}</p>
                                <p>{entry.study}</p>
                                <p>{entry.startDate}</p>
                                <p>{entry.endDate}</p>
                            </>
                            )
                        })}
                    </div>

                </div>
                }
            </div>
        )
    }
}

export default Generate;