import React, { Component } from "react";
import { Alert, Button } from "reactstrap";
import Lottie from "react-lottie-player";
import { Link } from "react-router-dom";
import ReactHtmlParser, {
  processNodes,
  convertNodeToElement,
  htmlparser2,
} from "react-html-parser";
import bear from "./animations/bear3.json";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "./Footer";
import load from "./load2.json";

const Article = (props) => (
  <div data-aos="fade-up" className="article-container rounded-3xl p-2 m-2">
    <h3>{props.name}</h3>
    <div className="article-body">
      <div className="bg-white rounded-3xl subtitle-container">
        <div className="bg-black rounded-t-3xl">
          <br />
          <br />
          <h3 className=" sm:text-2xl lg:text-3xl text-2xl text-center text-white">
            {ReactHtmlParser(props.title)}
          </h3>
          <br />
          <br />
        </div>
        <div className="blog p-10">{ReactHtmlParser(props.content)}</div>
      </div>
    </div>
    <div className="article-footer">
      <Button
        classname="w-full"
        color="primary"
        tag={Link}
        to={"/articles/" + props.id}
      >
        View/Edit
      </Button>
      {/*
      <Button color="danger" onClick={() => props.remove(props.id)}>
        Delete
      </Button> */}
    </div>

    <Button color="dark" tag={Link} to="/articles/new">
      Add New
    </Button>
  </div>
);

class ArticlesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      isLoading: true,
      errorMessage: null,
    };
    this.remove = this.remove.bind(this);
  }

  async componentDidMount() {
    this.setState({ isLoading: true });
    const response = await this.props.api.getAll();
    if (!response.ok) {
      this.setState({
        errorMessage: `Failed to load: ${response.status} ${response.statusText}`,
        isLoading: false,
      });
    } else {
      const body = await response.json();
      const articles = body;
      this.setState({
        articles: articles.reverse(),
        isLoading: false,
        errorMessage: null,
      });
    }
  }

  async remove(id) {
    let response = await this.props.api.delete(id);
    if (!response.ok) {
      this.setState({
        errorMessage: `Failed to delete article: ${response.status} ${response.statusText}`,
      });
    } else {
      let updatedArticles = [...this.state.articles].filter((i) => i.id !== id);
      this.setState({ articles: updatedArticles, errorMessage: null });
    }
  }

  render() {
    AOS.init();
    const { articles, isLoading, errorMessage } = this.state;

    if (isLoading) {
      return<p>
        <Lottie loop animationData={load} play />
      </p>;
    }

    return (
      <div>
        {this.props.navbar}
        <div data-aos="fade-right" className="lg:mt-20 justify-content-between">
          <br />
          <br />
          <h1 className="title-font lg:text-5xl text-5xl mb-4 font-medium text-center text-white">
            Blog Articles ????
          </h1>
          <br />
          <p className="text-white text-center px-5">
            <em>
              "Just a place for me to keep a collection of my personal thoughts
              and a record of my journey"
            </em>
            <br />
            <em>
              Enjoy your time here and feel free to type or paste your own
              articles by clicking add new at the bottom!
            </em>
            <br />
            <em>
              Built with React front-end client and Kotlin/Spring/MySQL as REST
              API server
            </em>
          </p>
          <br />
          <br />
          <div className="container w-full flex justify-center">
            <div className="w-25 content-center">
              <Lottie loop animationData={bear} play />
            </div>
          </div>
        </div>
        {errorMessage ? (
          <div className="d-flex flex-row justify-content-center">
            <Alert color="warning" style={{ flex: 1, maxWidth: "80%" }}>
              {errorMessage}
            </Alert>
          </div>
        ) : null}
        <div className="d-flex flex-row flex-container flex-wrap justify-content-center">
          {articles.map((article) => (
            <Article
              {...article}
              remove={this.remove.bind(this)}
              key={article.id}
            />
          ))}
          {!articles || articles.length === 0 ? <p>No articles!</p> : null}
        </div>
        <Footer />
      </div>
    );
  }
}

export default ArticlesList;
