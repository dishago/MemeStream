import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';

// To display memes in a specific card format
export default class MemeCard extends Component {
    render() {
        const meme = "/memes"+this.props.obj._id
        return (
            <Card>
                <Card.Body>
                    <Card.Title as="h3"> {this.props.obj.name} </Card.Title>
                    <Card.Text as="h5"> {this.props.obj.caption} </Card.Text>
                    <Card.Img src= {this.props.obj.url} style={{width: "50%", height: "50%"}}/>
                </Card.Body>
                {
                    this.props.showAll === "true" ? <Link className="edit-link" to={"/memes"}>All memes</Link> : 
                        <Link className="edit-link" to={"/memes/" + this.props.obj._id}>Show</Link>
                }
                <Link className="edit-link" to={"/memes/" + this.props.obj._id + "/edit"}>
                    Edit
                </Link>
            </Card>
        );
    }
}