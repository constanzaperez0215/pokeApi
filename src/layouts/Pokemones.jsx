import { Button } from "react-bootstrap";
import Cards from "./Cards";
import { useContext } from "react";
import { PokeContext } from "../context/PokeContext";


const Pokemones = () => {
  // const {pokemon} = useContext(PokeContext)
  // console.log(pokemon)
  return (
    <div className="selectPoke">
      <h2>Selecciona un pokemon</h2>
      <select className="select form-select" aria-label="Default select example">
        {/* <option selected >Pokemones</option> */}
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
      <Button className="btn btn-dark">Ver Detalle</Button>
      <Cards />
    </div>
  );
};

export default Pokemones;
