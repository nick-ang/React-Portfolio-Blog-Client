import React, { Component } from 'react';
import './App.css';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ArticlesList from './ArticlesList';
import ArticleEdit from './ArticleEdit';
import Api from './Api';
import NavBar from './NavBar';
import MetaTags from "react-meta-tags";

const api = new Api();



class App extends Component {

  render() {
    const navbar = <NavBar/>;



    return (
      <Router>
        <MetaTags>
          <title>Nick Ang's Portfolio and Personal Blog</title>
          <meta
            id="meta-description"
            name="description"
            content="Some description."
          />
          <meta
            http-equiv="Content-Security-Policy"
            content="upgrade-insecure-requests"
          ></meta>
          <meta id="og-title" property="og:title" content="MyApp" />
          <meta id="og-image" property="og:image" content="path/to/image.jpg" />
        </MetaTags>
        <Switch>
          <Route
            path="/"
            exact={true}
            render={(props) => <Home {...props} api={api} navbar={navbar} />}
          />
          <Route
            path="/articles"
            exact={true}
            render={(props) => (
              <ArticlesList {...props} api={api} navbar={navbar} />
            )}
          />
          <Route
            path="/articles/:id"
            render={(props) => (
              <ArticleEdit {...props} api={api} navbar={navbar} />
            )}
          />
        </Switch>
      </Router>
    );
  }
}

export default App;
