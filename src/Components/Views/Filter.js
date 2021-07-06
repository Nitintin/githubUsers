import React from 'react'

const Filter = ({userData,setUserData}) => {

    const handleFilterClick=(buttonClicked)=>{
        let filterData=userData.slice(0);
        if(buttonClicked==="followers"){
            setUserData(filterData.sort((a,b)=> a[buttonClicked]-b[buttonClicked]));
        }else{
            setUserData(filterData.sort((a,b)=> {
                if(a[buttonClicked].toLowerCase()<b[buttonClicked].toLowerCase()){
                    return -1
                }else{
                    return 1
                }
            }));
        }
    }

    return (
        <div>
            Sort by :
            <button onClick={()=>handleFilterClick("name")}>name</button>
            <button onClick={()=>handleFilterClick("location")}>location</button>
            <button onClick={()=>handleFilterClick("followers")}>followers</button>
        </div>
    )
}

export default Filter
