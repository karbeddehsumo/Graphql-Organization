import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import {deleteFamilyMutation} from '../../queries/family';


class FamilyDelete extends Component {
  DisplayFamilyDetails(){
    const {family} = this.props.data;
    if(family){
      return(
        <div>
           <h2>{family.FamilyName}</h2>
           <p>{family.Address}</p>
           <p>{family.Address2}</p>
           <p>{family.City}, {family.State} {family.Zip}</p>
        </div>
      )
    }
  }
  render() {

    return (
      <div id="family-detail">
      {this.DisplayFamilyDetails()}
      </div>
    );
  }
}

export default graphql(deleteFamilyMutation, {
  options: (props) => {
    return {
      variables: {
        id: props.familyid
      }
    }
  }
})(FamilyDelete);
