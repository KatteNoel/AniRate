import { Modal, Button, FormGroup, Form } from "react-bootstrap";

export const UpdateModal = (props) => {
    return (
       <Modal className="modal" show={props.modal} onHide={() => props.setShowModal(false)}>
                    <Modal.Header>
                        <Modal.Title className="blue font">Update {props.animeToUpdate.name}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <FormGroup controlId="updateAnimeForm">
                            <Form.Label className="black margin">Anime</Form.Label>
                            <Form.Control ref={props.updateName} type="text" placeholder="Anime Name" />
                            <Form.Label className="black margin">Image</Form.Label>
                            <Form.Control ref={props.updateURL} type="text" placeholder="Image URL"/>
                            <Form.Label className="black margin">Rating (out of 10)</Form.Label>
                            <Form.Control ref={props.updateRating} type="number" placeholder="10" min="1" max="10"/>
                            <Form.Label className="black margin">Description</Form.Label>
                            <Form.Control ref={props.updateDescription} type="text" placeholder="Anime Description"/>
                        </ FormGroup>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button className="yellow-background font margin" variant="warning" onClick={() => props.updateAnime(props.animeToUpdate, props.id)}>Submit</Button>
                    </Modal.Footer>
                </Modal> 
    );
}