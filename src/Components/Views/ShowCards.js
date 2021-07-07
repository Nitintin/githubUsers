import React from 'react'

const Cards = ({ item,index,handleDelete }) => {

    return (
        <div className="userCard" >
            <div className="upperDiv">
                <a href={item.html_url} >
                    <img src={item.avatar_url} alt="user" />
                    <div className="userDetail">
                        <h3>{(item.name)? item.name : "NA"}</h3>
                        <h5><b>Location : </b>{(item.location)? item.location : "NA"}</h5>
                        <h5><b>Followers : </b>{item.followers}</h5>
                    </div>
                </a>
                <div className="toolTipText">
                    {item.bio}
                </div>
            </div>
            <div className="lowerDiv">
                <button onClick={()=>handleDelete(index)} className="deleteBtn">Delete</button>
            </div>
        </div>
    )
}

export default Cards
