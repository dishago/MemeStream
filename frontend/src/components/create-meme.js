import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import http from "../http-common";

export default class CreateMeme extends Component {

    constructor(props) {
        super(props)
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeCaption = this.onChangeCaption.bind(this);
        this.onChangeUrl = this.onChangeUrl.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
          name: '',
          caption: '',
          url: '',
          validated: false
        }
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
        const form = e.currentTarget;

        // Check form validity to give appropriate errors
        if (form.checkValidity() === false) {
          e.preventDefault();
          e.stopPropagation();
          this.setState({validated: true})
        }
        else {
          e.preventDefault()
          const memeObject = {
              name: this.state.name,
              caption: this.state.caption,
              url: this.state.url
          }

          // To create a new meme in the database
          await http.post('/memes', JSON.stringify(memeObject), {params: {name: this.state.name, caption: this.state.caption, url: this.state.url} })
              .then(res => {})
              .catch(err => this.props.history.push('/error'))
      
          this.setState({name: '', caption: '', url: ''})
          window.location.reload()
        }
      }

  render() {
    return (
    <div className="form-wrapper">
        <h1>Meme Streamer</h1>
      <Form className="needs-validation" noValidate validated={this.validated} onSubmit={this.onSubmit}>
        <Form.Group controlId="Name">
          <Form.Label>Enter Name</Form.Label>
          <Form.Control type="text" placeholder="Enter your full name" value={this.state.name} onChange={this.onChangeName}/>
        </Form.Group>

        <Form.Group controlId="caption">
          <Form.Label>Enter Caption</Form.Label>
          <Form.Control type="text" placeholder="Enter a catchy caption" value={this.state.caption} onChange={this.onChangeCaption}/>
        </Form.Group>

        <Form.Group controlId="url">
          <Form.Label>Enter Image URL</Form.Label>
          <Form.Control type="url" required isInvalid={this.state.validated} placeholder="Enter the URL" value={this.state.url} onChange={this.onChangeUrl} />
          <Form.Control.Feedback type="invalid">Please provide a valid URL.</Form.Control.Feedback>
        </Form.Group>

        <Button variant="success" size="lg" block="block" type="submit">
          Create Meme
        </Button>
      </Form>
    </div>
    );
  }
}