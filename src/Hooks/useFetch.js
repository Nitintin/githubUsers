import axios from 'axios';
import {useState,useEffect} from 'react'

//add error handling for 404 status
//add cancellation request token
const useFetch = (fetchURL,userInput) => {


    const [userData,setUserData]=useState([]);
    const [isLoading,setIsLoading]=useState(true);
    const [hasError,setHasError]=useState(0);
    let cancelMethod;

    useEffect(() => {
        if(userInput.length){
            (async ()=>{
                const result=await axios.get(fetchURL+userInput,{
                    cancelToken:new axios.CancelToken(c => cancelMethod = c)
                })
                .catch(error => {
                    if(axios.isCancel(error)){
                        return
                    }
                    else if(error.response.status===404){
                        console.log("invalid username =>",error.response.status);
                        setHasError(404);
                    }else if(error.response.status===403){
                        console.log("You are loading too much of data!");
                        setHasError(403);
                    }
                });
                if(result){
                    setUserData(prevData=>[...prevData,result.data]);
                    setIsLoading(false); 
                }
                return () => cancelMethod();
            })();
        }
        return console.log("unmount");
    }, [fetchURL,userInput,hasError])

    return [userData,isLoading]
}

export default useFetch
