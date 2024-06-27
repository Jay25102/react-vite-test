import './Pokecard.css'

const POKE_API = 'https://raw.githubusercontent.com/' + 
    'PokeAPI/sprites/master/sprites/pokemon/';

function Pokecard(props) {
    let imgSrc = `${POKE_API}${props.id}.png`;

    return (
        <div className="Pokecard">
            <div className="Pokemon-name">{props.name}</div>
            <img className="Pokemon-image" src={imgSrc}/>
            <div className="Pokemon-type">Type: {props.type}</div>
        </div>
    );
}

export default Pokecard;