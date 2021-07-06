import React from 'react'
import Cards from '../Views/Cards'

const CardList = ({userData,isLoading,hasError}) => {
    if(hasError){
        return <div>Woah! you have fetched enough for the day buddy</div>
    }else{
        if(userData.length>0){
            if(!isLoading){
                return <div className="userList">{userData.map(item => <Cards item={item}/>)}</div>
            }else{
                return <div>Loading</div>
            }
        }else{
            return <div>Add some users!</div>
        }
    }
    
}

export default CardList
