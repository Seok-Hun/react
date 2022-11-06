import { useParams } from "react-router-dom";
import './SecondRouter'

function Book(){
    const {id}=useParams()
    return(
        <h1>
            Book {id}
        </h1>
    )
}

export default Book