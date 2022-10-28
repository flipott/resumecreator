import React, { Component } from "react";

class Work extends Component {
    constructor() {
        super();

        this.state = {
            workArray: [{
                company: '',
                position: '',
                duties: '',
                startDate: '',
                endDate: ''}],
            disabled: false,
            formCount: 1
        };
    }

    handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        const id = e.target.id;

        this.setState(prevState => ({
            workArray: prevState.workArray.map((arr, ind) => {
                if (ind == id) return {...arr, [name] : value}
                return arr
            })
        }))
    }

    submitHandler = (e) => {
        this.props.handleSubmit(e, this.state.workArray);
        this.setState({disabled: true})
    }

    delete = (index) => {
        console.log(index);
        this.setState(prevState => ({
            workArray: prevState.workArray.filter((arr, ind) => {
                if (ind != index) return arr
            }),
            formCount: prevState.formCount - 1,
            disabled: false
        }))
    }

    generateInputs = () => {
        const arr = [];
        for (let i=0; i<this.state.formCount; i++) {
            arr.push(
                <div key={i}>
                    <label htmlFor="company">Company</label>
                    <input required type="text" name="company" id={i} onChange={this.handleChange} value={this.state.workArray[i]['company']} disabled={this.state.disabled}/>
                    <label htmlFor="position">Position</label>
                    <input required type="text" name="position" id={i} onChange={this.handleChange} value={this.state.workArray[i]['position']} disabled={this.state.disabled}/>
                    <label htmlFor="duties">Job Description</label>
                    <textarea required name="duties" id={i} onChange={this.handleChange} value={this.state.workArray[i]['duties']} disabled={this.state.disabled}/>        
                    <label htmlFor="startDate">Start Date</label>
                    <input required type="date" name="startDate" id={i} onChange={this.handleChange} value={this.state.workArray[i]['startDate']} disabled={this.state.disabled}/>
                    <label htmlFor="endDate">End Date</label>
                    <input required type="date" name="endDate" id={i} onChange={this.handleChange} value={this.state.workArray[i]['endDate']} disabled={this.state.disabled}/>
                    {this.state.formCount > 1 && (i > 0) ? <button id={i} disabled={this.state.disabled} type="button" onClick={() => this.delete(i)}>x</button> : ''}      
                    <br></br>
                </div>
            )
        }
        return arr;
    }

    addExp = () => {
        if (this.state.formCount === 5) {
            console.log("You can only have a mximum of 5 entries.");
            return false;
        }
        this.setState(prevState => ({
            formCount: prevState.formCount +1,
            workArray: [...prevState.workArray, {
                company: '',
                position: '',
                duties: '',
                startDate: '',
                endDate: ''}],
            disabled: false
        }))
    }

    edit = () => {
        this.setState({disabled: false})
    }

    render() {
        return (
            <div className="form-container">
                <h2>Work History</h2>
                <form onSubmit={(e) => this.submitHandler(e)} id="work">
                    {this.generateInputs()}
                    <button type="button" onClick={this.addExp}>+</button>
                    <button type="submit" disabled={this.state.disabled}>Submit</button>
                    <button disabled={!this.state.disabled} onClick={this.edit} type="button">Edit</button>
                </form>
            </div>
        )
    }
}

export default Work;