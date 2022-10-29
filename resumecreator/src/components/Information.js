import React, { Component } from "react";

class Information extends Component {
    constructor() {
        super();

        this.state = {
            infoArray: {
                firstName: '',
                lastName: '',
                email: '',
                phone: '',
                street: '',
                city: '',
                state: '',
                zip: '',
                objective: ''
            },
            disabled: false
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
    }

    edit = () => {
        this.setState({disabled: false});
    }

    render() {
        return (
            <div className="form-container">
                <h2>Personal Information</h2>
                <form onSubmit={(e) => this.submitHandler(e)} id="information">
                        <fieldset>
                            <div>
                                <label htmlFor="firstName">First Name</label>
                                <input required type="text" maxLength="20" name="firstName" id="firstName" onChange={this.handleChange} value={this.state.infoArray.firstName} disabled={this.state.disabled}/>
                            </div>
                            <div>
                                <label htmlFor="lastName">Last Name</label>
                                <input required type="text" maxLength="20" name="lastName" id="lastName" onChange={this.handleChange} value={this.state.infoArray.lastName} disabled={this.state.disabled} />
                            </div>
                            <div>
                                <label htmlFor="email">Email</label>
                                <input required type="email" maxLength="40" name="email" id="email" onChange={this.handleChange} value={this.state.infoArray.email} disabled={this.state.disabled}/>
                            </div>
                            <div>
                                <label htmlFor="phone">Phone Number</label>
                                <input required type="tel" maxLength="22" name="phone" id="phone" onChange={this.handleChange} value={this.state.infoArray.phone} disabled={this.state.disabled} />
                            </div>
                            <div>
                                <label htmlFor="street">Address</label>
                                <input required type="text" maxLength="20" name="street" id="street" onChange={this.handleChange} value={this.state.infoArray.street} disabled={this.state.disabled} />
                            </div>
                            <div>
                                <label htmlFor="city">City</label>
                                <input required type="text" maxLength="20" name="city" id="city" onChange={this.handleChange} value={this.state.infoArray.city} disabled={this.state.disabled} />
                            </div>
                            <div>
                                <label htmlFor="state">State</label>
                                <select required name="state" id="state" onChange={this.handleChange} value={this.state.infoArray.state} disabled={this.state.disabled}>
                                    <option value="" disabled selected>State</option>
                                    <option value="AL">Alabama</option>
                                    <option value="AK">Alaska</option>
                                    <option value="AZ">Arizona</option>
                                    <option value="AR">Arkansas</option>
                                    <option value="CA">California</option>
                                    <option value="CO">Colorado</option>
                                    <option value="CT">Connecticut</option>
                                    <option value="DE">Delaware</option>
                                    <option value="DC">District Of Columbia</option>
                                    <option value="FL">Florida</option>
                                    <option value="GA">Georgia</option>
                                    <option value="HI">Hawaii</option>
                                    <option value="ID">Idaho</option>
                                    <option value="IL">Illinois</option>
                                    <option value="IN">Indiana</option>
                                    <option value="IA">Iowa</option>
                                    <option value="KS">Kansas</option>
                                    <option value="KY">Kentucky</option>
                                    <option value="LA">Louisiana</option>
                                    <option value="ME">Maine</option>
                                    <option value="MD">Maryland</option>
                                    <option value="MA">Massachusetts</option>
                                    <option value="MI">Michigan</option>
                                    <option value="MN">Minnesota</option>
                                    <option value="MS">Mississippi</option>
                                    <option value="MO">Missouri</option>
                                    <option value="MT">Montana</option>
                                    <option value="NE">Nebraska</option>
                                    <option value="NV">Nevada</option>
                                    <option value="NH">New Hampshire</option>
                                    <option value="NJ">New Jersey</option>
                                    <option value="NM">New Mexico</option>
                                    <option value="NY">New York</option>
                                    <option value="NC">North Carolina</option>
                                    <option value="ND">North Dakota</option>
                                    <option value="OH">Ohio</option>
                                    <option value="OK">Oklahoma</option>
                                    <option value="OR">Oregon</option>
                                    <option value="PA">Pennsylvania</option>
                                    <option value="RI">Rhode Island</option>
                                    <option value="SC">South Carolina</option>
                                    <option value="SD">South Dakota</option>
                                    <option value="TN">Tennessee</option>
                                    <option value="TX">Texas</option>
                                    <option value="UT">Utah</option>
                                    <option value="VT">Vermont</option>
                                    <option value="VA">Virginia</option>
                                    <option value="WA">Washington</option>
                                    <option value="WV">West Virginia</option>
                                    <option value="WI">Wisconsin</option>
                                    <option value="WY">Wyoming</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="zip">Zip Code</label>
                                <input required type="text" maxLength="5" name="zip" id="zip" onChange={this.handleChange} value={this.state.infoArray.zip} disabled={this.state.disabled} />
                            </div>
                            <div id="objective-container">
                                <label htmlFor="objective">Objective</label>
                                <textarea required maxLength="137" name="objective" id="objective" onChange={this.handleChange} value={this.state.infoArray.objective} disabled={this.state.disabled} />
                            </div>
                    </fieldset>
                    <div className="submit-row">
                        <button type="submit" className="save" disabled={this.state.disabled}>Save</button>
                        <button disabled={!this.state.disabled} onClick={this.edit} className="edit" type="button">Edit</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Information;