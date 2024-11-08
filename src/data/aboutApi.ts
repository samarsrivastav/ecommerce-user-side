import axios from "axios"

export const getAbout=async()=>{
    const response=await axios.get("http://localhost:3000/api/about/get")
    return response
}