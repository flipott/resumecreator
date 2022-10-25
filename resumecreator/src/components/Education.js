import React, { Component } from "react";

class Education extends Component {
    constructor() {
        super();

        this.state = {
            infoArray: {
                firstName: '',
                lastName: '',
                email: '',
                phone: '',
            },
            disabled: false,
            editable: true,

        };
    }

    handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        this.setState(prevState => ({
            infoArray: {
                ...prevState.infoArray,
                [name] : value
            }
        }))
    }

    submitHandler = (e) => {
        this.props.handleSubmit(e, this.state.infoArray);
        this.setState(prevState => ({
            disabled: !prevState.disabled,
            editable: !prevState.editable
        }))
        console.log(this.state.disabled);
    }

    render() {
        return (
            <div>
                <form onSubmit={(e) => this.submitHandler(e)} id="information">
                    <label htmlFor="firstName">First Name</label>
                    <input required type="text" name="firstName" id="firstName" onChange={this.handleChange} value={this.state.firstName} disabled={this.state.disabled}/>
                    <label htmlFor="lastName">Last Name</label>
                    <input required type="text" name="lastName" id="lastName" onChange={this.handleChange} value={this.state.lastName} disabled={this.state.disabled} />
                    <label htmlFor="email">Email</label>
                    <input required type="email" name="email" id="email" onChange={this.handleChange} value={this.state.email} disabled={this.state.disabled}/>
                    <label htmlFor="phone">Phone Number</label>
                    <input required type="tel" name="phone" id="phone" onChange={this.handleChange} value={this.state.phone} disabled={this.state.disabled} />
                    <button type="submit" disabled={this.state.disabled}>Submit</button>
                    <button disabled={this.state.editable}>Edit</button>
                </form>
            </div>
        )
    }
}

export default Education;