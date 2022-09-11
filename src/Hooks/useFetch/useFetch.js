import axios from "axios"
import { useEffect, useState } from "react"
import * as Network from 'expo-network';

function useFetch(url){
    const [data,setData]= useState([]);
    const [loading,SetLoading] = useState(true)
    const [error,setError] = useState(false)
    const [isInternet,setInternet] = useState(true)

    const checkNetwork = async()=>{
        const networkStatus =  await Network.getNetworkStateAsync()
        setInternet(networkStatus)
    }

    const fetchData = async ()=>{
        try {
            const {data:response} = await axios.get(url)
            SetLoading(false)
            setData(response)
            console.log(url)
        } 
        catch (error) {
            console.log(error)
            setError(true)
            SetLoading(false)
        }
        
    }
        
    useEffect(()=>{
        checkNetwork()
        fetchData()
    },[])
    
    return {data,loading,error ,  isInternet}
}

export default useFetch