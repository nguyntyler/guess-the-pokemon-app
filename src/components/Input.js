import React, {useState, useCallback} from 'react'

export default function Input({pokemon, answer, setAnswer, refresh, setRefresh, counter, setCounter}) {
    const [textInput, setTextInput] = useState("")

    const inputHandler = (e) => {
        setTextInput(e.target.value)
    }
    const autoFocus = useCallback(el => el ? el.focus() : null, [])
    
    const submitHandler = (e) => {
        e.preventDefault();
        if (textInput === pokemon.name) {
            setAnswer("Correct")
            setCounter(counter + 1)
        } else {
            setAnswer("Incorrect")
        }
    }

    const refreshPokemon = (e) => {
        e.preventDefault();            
        setTextInput("")
            setAnswer("")
        setRefresh(!refresh)
    }


    return (
        <div>
            <form >
                {answer === "Correct" 
                ? (<input type="text" value={textInput} disabled onChange={inputHandler}/>)
                : (<input type="text" value={textInput} autoFocus ref={autoFocus} onChange={inputHandler}/>)}
                {answer === "Correct" 
                ? (<button ref={autoFocus} onClick={refreshPokemon}>Next!</button>) 
                : (<button onClick={submitHandler} >Guess!</button>)}
            </form>
            <h3>{answer}</h3>
        </div>
    )
}
