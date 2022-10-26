import React, { Component } from "react";

class Education extends Component {
    constructor() {
        super();

        this.state = {
            eduArray: [{
                school: '',
                study: '',
                startDate: '',
                endDate: ''}],
            disabled: false,
            formCount: 1,
        };
    }

    handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        const id = e.target.id;

        this.setState(prevState => ({
            eduArray: prevState.eduArray.map((arr, ind) => {
                if (ind == id) return {...arr, [name]: value}
                return arr
            })
        }))
    }

    submitHandler = (e) => {
        this.props.handleSubmit(e, this.state.eduArray);
        this.setState(prevState => ({
            disabled: true,
        }))
    }

    delete = (index) => {
        this.setState(prevState => ({
            eduArray: prevState.eduArray.filter((arr, ind) => {
                if (ind != index) return arr
            }),
            formCount: prevState.formCount - 1,
            disabled: false
        }))
    }

    generateInputs = () => {
        const test = [];
        for (let i=0; i<this.state.formCount; i++) {
            test.push(
                <div key={i}>
                    <label htmlFor="school">School Name</label>
                    <input required type="text" name="school" id={i} onChange={this.handleChange} value={this.state.eduArray[i]['school']} disabled={this.state.disabled}/>
                    <label htmlFor="study">Area of Study</label>
                    <input required type="text" name="study" id={i} onChange={this.handleChange} value={this.state.eduArray[i]['study']} disabled={this.state.disabled}/>
                    <label htmlFor="startDate">Start Date</label>
                    <input required type="date" name="startDate" id={i} onChange={this.handleChange} value={this.state.eduArray[i]['startDate']} disabled={this.state.disabled}/>
                    <label htmlFor="endDate">End Date</label>
                    <input required type="date" name="endDate" id={i} onChange={this.handleChange} value={this.state.eduArray[i]['endDate']} disabled={this.state.disabled}/>
                    {this.state.formCount > 1 && (i > 0) ? <button id={i} disabled={this.state.disabled} type="button" onClick={() => this.delete(i)}>x</button> : ''}      
                    <br></br> 
                </div>
            )
        }
        return test;
    }

    addExp = () => {
        if (this.state.formCount === 5) {
            console.log("You can only have a maximum of 5 entries.")
            return false;
        }
        this.setState(prevState => ({
           formCount: prevState.formCount + 1,
           eduArray: [...prevState.eduArray, {
            school: '',
            study: '',
            startDate: '',
            endDate: ''}],
            disabled: false
        }))
    }

    edit = () => {
        this.setState(prevState => ({
            disabled: false
        }))
    }

    render() {
        return (
            <div>
                <form onSubmit={(e) => this.submitHandler(e)} id="education">
                    {this.generateInputs()}
                    <button type="button" onClick={this.addExp}>+</button>
                    <button type="submit" disabled={this.state.disabled}>Submit</button>
                    <button disabled={!this.state.disabled} onClick={this.edit} type="button">Edit</button>
                </form>
            </div>
        )
    }
}

export default Education;