import React, { Component } from 'react';
import { graphql, compose } from 'react-apollo';
import {addOrganizationMutation, getOrganizationsQuery} from '../../queries/organization';

class OrganizationAdd extends Component {

constructor(props){
  super(props);
    this.state = {
      Name: '',
      Address: '',
      Address2: '',
      City: '',
      State: '',
      Zip: '',
      Country: '',
      PhoneNumber: '',
      Email: '',
      YearFounded: '',
      StoryID: '',
      PictureID: '',
      VideoID: '',
      Description: '',
      Vision: '',
      Mission: '',
      Status: '',
      EnteredBy: '',
      DateEntered: '',
      ParentID: ''
    };

  }

submitForm(e){
  e.preventDefault();
  this.props.addOrganizationMutation({
    variables:{
      Name: this.state.Name,
      Address: this.state.Address,
      Address2: this.state.Address2,
      City: this.state.City,
      State: this.state.State,
      Zip: this.state.Zip,
      Country: this.state.Country,
      PhoneNumber: this.state.PhoneNumber,
      Email: this.state.Email,
      YearFounded: this.state.YearFounded,
      StoryID: this.state.StoryID,
      PictureID: this.state.PictureID,
      VideoID: this.state.VideoID,
      Description:this.state.Description,
      Vision: this.state.Vision,
      Mission: this.state.Mission,
      Status: this.state.Status,
      EnteredBy: this.state.EnteredBy,
      DateEntered: this.state.DateEntered,
      ParentID: this.state.ParentID
    },
    refetchQueries: [{query: getOrganizationsQuery}]

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
      <form id="add-organization" onSubmit={this.submitForm.bind(this)}>
      <div className="field">
      <label>Name</label>
      <input type="text" onChange={(e) => this.setState({Name: e.target.value})}/>
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
      <label>Country</label>
      <input type="text" onChange={(e) => this.setState({Country: e.target.value})}/>
      </div>

      <div className="field">
      <label>Phone Number</label>
      <input type="text" onChange={(e) => this.setState({PhoneNumber: e.target.value})}/>
      </div>

      <div className="field">
      <label>Email</label>
      <input type="text" onChange={(e) => this.setState({Email: e.target.value})}/>
      </div>

      <div className="field">
      <label>Year Founded</label>
      <input type="text" onChange={(e) => this.setState({YearFounded: e.target.value})}/>
      </div>

      <div className="field">
      <label>Story ID</label>
      <input type="text" onChange={(e) => this.setState({StoryID: e.target.value})}/>
      </div>

      <div className="field">
      <label>Picture ID</label>
      <input type="text" onChange={(e) => this.setState({PictureID: e.target.value})}/>
      </div>

      <div className="field">
      <label>Video ID</label>
      <input type="text" onChange={(e) => this.setState({VideoID: e.target.value})}/>
      </div>

      <div className="field">
      <label>Description</label>
      <input type="text" onChange={(e) => this.setState({Description: e.target.value})}/>
      </div>

      <div className="field">
      <label>Vision</label>
      <input type="text" onChange={(e) => this.setState({Vision: e.target.value})}/>
      </div>

      <div className="field">
      <label>Mission</label>
      <input type="text" onChange={(e) => this.setState({Mission: e.target.value})}/>
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
      <select onChange={(e) => this.setState({OrganizationID: e.target.value})}>
      <option>Select Parent Organization</option>
      {this.displayOrganizations()}
      </select>
      </div>

      <button>+</button>
      </form>
    );
  }
}

export default compose(
  graphql(addOrganizationMutation, {name: "addOrganizationMutation"}),
    graphql(getOrganizationsQuery, {name: "getOrganizationsQuery"})
)(OrganizationAdd);
