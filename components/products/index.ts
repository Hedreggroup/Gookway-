import axios from "axios"
export const handleFetchProducts = async ()=>{
    const response = await axios.get(`${process.env.NEXT_PUBLIC_BASEURL}/products?fields=name,price,stock,images`)
    return response?.data.data.products
}