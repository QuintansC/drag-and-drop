import { useEffect, useState } from "react";
import api from "../utils/api"

const useCategories = () =>{
    const [data, setData] = useState([])
    useEffect(()=>{
        consultaCategoria()
    })
    async function consultaCategoria(){
        try{
            const result = await api.get('/categories').then(res=> {
                if(res.status===200){
                    setData(res.data)
                }
            });
            return result
        }
        catch(error: any){
           console.log(error)
        }    
    }
    return {
        data
    }
}

export default useCategories