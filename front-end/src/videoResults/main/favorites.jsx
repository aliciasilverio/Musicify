
import Crud from './crud';

const Favorites = (props) => {

    const listOfFavorites = props.favorites.map(favorite=>{
        console.log("This is the console.log", favorite);
        return favorite
    })

    return(
        <div>
            <h1>These are your favorites:</h1>
            <iframe width="560" height="315" title="links" src={listOfFavorites}></iframe>
            <div><Crud deleteVideo={props.deleteVideo} setFavorites={props.setFavorites}/></div>
        </div>




    )
};



export default Favorites;