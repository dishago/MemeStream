import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import http from "../http-common";

export default class EditMeme extends Component {
  constructor(props) {
    super(props)
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeCaption = this.onChangeCaption.bind(this);
    this.onChangeUrl = this.onChangeUrl.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      name: '',
      caption: '',
      url: ''
    }
  }

  componentDidMount() {
    http.get('/memes/' + this.props.match.params.id)
      .then(res => {
        this.setState({
          name: res.data.name,
          caption: res.data.caption,
          url: res.data.url
        });
      })
      .catch((error) => {
        this.props.history.push('/error')
      })
  }

  onChangeName(e) {
    this.setState({name: e.target.value})
  }

  onChangeCaption(e) {
    this.setState({caption: e.target.value})
  }

  onChangeUrl(e) {
    this.setState({url: e.target.value})
  }

  async onSubmit(e) {
     e.preventDefault()

    const memeObject = {
        name: this.state.name,
        caption: this.state.caption,
        url: this.state.url
    }

    // To update an existing meme in the database using the record id provided
    await http.patch('/memes/'+this.props.match.params.id, memeObject)
        .then(res => {console.log(res)})
        .catch((error) => this.props.history.push('/error')); 
      this.props.history.push('/memes') // Redirect to all memes page to see the updated  meme
  }


  render() {
    return (
      <div className="form-wrapper">
        <h1>Meme Update</h1> 
        <Form onSubmit={this.onSubmit}>
          <Form.Group controlId="Name">
            <Form.Label>Enter Name</Form.Label>
            <Form.Control type="text" placeholder="Enter your full name" value={this.state.name} onChange={this.onChangeName} readOnly />
          </Form.Group>

          <Form.Group controlId="caption">
            <Form.Label>Enter Caption</Form.Label>
            <Form.Control type="text" placeholder="Enter a catchy caption" value={this.state.caption} onChange={this.onChangeCaption}/>
          </Form.Group>

          <Form.Group controlId="url">
            <Form.Label>Enter Image URL</Form.Label>
            <Form.Control type="text" placeholder="Enter the URL" value={this.state.url} onChange={this.onChangeUrl} />
          </Form.Group>

          <Button variant="success" size="lg" block="block" type="submit">
            Update Meme
          </Button>
        </Form>
        <Image src={this.state.url} alt="Meme Image"/>
      </div>
    );
  }
}