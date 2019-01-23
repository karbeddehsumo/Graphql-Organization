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

        </Switch>
      </div>
      </Router>
      </ApolloProvider>
    );
  }
}

export default App;
