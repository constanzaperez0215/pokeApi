import { Button } from "react-bootstrap";
import Cards from "./Cards";
import { useContext } from "react";
import { PokeContext } from "../context/PokeContext";
import { useNavigate } from "react-router-dom";


const Pokemones = () => {
  const {pokemon , name, setName} = useContext(PokeContext)

  const navigate = useNavigate()

  const irAPokemones = () => {
    navigate(`/pokemones/${name}`)
  }

  const select = (e) => setName(e.target.value)


  return (
    <div className="selectPoke">
      <h2>Selecciona un pokemon</h2>

      <select onChange={select} value={name} className="select form-select">
      <option value="">Selecciona</option>
        {pokemon.map((poke) => {
          return(
            <option key={poke.name} value={poke.name}>{poke.name}</option>
          )
        })}

      </select>
      <Button className="btn btn-dark" disabled={name ===""} onClick={irAPokemones}>Ver Detalle</Button>

    </div>
  );
};

export default Pokemones;
