import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class MemberHome extends Component {

  render() {
    return (
      <div>
      <Link to={`/member/list`} >List</Link>
      <Link to={`/member/create`} >Create</Link>
      </div>
    )
  }
}
