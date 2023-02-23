import axios from "axios";
const baseUrl = 'http://localhost:8090/api/collections/product_categories/records';




export const getCategories = async() => {
    try{
        const res = await axios.get(baseUrl)
        return [res.data,null]
    }
    catch(err) {
        return [null,err.message]
    }
}

