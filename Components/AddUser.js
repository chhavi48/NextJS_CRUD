import { useReducer } from "react"
import { BiPlus } from "react-icons/bi"
import Success from "./success"
import { Error } from "./Error"
import {postUser,getUsers} from "../lib/helper"
import { useQueryClient,useMutation } from "react-query"
const formReducer=(state,event)=>{
 return {
    ...state,
    [event.target.name]:event.target.value
 }
}

export default function AddUser(){
    const queryClient = useQueryClient()
        
    const [formdata,setformdata]=useReducer(formReducer,{})
    const addMutation=useMutation(postUser,{
        onSuccess:()=>{
            queryClient.prefetchQuery('users',getUsers)
        }
    })


    const handleSubmit=(e)=>{
        e.preventDefault()
        if(Object.keys(formdata).length==0) return console.log("don't have a form data")
        let {firstname,lastname,email,salary,date,status}=formdata;
        // setformdata({...formdata,name:"",password:""})
   const model={
    name:`${firstname} ${lastname}`,
    avatar:`https://randomuser.me/api/portraits/men/${Math.floor(Math.random()*10)}.jpg`,
    email,
    salary,
    date,
    status:status ?? 'Active'
   }
   addMutation.mutate(model)
        
    }


    // if(Object.keys(formdata).length>0) return <Success msg={"data added successfully"}></Success>

    if(addMutation.isLoading) return <div>loading msg..</div>
    if(addMutation.isError) return <Error msg={addMutation.error.msg}></Error>
    if(addMutation.isSuccess) return <Success msg={"added sucess"}></Success>


    return (
        <form className="grid lg:grid-cols-2 w-4/6 gap-4"
        onSubmit={handleSubmit}>
            <div className="input-type">
        
                <input type="text"
                onChange={setformdata}
                 placeholder="FirstName" name="firstname" className="border w-full px-5 py-3 focus:outline-none rounded-md" />

            </div>
            <div className="input-type">
            <input type="text"
                onChange={setformdata}
             placeholder="LastName" name="lastname" className="border w-full px-5 py-3 focus:outline-none rounded-md" />
            </div>
            <div className="input-type">
            <input type="email"
                onChange={setformdata}
             placeholder="Email" name="email" className="border w-full px-5 py-3 focus:outline-none rounded-md" />
            </div>
            <div className="input-type">
            <input type="text"
                onChange={setformdata}
             placeholder="Salary" name="salary" className="border w-full px-5 py-3 focus:outline-none rounded-md" />
            </div>
            <div className="input-type">
        
            <input type="date"
                onChange={setformdata}
              name="date" className="border w-full px-5 py-3 focus:outline-none rounded-md" />
            </div>

            <div>
                <div className="form-check">
           <input onChange={setformdata}
           type="radio" value="Active"
           id='radioDefault1'
            name='status' className="form-check-input appearance-none 
           rounded-full h-4 w-4 border border-gray-300 
           bg-white checked:bg-green-500 checked:border-green-500 
           focus:outline-none transition duration-200
           mt-1 align-top bg-no-repeat bg-center bg-contain float-left
           mr-2  cursor:pointer
           "/>
           <label htmlFor="radioDefault1" className="inline-block text-gray-800">
            Active
           </label>
        </div>

<div className="flex gap-10 items-center">
        <div className="form-check">
           <input onChange={setformdata}
           type="radio" value="InActive"
           id='radioDefault1'
            name='status' className="form-check-input appearance-none 
           rounded-full h-4 w-4 border border-gray-300 
           bg-white checked:bg-green-500 checked:border-green-500 
           focus:outline-none transition duration-200
           mt-1 align-top bg-no-repeat bg-center bg-contain float-left
           mr-2  cursor:pointer
           "/>
           <label htmlFor="radioDefault2" className="inline-block text-gray-800">
            InActive
           </label>
        </div>
            </div>
            </div>
            <button className="flex justify-center 
            text-md w-2/6 bg-green-500 text-white px-4
            py-2 border rouded-md hover:bg-gray-50
            hover:border-green-500 hover:text-green-300">
                Add<span className="px-1"><BiPlus size={24}></BiPlus></span>
                </button>
            </form>
    )
}