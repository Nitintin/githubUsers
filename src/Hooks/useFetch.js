import axios from 'axios';
import {useState,useEffect} from 'react'

const useFetch = (fetchURL,fetchUserName,userData,setUserData) => {

    const [isLoading,setIsLoading]=useState(true);
    const [hasError,setHasError]=useState(0);
    
    useEffect(() => {
        let cancelMethod;
        if(fetchUserName.length){
            (async ()=>{
                const result=await axios.get(fetchURL+fetchUserName,{
                    cancelToken:new axios.CancelToken(c => cancelMethod = c)
                })
                .catch(error => {
                    if(axios.isCancel(error)) return
                    else if(error.response.status===404){
                        setHasError(404);
                        return;
                    }else if(error.response.status===403){
                        setHasError(403);
                        return;
                    }
                });
                if(result){
                    if(userData.indexOf(result.data)===-1){
                        // console.log(userData)
                        // console.log(result.data)
                        setUserData(prevData=>[...prevData,result.data]);
                        setIsLoading(false); 
                        setHasError(0);
                    }
                }
                return () => cancelMethod();
            })();
        }
    }, [fetchURL,fetchUserName])
    return [isLoading,hasError]
}

export default useFetch
