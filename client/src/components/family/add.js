import React, { Component } from 'react';
import { graphql, compose } from 'react-apollo';
import {addFamilyMutation, getFamiliesQuery } from '../../queries/family';
import { getOrganizationsQuery } from '../../queries/organization';

class FamilyAdd extends Component {

constructor(props){
  super(props);
    this.state = {
      OrganizationID: '',
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
  this.props.addFamilyMutation({
    variables:{
      Name: this.state.FamilyName,
      OrganizationID: this.state.OrganizationID,
      FamilyName: this.state.FamilyName,
      Address: this.state.Address,
      Address2: this.state.Address2,
      City: this.sate.City,
      State: this.state.State,
      Zip: this.setState.Zip,
      Status: this.state.Status,
      EnteredBy: this.state.$EnteredBy,
      DateEntered: this.state.DateEntered
    },
    refetchQueries: [{query: getFamiliesQuery}]

  });
}
displayOrganizations(){
  var data = this.props.getOrganizationsQuery;
  if(data.loading){
    return (<option>Loading organizations...</option>)
  } else {
     return data.organizations.map(organization => {
    return (<option key={organization.id} value={organization.id}>{organization.Name}</option>);
  })
  }
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

      <div className="field">
      <label>Parent</label>
      <select>
      <option>Select Organization</option>
      {this.displayOrganizations()}
      </select>
      </div>

      <button>+</button>
      </form>
    );
  }
}

export default compose(
  graphql(addFamilyMutation, {name: "addFamilyMutation"}),
graphql(getFamiliesQuery, {name: "getFamiliesQuery"}),
    graphql(getOrganizationsQuery, {name: "getOrganizationsQuery"})
)(FamilyAdd);
