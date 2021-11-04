import React, { Component } from 'react';
import './App.css';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ArticlesList from './ArticlesList';
import ArticleEdit from './ArticleEdit';
import Api from './Api';
import NavBar from './NavBar';
import MetaTags from "react-meta-tags";
import Footer from "./components/Footer";

const api = new Api();



class App extends Component {

  render() {
    const navbar = <NavBar/>;
    const footer = <Footer/>;


    return (
      <Router>
        <MetaTags>
          <title>Nick Ang - Portfolio | Blog</title>
          <meta
            id="meta-description"
            name="description"
            content="Some description."
          />
          <meta property="og:title" content="Nick Ang - Portfolio | Blog" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://nick-ang.netlify.app/" />
          <meta property="og:image" content="./animations/blog4.png" />
          <meta
            property="og:description"
            content="Nick Ang - Portfolio | Blog"
          />
          <meta property="og:site_name" content="Nick Ang - Portfolio | Blog" />
          <meta
            http-equiv="Content-Security-Policy"
            content="upgrade-insecure-requests"
          ></meta>
          <link
            rel="shortcut icon"
            type="image/x-icon"
            href="images/favicon.ico"
          />

          <script
            src="https://cdn.tiny.cloud/1/emehi8uy1oa5o8lchnrih1issh91tfh2wn2l3iul0tjhr1eo/tinymce/5/tinymce.min.js"
            referrerpolicy="origin"
          ></script>

          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link
            rel="stylesheet"
            href="https://use.fontawesome.com/releases/v5.6.3/css/all.css"
          />
          <meta id="og-title" property="og:title" content="MyApp" />
          <meta id="og-image" property="og:image" content="path/to/image.jpg" />
        </MetaTags>
        <Switch>
          <Route
            path="/"
            exact={true}
            render={(props) => (
              <Home {...props} api={api} navbar={navbar} footer={footer} />
            )}
          />
          <Route
            path="/articles"
            exact={true}
            render={(props) => (
              <ArticlesList
                {...props}
                api={api}
                navbar={navbar}
                footer={footer}
              />
            )}
          />
          <Route
            path="/articles/:id"
            render={(props) => (
              <ArticleEdit
                {...props}
                api={api}
                navbar={navbar}
                footer={footer}
              />
            )}
          />
        </Switch>
      </Router>
    );
  }
}

export default App;
