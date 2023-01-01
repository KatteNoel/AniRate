import { Card, Button } from "react-bootstrap";

export const Anime = (props) => {
    return (
        <Card className="card">
            <Card.Header>
                <Card.Img className="image" variant="top" src={props.anime.imageURL}/>
                <Card.Title className="text-center font margin black">{props.anime.name}</Card.Title>
                <Card.Title className="text-center font blue">{props.anime.rating}/10</Card.Title>
            </Card.Header>
            <Card.Body>
                <Card.Text className="black">{props.anime.description}</Card.Text>
            </Card.Body>
            <Card.Footer>
                <Button variant="danger font pink margin-right" onClick={() => props.deleteAnime(props.anime.id)}>Delete</Button>
                <Button variant="warning font yellow-background" onClick={() => props.showModal(true, props.anime, props.anime.id)}>Update</Button>
            </Card.Footer>
        </Card>
    );
};