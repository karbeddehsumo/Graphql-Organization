import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import {getOrganizationQuery} from '../../queries/organization';


class OrganizationDetail extends Component {

  render() {
    return (
      <div id="organization-details">
        <p>Output organization </p>
      </div>
    );
  }
}

export default graphql(getOrganizationQuery)(OrganizationDetail);
