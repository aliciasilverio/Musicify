
import React, {Component} from 'react';
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";




class VideosComponent extends Component {

    

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
                                // Where to put this?
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
                    </div>
                    </div>
            </div>
        );
    }
}




export default VideosComponent;