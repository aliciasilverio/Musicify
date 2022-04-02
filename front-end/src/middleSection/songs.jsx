import React from "react";

const API = 'AIzaSyAc7BwysLNrkEqWb3vw7_oXa5Ve6vbst6E'
const result = 10;

var finalURL = `https://www.googleapis.com/youtube/v3/search?key=${API}&part=snippet,id&order=date&maxResults=${result}`

const Songs = () => {

constructor=(props)=>{
    super(props);

    this.state = {
        resultyt: []
    };
    this.clicked = this.clicked.bind(this);
}

clicked = ()=>{
    fetch(finalURL)
        .then((response)=>response.son())
        .then((responseJson)=>{
            console.log(responseJson)
        })
        .catch((error)=>{
            console.error(err)
        })
}

render=()=>{
        return(
            <div>
                <div>
                    <h1 className='songs-h1'>Songs</h1>
                </div>
                <div>
                    <button onClick={this.clicked}>Search for Music Video</button>

                    <div className="youtube">
                        <iframe width="560" height="315" src="https://www.youtube.com/watch?v=QYh6mYIJG2Y" frameborder="0" allowFullScreen></iframe>
                    </div>
                </div>
            </div>
        );
    }
}

export default Songs;