import React from 'react'
import {useState, useEffect} from 'react'
import Input from './Input'
import GetPokemon from './GetPokemon'
import Pokemon from './Pokemon'


export default function CardContainer({counter, setCounter}) {
    const [pokemon, setPokemon] = useState('')
    const [answer, setAnswer] = useState("")
    const [refresh, setRefresh] = useState(false)
    useEffect(()=> {
        const pokeNum = (Math.floor(Math.random() * Math.floor(300)))

        GetPokemon(setPokemon, pokeNum)
    }, [refresh])
    return (
        <div>
            <Pokemon pokemon={pokemon} setPokemon={setPokemon} refresh={refresh} />
            <Input pokemon={pokemon} setPokemon={setPokemon} refresh={refresh} setRefresh={setRefresh} answer={answer} setAnswer={setAnswer} counter={counter} setCounter={setCounter}/>
        </div>
    )
}
