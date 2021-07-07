import React from 'react'

const Filter = ({handleFilterClick}) => {

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
