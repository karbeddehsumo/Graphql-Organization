import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import {getOrganizationsQuery} from '../../queries/organization';
import  OrganizationDetail  from './OrganizationDetail';


class OrganizationList extends Component {
  displayOrganization(){
    var data = this.props.data;

    if(data.loading)
    {
      return(<div>Data is loading...</div>);
    }
    else
    {
      return data.organizations.map(organization => {
        return (
          <li key={organization.OrganizationID}>{organization.Name}</li>
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
        <OrganizationDetail/>
      </div>
    );
  }
}

export default graphql(getOrganizationsQuery)(OrganizationList);
