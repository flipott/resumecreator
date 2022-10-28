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
    console.log(this.state.information);
  }

  render() {
    return (
      <div className="main">
        <div className="title-container">
          <h1>Resume Creator</h1>
          <h3>
            Fill and submit all three sections and then
            click the "Generate" button at the bottom of the page.
          </h3>
        </div>
        <Information handleSubmit={this.handleSubmit} />
        <Education handleSubmit={this.handleSubmit} />
        <Work handleSubmit={this.handleSubmit} />
        <Generate information={this.state.information} education={this.state.education} work={this.state.work}/>
      </div>
    )
  }
}

export default App;