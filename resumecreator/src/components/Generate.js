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
                        <p className="name">{information.firstName} {information.lastName}</p>
                        <p className="information">{information.street}, {information.city}, {information.state} {information.zip} | {information.phone} | {information.email}</p>
                    </div>
                    <div className="objective">
                        <p className="title">Objective</p>
                        <p className="objective">{information.objective}</p>
                    </div>
                    <div className="education">
                        <p className="title">Education</p>
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
                    <div className="work">
                        <p className="title">Work</p>
                        {work.map(entry => {
                            return (
                            <>
                                <p>{entry.company}</p>
                                <p>{entry.duties}</p>
                                <p>{entry.position}</p>
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