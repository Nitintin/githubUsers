import React,{useRef} from 'react'

const Input = ({setUserInput}) => {

    const inputRef=useRef(null);

    return (
        <div>
            <input type="text" placeholder="enter github username" ref={inputRef}/>
            <button onClick={() => setUserInput(inputRef.current.value)}>Add</button>
        </div>
    )
}

export default Input
