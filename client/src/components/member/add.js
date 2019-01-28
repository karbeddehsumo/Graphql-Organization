import React, { Component } from 'react';
import { graphql, compose } from 'react-apollo';
import { addMemberMutation, getMembersQuery} from '../../queries/member';
import { getOrganizationsQuery } from '../../queries/organization';
import { getFamiliesQuery } from '../../queries/family';


class MemberAdd extends Component {
    constructor(props){
        super(props);
        this.state = {
          FamilyID: '',
          OrganizationID: '',
          FirstName: '',
          MiddleName: '',
          LastName: '',
          Suffix: '',
          DOB: '',
          Gender: '',
          MembershipDate: '',
          Title: '',
          ContactTypeID: '',
          PhoneNumber: '',
          PhoneProviderID: '',
          Email: '',
          PictureID: '',
          Status: '',
          EnteredBy: '',
          DateEntered: ''
        }
    }

    submitForm(e){
      e.preventDefault();
      this.props.addMemberMutation({
          variables: {
            FamilyID: this.state.FamilyID,
            OrganizationID: this.state.Organization,
            FirstName: this.state.FirstName,
            MiddleName: this.state.MiddleName,
            LastName: this.state.LastName,
            Suffix: this.state.Suffix,
            DOB: this.state.DOB,
            Gender: this.state.Gender,
            MembershipDate: this.state.MembershipDate,
            Title: this.state.Title,
            ContactTypeID: this.state.ContactTypeID,
            PhoneNumber: this.state.PhoneNumber,
            PhoneProviderID: this.state.PhoneProviderID,
            Email: this.state.Email,
            PictureID: this.state.PictureID,
            Status: this.state.Status,
            EnteredBy: this.state.EnteredBy,
            DateEntered: this.state.DateEntered
          },
          refetchQueries: [{query: getMembersQuery}]
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
        displayFamilies(){
          var data = this.props.getFamiliesQuery;
          if(data.loading){
            return (<option>Loading Families...</option>)
          } else {
             return data.families.map(family => {
            return (<option key={family.id} value={family.id}>{family.FamilyName}</option>);
          })
          }
    }


    render(){
        return(
            <form id="add-member" onSubmit={this.submitForm.bind(this)}>

            <div className="field">
            <label>Family Name</label>
            <select onChange={(e) => this.setState({FamilyID: e.target.value})}>
            <option>Select Organization</option>
            {this.displayFamilies()}
            </select>
            </div>

            <div className="field">
            <label>First Name</label>
            <input type="text" onChange={(e) => this.setState({FirstName: e.target.value})}/>
            </div>

            <div className="field">
            <label>Middle Name</label>
            <input type="text" onChange={(e) => this.setState({MiddleName: e.target.value})}/>
            </div>

            <div className="field">
            <label>Last Name</label>
            <input type="text" onChange={(e) => this.setState({LastName: e.target.value})}/>
            </div>

            <div className="field">
            <label>Suffix</label>
            <input type="text" onChange={(e) => this.setState({Suffix: e.target.value})}/>
            </div>

            <div className="field">
            <label>DOB</label>
            <input type="text" onChange={(e) => this.setState({DOB: e.target.value})}/>
            </div>

            <div className="field">
            <label>Gender</label>
            <input type="text" onChange={(e) => this.setState({Gender: e.target.value})}/>
            </div>

            <div className="field">
            <label>Membership Date</label>
            <input type="text" onChange={(e) => this.setState({MembershipDate: e.target.value})}/>
            </div>

            <div className="field">
            <label>Title</label>
            <input type="text" onChange={(e) => this.setState({Title: e.target.value})}/>
            </div>

            <div className="field">
            <label>Contact Type</label>
            <input type="text" onChange={(e) => this.setState({ContactTypeID: e.target.value})}/>
            </div>

            <div className="field">
            <label>Phone Number</label>
            <input type="text" onChange={(e) => this.setState({PhoneNumber: e.target.value})}/>
            </div>

            <div className="field">
            <label>Phone Provider</label>
            <input type="text" onChange={(e) => this.setState({PhoneProviderID: e.target.value})}/>
            </div>

            <div className="field">
            <label>Email</label>
            <input type="text" onChange={(e) => this.setState({Email: e.target.value})}/>
            </div>

            <div className="field">
            <label>Picture</label>
            <input type="text" onChange={(e) => this.setState({PictureID: e.target.value})}/>
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
            <label>Organization</label>
            <select onChange={(e) => this.setState({OrganizationID: e.target.value})}>
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
     graphql(addMemberMutation, {name: "addMemberMutation"}),
     graphql(getMembersQuery, {name: "getMembersQuery"}),
     graphql(getOrganizationsQuery, {name: "getOrganizationsQuery"}),
     graphql(getFamiliesQuery, {name: "getFamiliesQuery"})
)(MemberAdd);
