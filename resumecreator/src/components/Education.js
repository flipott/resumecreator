import React, { Component } from "react";

class Education extends Component {
    constructor() {
        super();

        this.state = {
            eduArray: {
                school: '',
                study: '',
                startDate: '',
                endDate: '',
            },
            disabled: false,
            editable: true,

        };
    }

    handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        this.setState(prevState => ({
            eduArray: {
                ...prevState.eduArray,
                [name] : value
            }
        }))
    }

    submitHandler = (e) => {
        this.props.handleSubmit(e, this.state.eduArray);
        this.setState(prevState => ({
            disabled: !prevState.disabled,
            editable: !prevState.editable
        }))
    }

    render() {
        return (
            <div>
                <form onSubmit={(e) => this.submitHandler(e)} id="education">
                    <label htmlFor="school">School Name</label>
                    <input required type="text" name="school" id="school" onChange={this.handleChange} value={this.state.eduArray.school} disabled={this.state.disabled}/>
                    <label htmlFor="study">Area of Study</label>
                    <input required type="text" name="study" id="study" onChange={this.handleChange} value={this.state.eduArray.study} disabled={this.state.disabled}/>
                    <label htmlFor="startDate">Start Date</label>
                    <input required type="date" name="startDate" id="startDate" onChange={this.handleChange} value={this.state.eduArray.startDate} disabled={this.state.disabled}/>
                    <label htmlFor="endDate">End Date</label>
                    <input required type="date" name="endDate" id="endDate" onChange={this.handleChange} value={this.state.eduArray.endDate} disabled={this.state.disabled}/>
                    <button type="submit" disabled={this.state.disabled}>Submit</button>
                    <button disabled={this.state.editable}>Edit</button>
                </form>
            </div>
        )
    }
}

export default Education;