import Pokecard from "./Pokecard";
import './Pokedex.css'

function Pokedex(props) {
    return (
        <div className="Pokedex">
            <h2 className="Pokedex-title">Pokedex!</h2>
            <Pokecard id={114} name="tangela" type="grass"/>
            <Pokecard id={222} name="corsola" type="water/rock"/>
            <Pokecard id={445} name="garchomp" type="ground/dragon"/>
        </div>
    );
}

export default Pokedex;