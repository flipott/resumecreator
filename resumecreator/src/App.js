import React, { Component } from "react";
import Information from "./components/Information"; 
import Education from "./components/Education";
import Work from "./components/Work";
import Generate from "./components/Generate";

class App extends Component {

  constructor() {
    super();

    this.state = {
      information: {},
      education: {},
      work: {}
    };
  }

  handleSubmit = (e, submitData) => {
    e.preventDefault();
    const targetName = e.target.id;
    this.setState({
      [targetName] : submitData
     }
    );
    console.log(this.state.education);
  }

  render() {
    return (
      <div>
        <Information handleSubmit={this.handleSubmit} />
        <Education handleSubmit={this.handleSubmit} />
        <Work handleSubmit={this.handleSubmit} />
        <Generate information={this.state.information} education={this.state.education} work={this.state.work}/>
      </div>
    )
  }
}

export default App;


// Think about how to structure your application into components. Your application should include:

//     A section to add general information like name, email, phone number.
//     A section to add your educational experience (school name, title of study, date of study)
//     A section to add practical experience (company name, position title, main tasks of your jobs, date from and until when you worked for that company)

// Be sure to include an edit and submit button for each section or for the whole CV, your preference. The submit button should submit your form and display the value of your input fields in HTML elements. The edit button should add back (display) the input fields, with the previously displayed information as values. In those input fields, you should be able to edit and resubmit the content. You’re going to make heavy use of state and props, so make sure you understood those concepts.
// Create a components folder in your src directory and add your components.
// Include a styles folder in your src directory for your CSS files. You’ll need to import these in the component files to use them.
// Don’t forget to push your solution to GitHub. You should be proud of your work and show it off to the world!