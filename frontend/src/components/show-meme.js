import React, { Component } from "react";
import http from "../http-common";
import MemeCard from './MemeCard'

export default class CreateMeme extends Component {
  constructor(props) {
    super(props)
    this.state = {
      meme: {}
    }
  }

  async componentDidMount() {
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

  render() {
    return (
      <div>
        <MemeCard obj={this.state.meme} showAll= "true" />
      </div>
    );
  }
}