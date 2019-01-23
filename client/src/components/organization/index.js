
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class OrganizationHome extends Component {

  render() {
    return (
      <div>
      <Link to={`/organization/list`} >List</Link>
      <Link to={`/organization/create`} >Create</Link>
      </div>
    )
  }
}
