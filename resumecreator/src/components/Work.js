import React, { Component } from "react";

class Work extends Component {
    constructor() {
        super();

        this.state = {
            workArray: {
                company: '',
                position: '',
                duties: '',
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
            workArray: {
                ...prevState.workArray,
                [name] : value
            }
        }))
    }

    submitHandler = (e) => {
        this.props.handleSubmit(e, this.state.workArray);
        this.setState(prevState => ({
            disabled: !prevState.disabled,
            editable: !prevState.editable
        }))
    }

    render() {
        return (
            <div>
                <form onSubmit={(e) => this.submitHandler(e)} id="work">
                    <label htmlFor="company">Company</label>
                    <input required type="text" name="company" id="company" onChange={this.handleChange} value={this.state.workArray.company} disabled={this.state.disabled}/>
                    <label htmlFor="position">Position</label>
                    <input required type="text" name="position" id="position" onChange={this.handleChange} value={this.state.workArray.position} disabled={this.state.disabled}/>
                    <label htmlFor="duties">Job Description</label>
                    <textarea required name="duties" id="duties" onChange={this.handleChange} value={this.state.workArray.duties} disabled={this.state.disabled}/>        
                    <label htmlFor="startDate">Start Date</label>
                    <input required type="date" name="startDate" id="startDate" onChange={this.handleChange} value={this.state.workArray.startDate} disabled={this.state.disabled}/>
                    <label htmlFor="endDate">End Date</label>
                    <input required type="date" name="endDate" id="endDate" onChange={this.handleChange} value={this.state.workArray.endDate} disabled={this.state.disabled}/>
                    <button type="submit" disabled={this.state.disabled}>Submit</button>
                    <button disabled={this.state.editable}>Edit</button>
                </form>
            </div>
        )
    }
}

export default Work;