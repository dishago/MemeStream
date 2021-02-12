import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

// To display memes in a specific card format
export default class MemeCard extends Component {
    onClick() {
        alert('Hello')
    }

    render() {
        const meme = "/memes"+this.props.obj._id
        return (
            <Card>
                <Card.Body>
                    <Card.Title as="h3"> {this.props.obj.name} </Card.Title>
                    <Card.Text as="h5"> {this.props.obj.caption} </Card.Text>
                    <Card.Img src= {this.props.obj.url} style={{width: "50%", height: "50%"}}/>
                </Card.Body>
                <div style={{display: "inline-block"}}>
                    {
                        this.props.showAll === "true" ?
                            <Link to={"/memes"}>
                                <Button className="btn-info">All Memes</Button>
                            </Link>
                            : 
                            <Link to={"/memes/" + this.props.obj._id}>
                                <Button className="btn-info">Show Meme</Button>
                            </Link>
                    }
                    <Link to={"/memes/" + this.props.obj._id + "/edit"}>
                        <Button className="btn-warning">Edit</Button>
                    </Link>
                    <Link to={"/memes/" + this.props.obj._id + "/delete"}>
                        <Button className="btn-danger">Delete</Button>
                    </Link>
                </div>
            </Card>
        );
    }
}