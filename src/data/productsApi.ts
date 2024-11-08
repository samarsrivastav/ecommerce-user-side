import axios from "axios"

export const getProduct=async()=>{
    const response=await axios.get("http://localhost:3000/api/products/get")
    return response
}