import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import {getOrganizationsQuery} from '../../queries/organization';
import  OrganizationDetail  from './OrganizationDetail';


class OrganizationList extends Component {
  constructor(props){
    super(props);
    this.state = {
      selected: null
    }
  }
  displayOrganization(){
    var data = this.props.data;
    console.log("click data");
    console.log(data);
    if(data.loading)
    {
      return(<div>Data is loading...</div>);
    }
    else
    {
      return data.organizations.map(organization => {
        return (
          <li key={organization.id} onClick={(e) => {this.setState({selected: organization.id})}}>{organization.Name}</li>
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
        <OrganizationDetail SelectedOrganizationID={this.state.selected}/>
      </div>
    );
  }
}

export default graphql(getOrganizationsQuery)(OrganizationList);
