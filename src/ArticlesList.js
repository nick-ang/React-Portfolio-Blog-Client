import React, { Component } from 'react';
import {
  Alert,
  Button
} from 'reactstrap';
import { Link } from 'react-router-dom';

const Article = (props) => (
  <div className="article-container p-2 m-2 d-flex flex-column">
    <h3>{props.name}</h3>
    <div className="article-body">
      <div className="subtitle-container">
        <div>Title: {props.title}</div>
        <div>Content: {props.content}</div>
      </div>
    </div>
    <div className="article-footer">
      <Button color="secondary" tag={Link} to={'/articles/' + props.id}>Edit</Button>
      <Button color="danger" onClick={() => props.remove(props.id)}>Delete</Button>
    </div>
  </div>
);

class ArticlesList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      isLoading: true,
      errorMessage: null
    };
    this.remove = this.remove.bind(this);
  }

  async componentDidMount() {
    this.setState({isLoading: true});
    const response = await this.props.api.getAll();
    if (!response.ok) {
      this.setState({
          errorMessage: `Failed to load: ${response.status} ${response.statusText}`,
          isLoading: false
        }
      )
    }
    else {
      const body = await response.json();
      const articles = body;
      this.setState({
        articles: articles,
        isLoading: false,
        errorMessage: null
      });
    }
  }

  async remove(id) {
    let response = await this.props.api.delete(id);
    if (!response.ok) {
      this.setState({errorMessage: `Failed to delete article: ${response.status} ${response.statusText}`})
    }
    else {
      let updatedArticles = [...this.state.articles].filter(i => i.id !== id);
      this.setState({articles: updatedArticles, errorMessage: null});
    }
  }

  render() {
    const {articles, isLoading, errorMessage} = this.state;

    if (isLoading) {
      return <p>Loading...</p>;
    }

    return (
      <div>
        {this.props.navbar}
        <div className="d-flex flex-row justify-content-between p-3">
          <h3 className="articles-title">Articles</h3>
          <Button color="success" tag={Link} to="/articles/new">Add New</Button>
        </div>
        {errorMessage ?
          <div className="d-flex flex-row justify-content-center">
            <Alert color="warning" style={{flex:1, maxWidth:'80%'}}>
              {errorMessage}
            </Alert>
          </div> : null
        }
        <div className="d-flex flex-row flex-container flex-wrap justify-content-center">
          {articles.map( article =>
            <Article {...article} remove={this.remove.bind(this)} key={article.id}/>
          )}
          {!articles || articles.length === 0 ? <p>No articles!</p> : null}
        </div>
      </div>
    );
  }
}

export default ArticlesList;