import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import {
  Alert,
  Button,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
} from "reactstrap";
import { Editor } from "@tinymce/tinymce-react";
import "draft-js/dist/Draft.css";
import Footer from "./components/Footer";

class ArticleEdit extends Component {
  emptyItem = {
    title: "",
    content: "",
  };

  constructor(props) {
    super(props);
    this.state = {
      item: this.emptyItem,
      errorMessage: null,
      isCreate: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async componentDidMount() {
    this.state.isCreate = this.props.match.params.id === "new"; // are we editing or creating?
    if (!this.state.isCreate) {
      const response = await this.props.api.getById(this.props.match.params.id);
      const article = await response.json();
      this.setState({ item: article });
    }
  }

  handleChange(content, event) {
    const value = content;
    let item = { ...this.state.item };
    const name = event.targetElm.name;
    item[name] = value;
    this.setState({ item });
  }

  async handleSubmit(event) {
    event.preventDefault();
    const { item, isCreate } = this.state;

    let result = isCreate
      ? await this.props.api.create(item)
      : await this.props.api.update(item);

    if (!result.ok) {
      this.setState({
        errorMessage: `Failed to ${isCreate ? "create" : "update"} record: ${
          result.status
        } ${result.statusText}`,
      });
    } else {
      this.setState({ errorMessage: null });
      this.props.history.push("/articles");
    }
  }

  render() {
    const { item, errorMessage } = this.state;
    const title = (
      <h2>
        {this.props.match.params.id === "new" ? "Add Article" : "Edit Article"}
      </h2>
    );
    const submit = (
      <h2>{this.props.match.params.id === "new" ? "submit" : "hidden"}</h2>
    );

    return (
      <div>
        {this.props.navbar}
        <Container style={{ textAlign: "left" }}>
          {title}
          <br />
          {errorMessage ? <Alert color="warning">{errorMessage}</Alert> : null}
          <Form onSubmit={this.handleSubmit}>
            <div className="">
              <FormGroup className="title col-md-20 mb-3">
                <Label for="title">Title</Label>
                <Input
                  type="hidden"
                  name="title"
                  id="title"
                  value={item.title || ""}
                  onChange={this.handleChange}
                  autoComplete="title"
                  readonly
                />
                <Editor
                  apiKey="emehi8uy1oa5o8lchnrih1issh91tfh2wn2l3iul0tjhr1eo"
                  value={this.state.content}
                  textareaName="title"
                  value={item.title || ""}
                  init={{
                    height: 175,
                    menubar: true,
                  }}
                  onEditorChange={this.handleChange}
                />
              </FormGroup>
              <FormGroup className="col-md-30 mb-3">
                <Label for="content">Content</Label>
                <Input
                  name="content"
                  id="content"
                  value={item.content || ""}
                  onChange={this.handleChange}
                  autoComplete="phone"
                  readonly
                  type="hidden"
                />
                <Editor
                  id="content"
                  value={item.content || ""}
                  textareaName="content"
                  init={{
                    height: 2000,
                    menubar: true,
                  }}
                  onEditorChange={this.handleChange}
                />
              </FormGroup>
            </div>
            <div className={submit.props.children}>
              <FormGroup>
                <Button color="primary" type="submit">
                  Save
                </Button>
                <Button color="secondary" tag={Link} to="/articles">
                  Cancel
                </Button>
              </FormGroup>
            </div>
          </Form>
          <br />
          <p className="text-center">Sorry you dont have edit permissions!</p>
        </Container>

        <Footer />
      </div>
    );
  }
}

export default withRouter(ArticleEdit);
