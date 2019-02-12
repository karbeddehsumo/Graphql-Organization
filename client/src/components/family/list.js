import React, { Component } from 'react';
import { graphql } from 'react-apollo';
//import { Link } from 'react-router-dom';
import {getFamiliesQuery} from '../../queries/family';
import FamilyDetails  from './details';

class FamilyList extends Component {
  constructor(props){
    super(props);
    this.state = {
      selected: null
    }
  }
  displayFamily(){
    var data = this.props.data;
    console.log("click data");
    console.log(data);
    if(data.loading)
    {
      return(<div>Data is loading...</div>);
    }
    else
    {
      return data.families.map(family => {
        return (
          <li key={family.id} onClick={(e) => {this.setState({selected: family.id})}}>{family.FamilyName}</li>
        );
      })
    }
}
  render() {
    return (
      <div>
        <ul id="family-list" >
          {this.displayFamily()}
        </ul>
        <FamilyDetails familyid={this.state.selected}/>
      </div>
    );
  }
}

FamilyList = graphql(getFamiliesQuery )(FamilyList)
export default FamilyList;
