import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Cards = () => {
  const [dataPoke, setDataPoke] = useState("");
  const { name } = useParams();

  const getPokemon = async () => {
    try {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
      const data = await res.json();
      const src = data.sprites.back_default;
      const abilities = data.abilities.map((item) => item.ability.name);
      const altura = data.height;
      const peso = data.weight;
      const type = data.types.map((item) => item.type.name);
      setDataPoke({ src, abilities, name, altura, peso, type });
    } catch (error) {
      console.log(error);
    }
  };
  console.log(dataPoke);

  useEffect(() => {
    getPokemon();
  }, []);

  const navigate = useNavigate();
  const volver = () => {
    navigate("/pokemones/");
  };

  return (
    <div className="cardPoke">
      {dataPoke ? (
        <div className="card" style={{ width: "50rem" }}>
          <h2 className="titulo">{dataPoke.name.toUpperCase()}</h2>
          <div className="container">
          <div>
            <img className="imgCard" src={dataPoke.src} />
          </div>
          <div className="bodyCard">
            <hr></hr>

            <p>
              <strong>Peso:</strong> {dataPoke.peso / 10 + " kg"}
            </p>

            <p>
              <strong>Altura:</strong> {dataPoke.altura / 10 + " mts"}
            </p>
            <h6>Tipo:</h6>
            <ul>
              {dataPoke.type.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>

            <h6>Habilidades:</h6>
            <ul>
              {dataPoke.abilities.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          </div>
          <Button className="btn btn-dark" onClick={volver} variant="primary">
            Volver
          </Button>
        </div>
      ) : (
        "cargando"
      )}
    </div>
  );
};

export default Cards;
