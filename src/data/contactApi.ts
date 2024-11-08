import axios from "axios"

//post 
export const postContact=async (mail:string,problem:string,name:string)=>{
    const response=await axios.post("http://localhost:3000/api/contact/add",{
        mail,
        problem,
        name
    })
    return response
}