import { useEffect, useState, useContext } from "react";
import { Button, Card } from "react-bootstrap";
// import {  useParams } from "react-router-dom";
import { PokeContext } from "../context/PokeContext";
import { useParams, useNavigate } from "react-router-dom";


const Cards = () => {
  const [dataPoke, setDataPoke] = useState("");
  const { name } = useContext(PokeContext)
  // const { name } = useParams()

  console.log(name, "aqui");

  const getPokemon = async () => {
    try {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
      const data = await res.json();
      const src = data.sprites.back_default
      const abilities = data.abilities.map((item) => item.ability.name)

      setDataPoke({src, abilities , name});
      console.log(data);

    } catch (error) {
      console.log(error);
    }
  };
  console.log(dataPoke)

  useEffect(() => {
    getPokemon();
  },[]);

  const navigate = useNavigate();
  const volver = () => {
    navigate("/pokemones/");
  };


  return (
    <>
      {dataPoke ? (
        <Card className="card" style={{ width: "20rem" }}>
          <Card.Img variant="top" src={dataPoke.src} />
          <Card.Body>
            <Card.Title>{dataPoke.name}</Card.Title>
            <hr></hr>
            <Card.Text>Habilidades:</Card.Text>
              {dataPoke.abilities.map((item,index) =>
                <Card.Text key={index}>
                  
                      <li>
                        {item}
                      </li> 
                </Card.Text>
               )}
            <Button onClick={volver} variant="primary">Volver</Button>
          </Card.Body>
        </Card>
      ) : (
        "cargando"
      )}
    </>
  );
};

export default Cards;
