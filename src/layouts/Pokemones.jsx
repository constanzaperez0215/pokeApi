import { useContext } from "react"
import { PokeContext } from "../context/PokeContext"


const Pokemones = () => {
  const {pokemones} = useContext(PokeContext)
  return (
    <div>Pokemones</div>
  )
}

export default Pokemones