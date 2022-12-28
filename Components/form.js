import { useReducer } from "react";
import AddUser from "./AddUser";
import UpdateUser from "./UpdateUser";

export default function Form(){
    const flag=true;

    return (
        <div className='container mx-auto py-5'>
              {flag ? <AddUser></AddUser>:<UpdateUser></UpdateUser>}
            </div>



 

    )
}