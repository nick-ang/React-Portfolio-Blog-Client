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
import Footer from "./components/Footer";


const Article = (props) => (
  <div data-aos="fade-up" className="article-container rounded-3xl p-2 m-2">
    <h3>{props.name}</h3>
    <div className="article-body">
      <div className="bg-white rounded-3xl subtitle-container">
        <div className="bg-black rounded-t-3xl">
          <br />
          <br />
          <h2 className="title-font sm:text-4xl text-3xl font-medium text-center text-white">
            {ReactHtmlParser(props.title)}
          </h2>
          <br />
          <br />
        </div>
        <div className="blog p-10">{ReactHtmlParser(props.content)}</div>
      </div>
    </div>
    <div className="article-footer">
      <Button
        classname="w-full"
        color="secondary"
        tag={Link}
        to={"/articles/" + props.id}
      >
        Edit
      </Button>
      {/*
      <Button color="danger" onClick={() => props.remove(props.id)}>
        Delete
      </Button> */}
    </div>
    <Button color="success" tag={Link} to="/articles/new">
      Add New
    </Button>
    <Footer />
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
        articles: articles,
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
      return <p>Loading...</p>;
    }

    return (
      <div>
        {this.props.navbar}
        <div className=" justify-content-between">
        <br/>
        <br/>
        <h1 className="title-font lg:text-5xl text-4xl mb-4 font-medium text-center text-white">
          Blog Articles 📚
          </h1>
          <br />
          <p className="text-white text-center p-50">
            <em>
              "Just a place for me to keep a collection of my personal thoughts
              and a record of my
              journey through life"
            </em>
            <br/>
            <em>Enjoy your time here and feel free to type or paste your own articles by clicking add new at the bottom of the page!</em>
            <br/>
            <em>Built with React front-end client and Kolin/Spring/MySQL as REST API server</em>
</p>
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
      </div>

    );
  }
}

export default ArticlesList;
