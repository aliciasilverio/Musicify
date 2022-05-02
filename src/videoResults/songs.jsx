
import React, {Component} from 'react';
import { InputGroup, FormControl, Button, Container, Row, Col } from 'react-bootstrap';
import Favorites from './main/favorites';



const API = 'AIzaSyBMjW8tc-4bYXt_Fbo6pwgq9S31evfL-tE'
const result = 20;



class MusicVideos extends Component {

constructor(props){
    super(props);

    this.state = {
        resultyt: [],
        val: "",
        favorites: []
    };
    this.clicked = this.clicked.bind(this);
    this.addToFavorites = this.addToFavorites.bind(this);
} 

addToFavorites = (e) => {
    e.preventDefault();
    const updatedFavorites = e.target.value;
    this.setState(prevState => ({favorites: [...prevState.favorites, updatedFavorites]}) );
    console.log(e.target.value);
}

deleteVideo = (e) => {
    e.preventDefault()
    const deleteVariable = [...this.state.favorites]
    deleteVariable.pop();
    this.setState({favorites: deleteVariable});
}

editVideo = (e) => {
    e.preventDefault()
    const editedLink = e.target.value;
    this.setState({favorites: editedLink});
}


clicked = ()=>{
    var finalURL = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=${result}&q=${this.state.val}&key=${API}`
    fetch(finalURL)
        .then((response)=>response.json())
        .then((response)=>{
            console.log("response ----------->", response);
            const updatedResultyt = response.items.map(obj => "https://www.youtube.com/embed/"+obj.id.videoId);
            this.setState({ resultyt : updatedResultyt });            
        })
        .catch((err)=>{
            console.error(err)
        })
}

render(){
        return(
            <div>
                <div>
                <section className="Home">
                    <div className='welcome-section'>
                        <h1 className="slide-up">Welcome to Videoify</h1>
                        <div className="Search">
                        <div className="container h-100">
                            <div className="row h-100 justify-content-center align-items-center"></div>
                            <InputGroup className="col-6">
                            <FormControl
                                placeholder="Search for Videos"
                                aria-label="Search"
                                aria-describedby="basic-addon2"
                                onChange={e => this.setState({ val: e.target.value })}
                            />
                            <Button onClick={this.clicked} variant="outline-secondary" id="button-addon2">
                            Search
                            </Button>
                            </InputGroup>
                        </div>
                        </div>
                    </div>
                 </section>
                   <div>
                        {

                        <Container className="musicvideos">
                            <Row>
                                <Col>
                                    <div className="embed-responsive">
                                        <iframe width="560" height="315" title="links" src={this.state.resultyt[0]}></iframe>
                                        <br />
                                        <Button value={this.state.resultyt[0]} onClick={this.addToFavorites}>Add to Favorites</Button>
                                    </div>
                                </Col>
                                <Col>
                                    <div className="embed-responsive">
                                        <iframe width="560" height="315" title="links" src={this.state.resultyt[1]}></iframe>
                                        <br />
                                        <Button value={this.state.resultyt[1]} onClick={this.addToFavorites}>Add to Favorites</Button>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <div className="embed-responsive">
                                        <iframe width="560" height="315" title="links" src={this.state.resultyt[2]}></iframe>
                                        <br />
                                        <Button value={this.state.resultyt[2]} onClick={this.addToFavorites}>Add to Favorites</Button>
                                    </div>
                                </Col>
                                <Col>
                                    <div className="embed-responsive">
                                        <iframe width="560" height="315" title="links" src={this.state.resultyt[3]}></iframe>
                                        <br />
                                        <Button value={this.state.resultyt[3]} onClick={this.addToFavorites}>Add to Favorites</Button>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <div className="embed-responsive">
                                        <iframe width="560" height="315" title="links" src={this.state.resultyt[4]}></iframe>
                                        <br />
                                        <Button value={this.state.resultyt[4]} onClick={this.addToFavorites}>Add to Favorites</Button>
                                    </div>
                                </Col>
                                <Col>
                                    <div className="embed-responsive">
                                        <iframe width="560" height="315" title="links" src={this.state.resultyt[5]}></iframe>
                                        <br />
                                        <Button value={this.state.resultyt[5]} onClick={this.addToFavorites}>Add to Favorites</Button>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <div className="embed-responsive">
                                        <iframe width="560" height="315" title="links" src={this.state.resultyt[6]}></iframe>
                                        <br />
                                        <Button value={this.state.resultyt[6]} onClick={this.addToFavorites}>Add to Favorites</Button>
                                    </div>
                                </Col>
                                <Col>
                                    <div className="embed-responsive">
                                        <iframe width="560" height="315" title="links" src={this.state.resultyt[7]}></iframe>
                                        <br />
                                        <Button value={this.state.resultyt[7]} onClick={this.addToFavorites}>Add to Favorites</Button>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <div className="embed-responsive">
                                        <iframe width="560" height="315" title="links" src={this.state.resultyt[8]}></iframe>
                                        <br />
                                        <Button value={this.state.resultyt[8]} onClick={this.addToFavorites}>Add to Favorites</Button>
                                    </div>
                                </Col>
                                <Col>
                                    <div className="embed-responsive">
                                        <iframe width="560" height="315" title="links" src={this.state.resultyt[9]}></iframe>
                                        <br />
                                        <Button value={this.state.resultyt[9]} onClick={this.addToFavorites}>Add to Favorites</Button>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <div className="embed-responsive">
                                        <iframe width="560" height="315" title="links" src={this.state.resultyt[10]}></iframe>
                                        <br />
                                        <Button value={this.state.resultyt[10]} onClick={this.addToFavorites}>Add to Favorites</Button>
                                    </div>
                                </Col>
                                <Col>
                                    <div className="embed-responsive">
                                        <iframe width="560" height="315" title="links" src={this.state.resultyt[11]}></iframe>
                                        <br />
                                        <Button value={this.state.resultyt[11]} onClick={this.addToFavorites}>Add to Favorites</Button>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <div className="embed-responsive">
                                        <iframe width="560" height="315" title="links" src={this.state.resultyt[12]}></iframe>
                                        <br />
                                        <Button value={this.state.resultyt[12]} onClick={this.addToFavorites}>Add to Favorites</Button>
                                    </div>
                                </Col>
                                <Col>
                                    <div className="embed-responsive">
                                        <iframe width="560" height="315" title="links" src={this.state.resultyt[13]}></iframe>
                                        <br />
                                        <Button value={this.state.resultyt[13]} onClick={this.addToFavorites}>Add to Favorites</Button>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <div className="embed-responsive">
                                        <iframe width="560" height="315" title="links" src={this.state.resultyt[14]}></iframe>
                                        <br />
                                        <Button value={this.state.resultyt[14]} onClick={this.addToFavorites}>Add to Favorites</Button>
                                    </div>
                                </Col>
                                <Col>
                                    <div className="embed-responsive">
                                        <iframe width="560" height="315" title="links" src={this.state.resultyt[15]}></iframe>
                                        <br />
                                        <Button value={this.state.resultyt[15]} onClick={this.addToFavorites}>Add to Favorites</Button>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <div className="embed-responsive">
                                        <iframe width="560" height="315" title="links" src={this.state.resultyt[16]}></iframe>
                                        <br />
                                        <Button value={this.state.resultyt[16]} onClick={this.addToFavorites}>Add to Favorites</Button>
                                    </div>
                                </Col>
                                <Col>
                                    <div className="embed-responsive">
                                        <iframe width="560" height="315" title="links" src={this.state.resultyt[17]}></iframe>
                                        <br />
                                        <Button value={this.state.resultyt[17]} onClick={this.addToFavorites}>Add to Favorites</Button>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <div className="embed-responsive">
                                        <iframe width="560" height="315" title="links" src={this.state.resultyt[18]}></iframe>
                                        <br />
                                        <Button value={this.state.resultyt[18]} onClick={this.addToFavorites}>Add to Favorites</Button>
                                    </div>
                                </Col>
                                <Col>
                                    <div className="embed-responsive">
                                        <iframe width="560" height="315" title="links" src={this.state.resultyt[19]}></iframe>
                                        <br />
                                        <Button value={this.state.resultyt[19]} onClick={this.addToFavorites}>Add to Favorites</Button>
                                    </div>
                                </Col>
                            </Row>
                            </Container>
                         
                        }
                        <div><Favorites deleteVideo={this.deleteVideo} favorites = {this.state.favorites}/></div>
                        <div>
                            <input type="text" onChange={event => this.setState({favorites: [event.target.value]})}/>
                            <p>Paste Youtube Link to add a custom favorite</p>
                        </div>
                    </div>
                    </div>
            </div>
        );
    }
}




export default MusicVideos;