import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import {getFamilyQuery} from '../../queries/family';


class FamilyDetails extends Component {
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

export default graphql(getFamilyQuery, {
  options: (props) => {
    return {
      variables: {
        id: props.familyid
      }
    }
  }
})(FamilyDetails);
