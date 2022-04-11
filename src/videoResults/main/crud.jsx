import Button from "react-bootstrap/Button";



const Crud = (props) => {



    return(
        <div>
            <Button onClick={props.deleteVideo}>Delete</Button>
        </div>
    )
}


export default Crud;