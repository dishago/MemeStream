import React, { Component } from "react";
import CreateMeme from "./create-meme";
import MemeCard from './MemeCard'
import http from "../http-common";

// To display the meme creation form along with the memes already stored in the database
export default class MemeList extends Component {
    constructor(props) {
        super(props)
        this.state = {
          memes: []
        };
      }
    
      async componentDidMount() {
        // GET all memes stored in the database
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

      // Render a card for each meme record in the database.
      // The showAll parameter specifies if the MemeCard component is being rendered from individual meme or all memes page.
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