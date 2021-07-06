import React from 'react'

const Cards = ({item}) => {
    return (
        <a className="userCard" href={item.url}>
            <img src={item.avatar_url} alt="user" width="200" height="200"/>
            <h3>{item.name}</h3>
            <h4>{item.location}</h4>
            <h4>{item.followers}</h4>
        </a>
    )
}

export default Cards
