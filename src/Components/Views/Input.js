import React,{useRef} from 'react'

const Input = ({handleFormSubmit}) => {

    const inputRef=useRef(null);

    return (
        <form className="inputContainer">
            <input type="text" placeholder="Enter github username" ref={inputRef} />
            <button type="submit" className="addBtn" onClick={(e) => handleFormSubmit(e,inputRef)}>Add</button>
        </form>
    )
}

export default Input
