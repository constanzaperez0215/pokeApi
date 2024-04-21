import { useEffect, useState, createContext } from "react"

export const PokeContext= createContext()

const PokeProvider = ({children}) => {

  const [pokemon, setPokemon] = useState([])

  const getData = async () => {
    try {
      const res = await fetch("https://pokeapi.co/api/v2/pokemon/")
      const data = await res.json()
      setPokemon(data.results)
      console.log(nombres)

    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getData()
  },[])

  return (
    <PokeContext.Provider value={{pokemon, setPokemon}}>
      {children}
    </PokeContext.Provider>
  )
}

export default PokeProvider;