// import { useState } from "react";



// const IndividualArtists = (props) => {
//     const [detailsOpen, setDetailsOpen] = useState(false)
//     const toggleDetails = () => {
//         setDetailsOpen(!detailsOpen)
//     }

//     return (
//         <div class="artist-card">
//             <img onClick={toggleDetails} src={props.artist.image} alt=""/>
//             { detailsOpen 
//              ? 
//                 <div>
//                     <h2>{props.artist.name}</h2>
//                     <p>{props.artist.name} is a {props.artist.species} from {props.artist.location}</p>
//                 </div>
//              :
//                 null
//             }          
//         </div>
//     )
// }

// export default IndividualArtists;