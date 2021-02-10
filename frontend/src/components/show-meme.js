import React, { Component } from "react";
import http from "../http-common";
import MemeCard from './MemeCard'

// Display a single meme on screen
export default class CreateMeme extends Component {
  constructor(props) {
    super(props)
    this.state = {
      meme: {}
    }
  }

  async componentDidMount() {
    // GET single meme using the unique record id from the database
    await http.get('/memes/'+this.props.match.params.id)
      .then(res => {
        this.setState({
          meme: res.data
        });
      })
      .catch((error) => {
        this.props.history.push('/error')
      })
  }

  // The showAll parameter specifies if the MemeCard component is being rendered from individual meme or all memes page.
  render() {
    return (
      <div>
        <MemeCard obj={this.state.meme} showAll= "true" />
      </div>
    );
  }
}