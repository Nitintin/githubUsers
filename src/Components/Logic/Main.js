import React,{useState} from 'react'
import Input from '../Views/Input'
import Filter from '../Views/Filter'
import CardList from '../Logic/CardList'
import useFetch from '../../Hooks/useFetch'

const Main = () => {

    const [userData,setUserData]=useState([]);
    const [userInput,setUserInput]=useState('');
    const fetchURL ='https://api.github.com/users/';

    const [isLoading,hasError]=useFetch(fetchURL,userInput,userData,setUserData);

    const handleFormSubmit=(e,ref)=>{
        e.preventDefault();
        setUserInput(ref.current.value);
    }
    return (
        <div>
            <Input
                handleFormSubmit={handleFormSubmit}
            />
            <Filter 
                userData={userData} 
                setUserData={setUserData}
            />
            <CardList 
                userData={userData} 
                isLoading={isLoading} 
                hasError={hasError} 
                setUserData={setUserData}
            />
        </div>
    )
}

export default Main
