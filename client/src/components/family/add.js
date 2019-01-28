import React, { Component } from 'react';
import { graphql, compose } from 'react-apollo';
import {addFamilyMutation, getFamiliesQuery } from '../../queries/family';

class FamilyAdd extends Component {

constructor(props){
  super(props);
    this.state = {
      FamilyName: '',
      Address: '',
      Address2: '',
      City: '',
      State: '',
      Zip: '',
      Status: '',
      EnteredBy: '',
      DateEntered: ''
    };

  }

submitForm(e){
  e.preventDefault();
  console.log("looking for you!");
  console.log(this.state);
  this.props.addFamilyMutation({
    variables:{
      FamilyName: this.state.FamilyName,
      Address: this.state.Address,
      Address2: this.state.Address2,
      City: this.state.City,
      State: this.state.State,
      Zip: this.state.Zip,
      Status: this.state.Status,
      EnteredBy: this.state.EnteredBy,
      DateEntered: this.state.DateEntered
    },
    refetchQueries: [{query: getFamiliesQuery}]

  });
}

  render() {
    return (
      <form id="add-family" onSubmit={this.submitForm.bind(this)}>
      <div className="field">
      <label>Name</label>
      <input type="text" onChange={(e) => this.setState({FamilyName: e.target.value})}/>
      </div>

      <div className="field">
      <label>Address</label>
      <input type="text" onChange={(e) => this.setState({Address: e.target.value})}/>
      </div>

      <div className="field">
      <label>Address2</label>
      <input type="text" onChange={(e) => this.setState({Address2: e.target.value})}/>
      </div>

      <div className="field">
      <label>City</label>
      <input type="text" onChange={(e) => this.setState({City: e.target.value})}/>
      </div>

      <div className="field">
      <label>State</label>
      <input type="text" onChange={(e) => this.setState({State: e.target.value})}/>
      </div>

      <div className="field">
      <label>Zip</label>
      <input type="text" onChange={(e) => this.setState({Zip: e.target.value})}/>
      </div>


      <div className="field">
      <label>Status</label>
      <input type="text" onChange={(e) => this.setState({Status: e.target.value})}/>
      </div>

      <div className="field">
      <label>Entered By</label>
      <input type="text" onChange={(e) => this.setState({EnteredBy: e.target.value})}/>
      </div>

      <div className="field">
      <label>Date Entered</label>
      <input type="text" onChange={(e) => this.setState({DateEntered: e.target.value})}/>
      </div>

      <button>+</button>
      </form>
    );
  }
}

export default compose(
  graphql(addFamilyMutation, {name: "addFamilyMutation"}),
graphql(getFamiliesQuery, {name: "getFamiliesQuery"})
)(FamilyAdd);
