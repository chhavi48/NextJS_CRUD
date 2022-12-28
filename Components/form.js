export default function Form(){
    return (
        <form className="grid lg:grid-cols-2 w-4/6 gap-4">
            <div className="input-type">
        
                <input type="text" placeholder="FirstName" name="firstname" className="border w-full px-5 py-3 focus:outline-none rounded-md" />

            </div>
            <div className="input-type">
            <input type="text" placeholder="LastName" name="lastname" className="border w-full px-5 py-3 focus:outline-none rounded-md" />
            </div>
            <div className="input-type">
            <input type="email" placeholder="Email" name="email" className="border w-full px-5 py-3 focus:outline-none rounded-md" />
            </div>
            <div className="input-type">
            <input type="text" placeholder="Salary" name="salary" className="border w-full px-5 py-3 focus:outline-none rounded-md" />
            </div>

            <div>
                <div className="form-check">
           <input type="radio" value="Active"
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

        <div className="form-check">
           <input type="radio" value="InActive"
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
            <button className="flex justify-center 
            text-md w-2/6 bg-green-500 text-white px-4
            py-2 border rouded-md hover:bg-gray-50
            hover:border-green-500 hover:text-green-300">Add</button>
            </form>
    )
}