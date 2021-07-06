import React from 'react'

const Filter = ({userData,setUserData}) => {

    const handleFilterClick=(buttonClicked)=>{
        let filterData=userData.slice(0);
        if(buttonClicked==="followers"){
            setUserData(filterData.sort((a,b)=> a[buttonClicked]-b[buttonClicked]));
        }else{
            setUserData(filterData.sort((a,b)=> {
                if(a[buttonClicked]<b[buttonClicked]){
                    return -1
                }else{
                    return 1
                }
            }));
        }
    }

    return (
        <div className="filterContainer">
            <span className="filterContent">Sort by :</span>
            <button className="filterContent" onClick={()=>handleFilterClick("name")}>Name</button>
            <button className="filterContent" onClick={()=>handleFilterClick("location")}>Location</button>
            <button className="filterContent" onClick={()=>handleFilterClick("followers")}>Followers</button>
        </div>
    )
}

export default Filter
