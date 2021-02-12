import React, { Component } from 'react';
import http from '../http-common'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'

class DeleteMeme extends Component {
    constructor(props) {
        super(props)
        this.onYesClick = this.onYesClick.bind(this);
        this.onNoClick = this.onNoClick.bind(this);
    }

    async onYesClick() {
        await http.delete('/memes/'+this.props.match.params.id)
        .then()
        .catch(err => this.props.history.push('/error'))
        this.props.history.push('/memes')   // Redirect to all memes page
    }

    onNoClick() {
        this.props.history.push('/memes')
    }

    // Deletion Confirmation
    render() {
        return (
            <div>
            <Container className="d-flex align-items-center justify-content-center my-4">
                <div>Do you really want to delete this meme?</div>
                <hr></hr>
                <Button className="p-2 m-2 btn-danger" onClick={this.onYesClick}>YES</Button>
                <Button className="p-2 m-2 btn-info" onClick={this.onNoClick}>NO</Button>
            </Container>
            <Image src="https://media.tenor.com/images/e3ee431389b1349f5c1fe7b969e80acf/tenor.png" alt="Bye" style={{width: "50%", height: "50%"}} />
            </div>
        );
    }
}

export default DeleteMeme;