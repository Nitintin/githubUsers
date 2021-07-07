import React,{useState} from 'react'
import Input from '../Logic/Input'
import Filter from '../Logic/Filter'
import CardList from '../Logic/CardList'
import useFetch from '../../Hooks/useFetch'

const Main = () => {

    const [userData,setUserData]=useState([]);
    const [fetchUserName,setFetchUserName]=useState('');
    const fetchURL ='https://api.github.com/users/';

    const [isLoading,hasError]=useFetch(fetchURL,fetchUserName,userData,setUserData);

    return (
        <div>
            <Input
                setFetchUserName={setFetchUserName}
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
