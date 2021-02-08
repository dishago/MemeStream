import React, { Component } from "react";
import CreateMeme from "./create-meme";
import MemeCard from './MemeCard'
import http from "../http-common";

export default class MemeList extends Component {
    constructor(props) {
        super(props)
        this.state = {
          memes: []
        };
      }
    
      async componentDidMount() {
        await http.get('/memes')
          .then(res => {
            this.setState({
              memes: res.data
            });
          })
          .catch((error) => {
            this.props.history.push('/error')
          })
      }

      MemeCards() {
        return this.state.memes.map((res, i) => {
            return <MemeCard obj={res} key={i} showAll="false" />;
          });
      }
    
      render() {
        return (
            <div>
                <CreateMeme/>
                {this.MemeCards()}
            </div>
    );
  }
}