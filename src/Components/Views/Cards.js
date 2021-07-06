import React from 'react'

const Cards = ({ item,index,handleDelete }) => {

    return (
        <div className="userCard" >
            <a href={item.html_url} >
                <img src={item.avatar_url} alt="user" width="200" height="200" />
                <h3>{item.name}</h3>
                <h4>{item.location}</h4>
                <h4>{item.followers}</h4>
            </a>
            <hr />
            <button onClick={()=>handleDelete(index)}>delete</button>
        </div>
    )
}

export default Cards
