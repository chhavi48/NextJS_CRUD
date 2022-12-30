import { useReducer } from "react"
import { BiBrush } from "react-icons/bi"
import Success from "./success"
import { useQuery ,useMutation,useQueryClient} from "react-query"
import { getUser,updateUser, } from "../lib/helper"

export default function UpdateUser({formId,formdata,setformdata}){
    const queryClient=useQueryClient()
    
    const {isLoading, isError, data, error} = useQuery(['users', formId], () => getUser(formId))
    const updateMutation=useMutation((newData)=>updateUser(formId,newData),{
        // onSuccess:async(data) => {
        
        //     queryClient.setQueryData('users',(old)=>[data])
        //     // console.log('data updated')
        //     // window.location.reload()
        // }
        
    })

    if(isLoading) return <div>Loading...!</div>
    if(isError) return <div>Error</div>
 
    const { name, avatar, salary, date, email, status } = data.users;
    //  const [firstname, lastname] = name ? name.split(' ') : formdata

    const handleSubmit=async(e)=>{
        e.preventDefault()
        let username=`${formdata.name  ?? name}`
        let updated=Object.assign({},data.users,formdata,{name:username})
        console.log(updated)
        await updateMutation.mutate(updated)
    
    }
         

    
        
    



    return (
        <form className="grid lg:grid-cols-2 w-4/6 gap-4"
        onSubmit={handleSubmit}>
            <div className="input-type">
        
                <input type="text"
                onChange={setformdata}
                defaultValue={name}
                 placeholder="FirstName" name="firstname" className="border w-full px-5 py-3 focus:outline-none rounded-md" />

            </div>
            <div className="input-type">
            <input type="text"
                onChange={setformdata}
                defaultValue={name}
             placeholder="LastName" name="lastname" className="border w-full px-5 py-3 focus:outline-none rounded-md" />
            </div>
            <div className="input-type">
            <input type="email"
                onChange={setformdata}
                defaultValue={email}
             placeholder="Email" name="email" className="border w-full px-5 py-3 focus:outline-none rounded-md" />
            </div>
            <div className="input-type">
            <input type="text"
                onChange={setformdata}
                defaultValue={salary}
             placeholder="Salary" name="salary" className="border w-full px-5 py-3 focus:outline-none rounded-md" />
            </div>
            <div className="input-type">
        
            <input type="date" 
                onChange={setformdata}
                defaultValue={date}
             name="date" className="border w-full px-5 py-3 focus:outline-none rounded-md" />
            </div>

            <div>
                <div className="form-check">
           <input 
           onChange={setformdata}
           defaultChecked={status=='Active'}
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
            defaultChecked={status=='InActive'}
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
            text-md w-2/6 bg-yellow-500 text-white px-4
            py-2 border rouded-md hover:bg-gray-50
            hover:border-yellow-500 hover:text-yellow-400">
                    Update    
                <span className="px-1"><BiBrush size={24}></BiBrush></span>
        </button>
            </form>
    )
    }