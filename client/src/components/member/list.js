import React, { Component } from 'react';
import { graphql, compose } from 'react-apollo';
import { getMembersQuery, deleteMemberMutation } from '../../queries/member';
import  MemberDetails  from './details';

class MemberList extends Component {
  constructor(props){
    super(props);
    this.state = {
      selected: null
    }
  }
  deleteMember(id){
    this.props.deleteMemberMutation({variables: { id }});
  }
  displayMember(){
    var data = this.props.getMembersQuery;

    if(data.loading)
    {
      return(<div>Data is loading...</div>);
    }
    else
    {
      return data.members.map(member => {
        return (

            <li key={member.id} onClick={(e) => {this.setState({selected: member.id})}}>
            {member.FirstName} {member.LastName}
            <button  onClick={() => this.deleteMember(member.id)}>X</button>
            </li>

        );
      })
    }
}
  render() {
    return (
      <div>
        <ul id="organization-list" >
          {this.displayMember()}
        </ul>
        <MemberDetails memberid={this.state.selected}/>
      </div>
    );
  }
}


export default compose(
    graphql(getMembersQuery, {name: "getMembersQuery"}),
  graphql(deleteMemberMutation, {name: "deleteMemberMutation"})
)(MemberList);
