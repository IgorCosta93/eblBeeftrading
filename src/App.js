import React from 'react';
import { Provider } from 'react-redux';
import { ApolloProvider } from "react-apollo";
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { WebSocketLink } from 'apollo-link-ws';
import { split } from 'apollo-link';
import { getMainDefinition } from 'apollo-utilities';
import store from './store';
import routes from "./const/routes";

import { PrivateRoute } from "./auth/PrivateRoute";
import { PublicRoute } from "./auth/PublicRoute";

import LoginContainer from "./containers/Login";
import HomeContainer from "./containers/Home";
import { FaHome } from "react-icons/fa";
import { FcInspection } from "react-icons/fc";

const httpLink = new HttpLink({
  uri: 'http://localhost:3333/graphql',
});

/*const wsLink = new WebSocketLink({
  uri: `ws://localhost:3001/graphql`,
  options: { reconnect: true }
});*/

const link = split(
  ({ query }) => {
    const { kind, operation } = getMainDefinition(query);
    return kind === 'OperationDefinition' && operation === 'subscription';
  },
  //wsLink,
  httpLink
)

const cache = new InMemoryCache();
const client = new ApolloClient({ link, cache });

function App() {
  return (
    <Provider store={store}>
        <ApolloProvider client={client}>
          <BrowserRouter>
            <Switch>          
              <Route exact path={routes.LOGIN} component={LoginContainer}/>
              <PublicRoute exact path={routes.HOME} component={HomeContainer} breadcrumb="Home"/>
              {/*<PrivateRoute exact path={routes.DASHBOARD} component={HomeContainer} pageTitle={"Dashboard"} breadcrumb="FollowUp de Pedidos" icon={FcInspection}/>
              <Redirect to="/"/>*/}
            </Switch>
          </BrowserRouter>
        </ApolloProvider>
      </Provider>
  );
}

export default App;
