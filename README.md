# Pokemon Guessing Game

This is a basic React application that uses the pokemon api to create an input based guessing game.

On web load, the first pokemon image will appear and the input will be available for the user to guess the name of the pokemon.

The name is grabbed by a useState and matched along side the data that it grabbed from the api.

A next button is avaiable after a correct guess that re renders a component that grabs a new pokemon through useEffect.

A score is also available to record the amount of correct guessing during a single play-time. (Score will be refreshed upon website refresh.)

---

API Used: [PokeAPI](https://pokeapi.co/)

(By default, the first 300 pokemon are used.)
