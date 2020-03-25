import React from "react";
import { newContextComponents } from "@drizzle/react-components";
import { Card } from "../src/ships/Card/Card.controller";
import PokemonOwnerFields from "./Components/PokemonOwnerFields";
import { Slide } from 'react-slideshow-image';
import logo1 from '../src/pokemons/pk1.svg';
import logo2 from '../src/pokemons/pk2.svg';
import logo3 from '../src/pokemons/pk5.svg';
import logo4 from '../src/pokemons/pk4.svg';
import logo5 from '../src/pokemons/pk6.svg';
import logo6 from '../src/pokemons/pk7.svg';
import logo7 from '../src/pokemons/pk8.svg';
import logo8 from '../src/pokemons/pk9.svg';
import logo9 from '../src/pokemons/pk10.svg';
import logo10 from '../src/pokemons/pk11.svg';
import logo11 from '../src/pokemons/pk12.svg';
import logo12 from '../src/pokemons/pk13.svg';
import logo13 from '../src/pokemons/pk14.svg';


const { AccountData, ContractData, ContractForm } = newContextComponents;

const slideImages = [
  logo1,
  logo2,
  logo3,
  logo4,
  logo5,
  logo6,
  logo7,
  logo8,
  logo9,
  logo10,
  logo11,
  logo12,
  logo13
];

const properties = {
  duration: 5000,
  transitionDuration: 500,
  indicators: true,
  arrows: true,
  pauseOnHover: true,
  autoplay: false,
  onChange: (oldIndex, newIndex) => {
    console.log(`slide transition from ${oldIndex} to ${newIndex}`);
  }
}

const Slideshow = () => {
    return (
      <div className="slide-container">
        <Slide {...properties}>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
              <p className="imgSize">
              </p>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
              <p className="imgSize">
              </p>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
              <p className="imgSize">
              </p>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[3]})`}}>
              <p className="imgSize">
              </p>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[4]})`}}>
              <p className="imgSize">
              </p>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[5]})`}}>
              <p className="imgSize">
              </p>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[6]})`}}>
              <p className="imgSize">
              </p>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[7]})`}}>
              <p className="imgSize">
              </p>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[8]})`}}>
              <p className="imgSize">
              </p>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[9]})`}}>
              <p className="imgSize">
              </p>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[10]})`}}>
              <p className="imgSize">
              </p>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[11]})`}}>
              <p className="imgSize">
              </p>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[12]})`}}>
              <p className="imgSize">
              </p>
            </div>
          </div>
        </Slide>
      </div>
    )
}

const PokemonOwner = () => {
  return(
    <form onSubmit={this.handleSubmit}>
      <label>
        Pokemon Id :
        <input type="text" value={this.state.value} onChange={this.handleChange} />
      </label>
      <input type="submit" value="Envoyer" />
    </form>
  )
}


export default ({ drizzle, drizzleState }) => {
  // destructure drizzle and drizzleState from props
  return (
    <div className="App">
      <div className="section">
        <h2>Active Account</h2>
        <AccountData drizzle={drizzle} drizzleState={drizzleState} accountIndex={1} units="ether" precision={3} />
      </div>
      <div>
        <Slideshow/>
      </div>
      <p>
        <b>Create Pokemon</b>
      </p>

      <ContractForm drizzle={drizzle} contract="Pokedex" method="createPokemon" sendArgs={{ gas: 4000000 }} />

      <p>
        Number of <b>Pokemons</b>:&nbsp;
        <ContractData drizzle={drizzle} drizzleState={drizzleState} contract="Pokedex" method="getPokemonCount" />
      </p>

      <p>
        Catch a <b>Pokemonunuru</b>:&nbsp;
      </p>
      <ContractForm drizzle={drizzle} contract="Pokedex" method="catchPokemon" sendArgs={{ gas: 4000000 }} />

      <PokemonOwnerFields/>
      <p>
        Owner of <b>Pokemons</b>:&nbsp;
      </p>

  <ContractForm drizzle={drizzle} contract="Pokedex" method="pokemonOwned" sendArgs={{ id: this.state.id }} />
    </div>
  );
};
