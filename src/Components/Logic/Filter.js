import React from 'react'
import ShowFilter from '../Views/ShowFilter'

const Filter = ({userData,setUserData}) => {

    const handleFilterClick=(buttonClicked)=>{
        let filterData=userData.slice(0);
        if(buttonClicked==="followers"){
            setUserData(filterData.sort((a,b)=> a[buttonClicked]-b[buttonClicked]));
        }else{
            setUserData(filterData.sort((a,b)=> {
                if (a[buttonClicked]===null){
                    a[buttonClicked]=""
                }
                if (b[buttonClicked]===null){
                    b[buttonClicked]=""
                }
                return (a[buttonClicked].toUpperCase()<b[buttonClicked].toUpperCase()) ? -1 : 1
            }));
        }
    }
    return <ShowFilter handleFilterClick={handleFilterClick}/>
}
export default Filter
