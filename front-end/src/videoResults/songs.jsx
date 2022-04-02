
import React, {Component} from 'react';
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import Iframe from './iFrame';

const API = 'AIzaSyAc7BwysLNrkEqWb3vw7_oXa5Ve6vbst6E'
const result = 10;


class MusicVideos extends Component {

constructor(props){
    super(props);

    this.state = {
        resultyt: [],
        val: ""
    };
    this.clicked = this.clicked.bind(this);
}

clicked = ()=>{
    var finalURL = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=${result}&q=${this.state.val}&key=${API}`
    fetch(finalURL)
        .then((response)=>response.json())
        .then((response)=>{
            console.log("response ----------->", response);
            const resultyt = response.items.map(obj => "https://www.youtube.com/embed/"+obj.id.videoId);
            this.setState.resultyt = resultyt;
            
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
                        <h1 className="slide-up">Welcome to Musicify</h1>
                        <div className="Search">
                        <div className="container h-100">
                            <div className="row h-100 justify-content-center align-items-center"></div>
                            <InputGroup className="col-6">
                            <FormControl
                                placeholder="Search for Music"
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
                            this.state.resultyt.map((links, i) => {
                               <div><Iframe source={i}></Iframe></div>

                                
                            })
                        }
                    </div>
                    </div>
            </div>
        );
    }
}




export default MusicVideos;