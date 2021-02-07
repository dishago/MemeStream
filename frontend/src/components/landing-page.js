import React, { Component } from "react";
import CreateMeme from "./create-meme";
import { Link } from 'react-router-dom';

export default class MemeList extends Component {
    render() {
        return (
            <div>
                <CreateMeme/>
                <hr></hr>
                <Link className="edit-link" to={"/memes"}>Click here to check out amazing memes!</Link>
            </div>
        )
    }
}