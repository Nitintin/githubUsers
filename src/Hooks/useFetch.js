import axios from 'axios';
import {useState,useEffect} from 'react'

//add error handling for 404 status
//add cancellation request token
const useFetch = (fetchURL,userInput,userData,setUserData) => {

    const [isLoading,setIsLoading]=useState(true);
    const [hasError,setHasError]=useState(0);
    
    useEffect(() => {
        let cancelMethod;
        if(userInput.length){
            (async ()=>{
                const result=await axios.get(fetchURL+userInput,{
                    cancelToken:new axios.CancelToken(c => cancelMethod = c)
                })
                .catch(error => {
                    if(axios.isCancel(error)){
                        return;
                    }
                    else if(error.response.status===404){
                        console.log("invalid username =>",error.response.status);
                        setHasError(404);
                        return;
                    }else if(error.response.status===403){
                        console.log("You are loading too much of data!");
                        setHasError(403);
                        return;
                    }
                });
                if(result){
                    if(userData.indexOf(result.data)===-1){
                        console.log(userData)
                        console.log(result.data)
                        setUserData(prevData=>[...prevData,result.data]);
                        setIsLoading(false); 
                        setHasError(0);
                    }
                }
                return () => cancelMethod();
            })();
        }
    }, [fetchURL,userInput])

    return [isLoading,hasError]
}

export default useFetch
