import React, {useEffect} from 'react'

export default function Pokemon({pokemon, setPokemon, refresh}) {
    return (
        <div>
            <img src={pokemon.picture} alt={pokemon.name}/>
        </div>
    )
}
