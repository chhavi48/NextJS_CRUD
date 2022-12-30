
import  UpdateUser  from "./UpdateUser";

import AddUser from "./AddUser";
import  {useReducer} from "react"
import { useSelector } from "react-redux";
const formReducer=(state,event)=>{
    return {
       ...state,
       [event.target.name]:event.target.value
    }
   }
   
export default function Form(){
    const [formdata,setformdata]=useReducer(formReducer,{})
    const formId=useSelector((state)=>state.app.client.formId)
    const flag=false;



    return (
        <div className='container mx-auto py-5'>
              {formId? UpdateUser({formId,formdata,setformdata}):AddUser({formdata,setformdata})}
            </div>
            )
}