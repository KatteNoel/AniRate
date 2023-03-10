import { Form, FormGroup, Button, Modal } from "react-bootstrap";


export const CreateAnimeForm = (props) => {
    return (
        <Modal className="modal" show={props.modal} onHide={() => props.setShowModal(false)}>
                <Modal.Header>
                    <Modal.Title className="font blue">Rate New Anime</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <FormGroup controlId="createAnimeForm">
                        <Form.Label className="black margin">Anime</Form.Label>
                        <Form.Control ref={props.animeName} type="text" placeholder="Anime Name" />
                        <Form.Label className="black margin">Image</Form.Label>
                        <Form.Control ref={props.url} type="text" placeholder="Image URL"/>
                        <Form.Label className="black margin">Rating (out of 10)</Form.Label>
                        <Form.Control ref={props.rating} type="number" min="1" max="10" placeholder="10"/>
                        <Form.Label className="black margin">Description</Form.Label>
                        <Form.Control ref={props.description} type="text" placeholder="Anime Description"/>
                    </ FormGroup>
                </Modal.Body>
                <Modal.Footer>
                    <Button className="yellow-background font margin" variant="warning" onClick={props.createAnime}>Submit</Button>
                </Modal.Footer>
            </Modal>
    );
};