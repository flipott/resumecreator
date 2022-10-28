import React, { Component } from "react";


class Generate extends Component {
    constructor() {
        super();
        this.state = {
            displayResume: false
        };
    }

    clickHandler = () => {
        this.setState({displayResume: true});
    }

    hideResume = () => {
        this.setState({displayResume: false});
    }

    render() {
        const {information, education, work} = this.props;
        return (
            <div>
                <button onClick={this.clickHandler}
                        className="generate-btn"
                        disabled={!Object.keys(information).length|| 
                                  !Object.keys(education).length ||
                                  !Object.keys(work).length}>
                    Generate Resume</button>
                {this.state.displayResume && <button onClick={this.hideResume}>x</button>}
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
                                <p className="dates">{entry.startYear} - {entry.endYear}</p>
                                <p className="bold">{entry.school}</p>
                                <p className="body-text">{entry.schoolCity}, {entry.schoolState}</p>
                                <p className="body-text">{entry.study}</p>
                                <p className="body-text">{entry.degree}</p>
                            </>
                            )
                        })}
                    </div>
                    <div className="work">
                        <p className="title">Experience</p>
                        {work.map(entry => {
                            return (
                            <>
                                <p className="dates">{entry.startDate} - {entry.endDate}</p>
                                <p className="bold">{entry.company}</p>
                                <p className="body-text">{entry.position}</p>
                                <p className="body-text">{entry.duties}</p>
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