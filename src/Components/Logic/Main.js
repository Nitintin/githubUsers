import React,{useState} from 'react'
import Input from '../Views/Input'
import Filter from '../Views/Filter'
import CardList from '../Logic/CardList'
import useFetch from '../../Hooks/useFetch'

const Main = () => {

    const [userInput,setUserInput]=useState('');
    const fetchURL ='https://api.github.com/users/';

    const [userData,isLoading,hasError]=useFetch(fetchURL,userInput);

    return (
        <div>
            <Input
                setUserInput={setUserInput}
            />
            <Filter/>
            <hr/>
            <CardList userData={userData} isLoading={isLoading} hasError={hasError}/>
        </div>
    )
}

export default Main
