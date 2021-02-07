import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
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
        //e.preventDefault()
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
          e.preventDefault();
          e.stopPropagation();
        }
      
          // console.log(`Meme successfully created!`);
          // console.log(`Name: ${this.state.name}`);
          // console.log(`Caption: ${this.state.caption}`);
          // console.log(`URL: ${this.state.url}`);
        else {
          e.preventDefault()
          const memeObject = {
              name: this.state.name,
              caption: this.state.caption,
              url: this.state.url
          }

          await http.post('/memes', memeObject, {params: {name: this.state.name, caption: this.state.caption, url: this.state.url} })
              .then(res => console.log(res.data));
          
          console.log(`Meme successfully created!`);
      
          this.setState({name: '', caption: '', url: ''})
        }
        this.setState({validated: true})
      }

  render() {
    return (
    <div className="form-wrapper">
        <h1>Meme Streamer</h1>
      <Form className="needs-validation" noValidate validated={this.validated} onSubmit={this.onSubmit}>
        <Form.Group controlId="Name">
          <Form.Label>Enter Name</Form.Label>
          <Form.Control required isInvalid={this.state.validated} type="text" placeholder="Enter your full name" value={this.state.name} onChange={this.onChangeName}/>
          <Form.Control.Feedback type="invalid">Please provide a valid name.</Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="caption">
          <Form.Label>Enter Caption</Form.Label>
          <Form.Control type="text" placeholder="Enter a catchy caption" value={this.state.caption} onChange={this.onChangeCaption}/>
        </Form.Group>

        <Form.Group controlId="url">
          <Form.Label>Enter Image URL</Form.Label>
          <Form.Control type="url" placeholder="Enter the URL" value={this.state.url} onChange={this.onChangeUrl} />
        </Form.Group>

        <Button variant="success" size="lg" block="block" type="submit">
          Create Meme
        </Button>
      </Form>
    </div>
    );
  }
}