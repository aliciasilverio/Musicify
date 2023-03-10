import React, { Component } from 'react';
import {
  InputGroup,
  FormControl,
  Button,
  Container,
  Row,
  Col
} from 'react-bootstrap';
import Favorites from './main/favorites';

const API = 'AIzaSyBMjW8tc-4bYXt_Fbo6pwgq9S31evfL-tE';
const result = 20;

class MusicVideos extends Component {
  constructor(props) {
    super(props);

    this.state = {
      resultyt: [],
      val: "",
      favorites: []
    };
    this.addToFavorites = this.addToFavorites.bind(this);
    this.searchInput = React.createRef();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.searchInput.current.addEventListener('keyup', (event) => {
      if (event.keyCode === 13) {
        this.handleSubmit();
      }
    });
  }

  handleSubmit() {
    const searchQuery = this.searchInput.current.value;
    // Use the searchQuery to search for videos using the Google Youtube API
    // ...
  }

  addToFavorites(e) {
    e.preventDefault();
    const updatedFavorites = e.target.value;
    this.setState(prevState => ({ favorites: [...prevState.favorites, updatedFavorites] }));
    console.log(e.target.value);
  }

  deleteVideo = (e) => {
    e.preventDefault()
    const deleteVariable = [...this.state.favorites]
    deleteVariable.pop();
    this.setState({ favorites: deleteVariable });
  }

  editVideo = (e) => {
    e.preventDefault()
    const editedLink = e.target.value;
    this.setState({ favorites: editedLink });
  }

  handleSubmit = () => {
    var finalURL = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=${result}&q=${this.state.val}&key=${API}`
    fetch(finalURL)
      .then((response) => response.json())
      .then((response) => {
        console.log("response ----------->", response);
        const updatedResultyt = response.items.map(obj => "https://www.youtube.com/embed/" + obj.id.videoId);
        this.setState({ resultyt: updatedResultyt });
      })
      .catch((err) => {
        console.error(err)
      })
  }

  render() {
    const videos = this.state.resultyt.slice(0, 6).map((video, index) => {
      return (
        <Col key={index}>
          <div className="embed-responsive">
            <iframe allowFullScreen width="560" height="315" title="links" src={video}></iframe>
            <br />
            <Button type='submit' value={video} onClick={this.addToFavorites}>Add to Favorites</Button>
          </div>
        </Col>
      )
    })

    return (
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
                      ref={this.searchInput}
                    />
                    <Button onClick={this.handleSubmit} variant="outline-secondary" id="button-addon2">
                      Search
                    </Button>
                  </InputGroup>
                </div>
                        </div>
                    </div>
                 </section>
                   <div>
                        {
// This makes use of two map() functions to generate the rows and columns of the videos. The first map() iterates over an array of even numbers [0, 2, 4, 6, 8, 10, 12] and generates a row for each even number. 
// The second map() iterates over an array containing two elements: the even number and the next odd number, and generates a column for each element in the array. The last video is added outside of the loop since it is the only one that does not fit the pattern.
<Container className="musicvideos">
{[0, 2, 4, 6, 8, 10, 12].map((index) => (
  <Row key={index}>
    {[index, index+1].map((vidIndex) => (
      <Col key={vidIndex}>
        <div className="embed-responsive">
          <iframe allowfullscreen width="560" height="315" title="links" src={this.state.resultyt[vidIndex]}></iframe> 
          <br />
          <Button type='submit' value={this.state.resultyt[vidIndex]} onSubmit={this.addToFavorites}>Add to Favorites</Button>
        </div>
      </Col>
    ))}
  </Row>
))}

{/* <Row>
  <Col>
    <div className="embed-responsive">
      <iframe allowfullscreen width="560" height="315" title="links" src={this.state.resultyt[14]}></iframe> 
      <br />
      <Button type='submit' value={this.state.resultyt[14]} onSubmit={this.addToFavorites}>Add to Favorites</Button>
    </div>
  </Col>
</Row> */}
 
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