import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import {getOrganizationQuery} from '../../queries/organization';


class OrganizationDetails extends Component {
  DisplayOrganizationDetails(){
    const {organization} = this.props.data;
    if(organization){
      return(
        <div>
           <h2>{organization.Name}</h2>
           <p>{organization.address}</p>
           <p>{organization.City}, {organization.State}</p>
           <p>Phone: {organization.PhoneNumber} </p>
           <p>Email: {organization.Email} </p>
        </div>
      )
    }
  }
  render() {

    return (
      <div id="organization-detail">
      {this.DisplayOrganizationDetails()}
      </div>
    );
  }
}

export default graphql(getOrganizationQuery, {
  options: (props) => {
    return {
      variables: {
        id: props.organizationid
      }
    }
  }
})(OrganizationDetails);
