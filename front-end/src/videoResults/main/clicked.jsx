import React from "react";
import Iframe from "../iFrame";

const ClickedComponent = (props) =>{

    const API = 'AIzaSyAc7BwysLNrkEqWb3vw7_oXa5Ve6vbst6E'
    const result = 10;

    return(
        constructor(props){
            super(props);
        
            this.state = {
                resultyt: [],
                val: ""
            };
            this.clicked = this.clicked.bind(this)
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
        <Iframe src={src}></Iframe>
        {
            this.state.resultyt.map((links, i) => {
               <div><Iframe source={i}></Iframe></div>
        

                
            })
        }
    )
}

export default ClickedComponent;