import React from 'react'
import Cards from '../Views/Cards'

const CardList = ({userData,isLoading,hasError,setUserData}) => {

    const handleDelete=(index)=>{
        //setUserData(userData.splice(index,1));
        let tempData=userData.slice(0);
        tempData.splice(index,1);
        setUserData(tempData)
    }

    if(hasError){
        return <div>Woah! you have fetched enough for the day buddy</div>
    }else{
        if(userData.length>0){
            if(!isLoading){
                return <div className="userList">{userData.map((item,index) => <Cards key={item.login} item={item} index={index} handleDelete={handleDelete}/>)}</div>
            }else{
                return <div>Loading</div>
            }
        }else{
            return <div>Add some users!</div>
        }
    }
    
}

export default CardList
