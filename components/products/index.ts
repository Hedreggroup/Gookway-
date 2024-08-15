import axios from "axios"
export const handleFetchProducts = async (fields:any)=>{
    const response = await axios.get(`${process.env.NEXT_PUBLIC_BASEURL}/products?fields=${fields}`)
    return response?.data.data.products
}