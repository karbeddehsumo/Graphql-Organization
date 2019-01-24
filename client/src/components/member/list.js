import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import {getMembersQuery} from '../../queries/member';
import  MemberDetails  from './details';

class MemberList extends Component {
  constructor(props){
    super(props);
    this.state = {
      selected: null
    }
  }
  displayMember(){
    var data = this.props.data;
    console.log("click data");
    console.log(data);
    if(data.loading)
    {
      return(<div>Data is loading...</div>);
    }
    else
    {
      return data.members.map(member => {
        return (
          <li key={member.id} onClick={(e) => {this.setState({selected: member.id})}}>{member.LastName}, {member.FirstName} {member.MiddleName}</li>
        );
      })
    }
}
  render() {
    return (
      <div>
        <ul id="member-list" >
          {this.displayMember()}
        </ul>
        <MemberDetails familyid={this.state.selected}/>
      </div>
    );
  }
}

MemberList = graphql(getMembersQuery )(MemberList)
export default MemberList;
