import React from 'react'
import ShowCards from '../Views/ShowCards'

const CardList = ({ userData, isLoading, hasError, setUserData }) => {

    const handleDelete = (index) => {
        let tempData = userData.slice(0);
        tempData.splice(index, 1);
        setUserData(tempData)
    }

    if (userData.length > 0) {
        if (!isLoading) {
            return (
                <>
                    {(hasError === 404) ? <div className="cardListError">This doesnt seem a valid username..</div> : ''}
                    {(hasError === 403) ? <div className="cardListError">Woah! you have fetched enough for the day buddy</div> : ''}
                    <div className="userList">
                        {
                            userData.map((item, index) => (
                                <ShowCards
                                    key={item.login}
                                    item={item}
                                    index={index}
                                    handleDelete={handleDelete}
                                />
                            ))
                        }
                    </div>
                </>
            )
        } else {
            return <div className="cardListError">Loading....</div>
        }
    } else {
        return (
            <>
                {(hasError === 404) ? <div className="cardListError">This doesnt seem a valid username..</div> : ''}
                {(hasError === 403) ? <div className="cardListError">Woah! you have fetched enough for the day buddy</div> : ''}
                <div className="cardListError">Add some users!</div>
            </>
        )
    }
}

export default CardList
