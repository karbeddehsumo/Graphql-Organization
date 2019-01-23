import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class FamilyHome extends Component {

  render() {
    return (
      <div>
      <Link to={`/family/list`} >List</Link>
      <Link to={`/family/create`} >Create</Link>
      </div>
    )
  }
}
