import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

//components
import OrganizationList from './components/organization/OrganizationList';
import OrganizationAdd from  './components/organization/OrganizationAdd';

//apollo client setup
const client = new ApolloClient({
  uri:'http://localhost:4000/organization'
})

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
      <div id="main">
        <h1>My Organization</h1>
        <OrganizationList />
        <OrganizationAdd />
      </div>
      </ApolloProvider>
    );
  }
}

export default App;
