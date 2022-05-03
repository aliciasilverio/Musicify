
import Crud from './crud';
import { InputGroup, FormControl, Button, Container, Row, Col } from 'react-bootstrap';

const Favorites = (props) => {

    const listOfFavorites = props.favorites.map(favorite=>{
        console.log("This is the console.log", favorite);
        return favorite
    })

    return(
        <div>
            <h1>These are your favorites:</h1>
            <Container>
                <Row>    
                    <Col>
                        <iframe width="560" height="315" title="links" src={listOfFavorites[0]} allowFullScreen></iframe>
                        <div><Crud deleteVideo={props.deleteVideo} setFavorites={props.setFavorites}/></div>
                    </Col>
  
                    <Col>
                        <iframe width="560" height="315" title="links" src={listOfFavorites[1]} allowFullScreen></iframe>
                        <div><Crud deleteVideo={props.deleteVideo} setFavorites={props.setFavorites}/></div>
                    </Col>
    
                    <Col>
                        <iframe width="560" height="315" title="links" src={listOfFavorites[2]} allowFullScreen></iframe>
                        <div><Crud deleteVideo={props.deleteVideo} setFavorites={props.setFavorites}/></div>
                    </Col>
                </Row>

            </Container>
        </div>




    )
};



export default Favorites;