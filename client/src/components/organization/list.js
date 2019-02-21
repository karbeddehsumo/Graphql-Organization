import React, { Component } from 'react';
import { graphql, compose } from 'react-apollo';
import { getOrganizationsQuery, deleteOrganizationMutation } from '../../queries/organization';
import  OrganizationDetails  from './details';

class OrganizationList extends Component {
  constructor(props){
    super(props);
    this.state = {
      selected: null
    }
  }
  deleteOrganization(id){
    console.log("Here is it");
    console.log(id);
    this.props.deleteOrganizationMutation({variables: { id }});
  }
  displayOrganization(){
    var data = this.props.getOrganizationsQuery;

    if(data.loading)
    {
      return(<div>Data is loading...</div>);
    }
    else
    {
      return data.organizations.map(organization => {
        return (

            <li key={organization.id} onClick={(e) => {this.setState({selected: organization.id})}}>
            {organization.Name}
            <button  onClick={() => this.deleteOrganization(organization.id)}>X</button>
            </li>

        );
      })
    }
}
  render() {
    return (
      <div>
        <ul id="organization-list" >
          {this.displayOrganization()}
        </ul>
        <OrganizationDetails organizationid={this.state.selected}/>
      </div>
    );
  }
}


export default compose(
    graphql(getOrganizationsQuery, {name: "getOrganizationsQuery"}),
  graphql(deleteOrganizationMutation, {name: "deleteOrganizationMutation"})
)(OrganizationList);
