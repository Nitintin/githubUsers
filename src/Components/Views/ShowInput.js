import React from 'react'

const Input = ({userInput,handleInputChange,handleSubmitClick}) => {

    return (
        <form className="inputContainer">
            <input type="text" placeholder="Enter github username" value={userInput} onChange={(e)=>handleInputChange(e)}/>
            <button type="submit" className="addBtn" onClick={handleSubmitClick}>Add</button>
        </form>
    )
}

export default Input
