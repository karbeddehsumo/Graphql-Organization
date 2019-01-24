import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import {getMemberQuery} from '../../queries/member';


class MemberDetails extends Component {
  DisplayMemberDetails(){
    const {member} = this.props.data;
    if(member){
      return(
        <div>
           <h2>Name: {member.FirstName} {member.MiddleName} {member.LastName}</h2>
           <p>Phone: {member.PhoneNumber}</p>
           <p>Email: {member.Email}</p>
        </div>
      )
    }
  }
  render() {

    return (
      <div id="member-detail">
      {this.DisplayMemberDetails()}
      </div>
    );
  }
}

export default graphql(getMemberQuery, {
  options: (props) => {
    return {
      variables: {
        id: props.memberid
      }
    }
  }
})(MemberDetails);
