import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import {getOrganizationsQuery} from '../../queries/organization';



class OrganizationList extends Component {
  displayOrganization(){
    var data = this.props.data;
    if(Array.isArray(data)){
    if(data.loading)
    {
      return(<div>Data is loading...</div>);
    }
    else {
      return data.organizations.map(organization => {
        return (
          <li key={organization.organizationID}>{organization.Name}</li>
        );
      })
    }
  }
}
  render() {
    return (
      <div>
        <ul id="organization-list" >
          {this.displayOrganization()}
        </ul>
      </div>
    );
  }
}

export default graphql(getOrganizationsQuery)(OrganizationList);
