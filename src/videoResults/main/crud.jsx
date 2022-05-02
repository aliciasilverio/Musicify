import Button from "react-bootstrap/Button";



const Crud = (props) => {



    return(
        <div>
            <Button variant="btn btn-danger" onClick={props.deleteVideo}>Delete</Button>
        </div>
    )
}


export default Crud;