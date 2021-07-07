import React,{useState} from 'react'
import ShowInput from '../Views/ShowInput'

const Input = ({setFetchUserName}) => {

    const [userInput,setUserInput] = useState('');

    const handleInputChange=(e)=>{
        setUserInput(e.target.value)
    }

    const handleSubmitClick=(e)=>{
        e.preventDefault();
        setFetchUserName(userInput);
        setUserInput('');
    }

    return <ShowInput 
            userInput={userInput}
            handleInputChange={handleInputChange}
            handleSubmitClick={handleSubmitClick}
        />
}

export default Input
