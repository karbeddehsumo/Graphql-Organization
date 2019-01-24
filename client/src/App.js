import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//components
import OrganizationList from './components/organization/list';
import OrganizationAdd from  './components/organization/add';
import OrganizationHome from './components/organization/index';

import FamilyList from './components/family/list';
import FamilyAdd from  './components/family/add';
import FamilyHome from './components/family/index';

import MemberList from './components/member/list';
import MemberAdd from './components/member/add';
import MemberHome from './components/member/index';


//apollo client setup
const client = new ApolloClient({
  uri:'http://localhost:4000/organization'
})

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
      <Router>
      <div id="main">
         <Route exact path="/" component={OrganizationList} />
        <Switch>
          <Route exact path="/organization" component={OrganizationHome} />
          <Route exact path="/organization/list" component={OrganizationList} />
          <Route exact path="/organization/create" component={OrganizationAdd} />

          <Route exact path="/family" component={FamilyHome} />
          <Route exact path="/family/list" component={FamilyList} />
          <Route exact path="/family/create" component={FamilyAdd} />

          <Route exact path="/member" component={MemberHome} />
          <Route exact path="/member/list" component={MemberList} />
          <Route exact path="/member/create" component={MemberAdd} />

        </Switch>
      </div>
      </Router>
      </ApolloProvider>
    );
  }
}

export default App;
