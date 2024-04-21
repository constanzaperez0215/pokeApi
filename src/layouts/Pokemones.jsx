import { Button } from "react-bootstrap";
import Cards from "./Cards";
import { useContext, useState } from "react";
import { PokeContext } from "../context/PokeContext";
import { useNavigate } from "react-router-dom";


const Pokemones = () => {
  const {pokemon} = useContext(PokeContext)
  console.log(pokemon)

  const navigate = useNavigate()


  const irAPokemones = (e) => {
    e.preventDefault()
    navigate('/pokemon/${name}')
  }
  console.log(irAPokemones)

  return (
    <div className="selectPoke">
      <h2>Selecciona un pokemon</h2>
      <select className="select form-select" aria-label="Default select example">
      <option>Selecciona</option>
        {pokemon.map((poke) => {
          return(
            <option key={poke.name}>{poke.name}</option>
          )
        })}

      </select>
      <Button className="btn btn-dark" onClick={irAPokemones}>Ver Detalle</Button>
      <Cards />
    </div>
  );
};

export default Pokemones;
