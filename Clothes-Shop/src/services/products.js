import axios from "axios";
const baseUrl = 'http://localhost:8090/api/collections/clothes_shop/records';



export const getProducts =  async (data) => {
    const params = {
        perPage: 4,
        ...data,
    }
    try {
    const res = await axios.get(baseUrl, {params})
    return [res.data , null]
    } 
    catch (err) {
        return [null,err.message]
    }
};


export const updateCategory = async (id, params) => {
    try {
        const res = await axios.patch(`${baseUrl}/${id}`,params)
        return [res.data,null]
    } catch (err) {
        return [null,err.message]
    }
};
