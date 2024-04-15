import { useState, useEffect } from 'react';
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import axios from 'axios';
import { ArtView } from './View';

// Define interface for the API response
interface PokemonApiResponse {
    name: string;
    types: { 
        type: { 
            slot: number, 
            name: string 
        } }[];
    moves: { 
        move: { 
                name: string } 
            }[];
    sprites: { front_default: string };
    height: number;
    weight: number;
}

// Define interface for the converted Pokemon data
interface PokemonForm {
    name: string;
    type_: string[];
    moves_: string[];
    sprite: string;
    height: number;
    weight: number;
}

export const PokemonController = () => {

    // create state to store pokemon data
    const [pokemons, setPokemons] = useState<PokemonForm[]>([]);

    // the usesstate for the pokemanid we are adding 
    const [pokemonid, setPokemonId] = useState<number>(0);  // we are going to intialize it to 1 so when the page loads we have a pokemon displayng 

    // we need a hook for the fetching witht he new value also 
    const [fetchingid, setFetchingid] = useState<boolean>(false); //needs to be bool unlike the class lectures 

    //this is for writing error message for network handling errors
    const [offlineMessage, setOfflineMessage] = useState<boolean>(false)


    //event handler for the button click and the value changed 
    // const handlevaluechange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     const value = e.target.value.trim();
    //     setPokemonId(value === '' ? 0 : parseInt(value)); //assing default value 0 if ''
    //     // setPokemonId(parseInt(e.target.value)); // Parse the input to an integer
    // }

    const handlevaluechange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value

        const parsedValue = parseInt(value)

        if (parsedValue >= 0) {
            setPokemonId(parsedValue);
        } else {
            // Set fetchingid to true to indicate invalid input
            setFetchingid(true);
        }
    }

    // event handler for the button click 
    const handleButtonClick = () => {
        if (pokemonid <= 0) {
            setFetchingid(true); // Set fetchingid to true when input is invalid
            return;
        }
        fetchPokemon();
    };


    // Fetch Pokemon data from the API
    const fetchPokemon = async () => {
        setFetchingid(true);
        setOfflineMessage(false); // Reset offline message when attempting to fetch
        try {
            const result = await axios.get<PokemonApiResponse>(`https://pokeapi.co/api/v2/pokemon/${pokemonid}`);
            const pokemonData: PokemonApiResponse = result.data;
            const pokemon: PokemonForm = {
                name: pokemonData.name,
                type_: pokemonData.types.map(type => type.type.name),
                moves_: pokemonData.moves.map(move => move.move.name).slice(0, 4),
                sprite: pokemonData.sprites.front_default,
                height: pokemonData.height,
                weight: pokemonData.weight
            };
            setPokemons([pokemon]);
        } catch (error) {
            setOfflineMessage(true); // Set offline message when fetch fails
            console.log('Error fetching data', error);
        } finally {
            setFetchingid(false);
        }
    };

    useEffect(() => {
        fetchPokemon();
    }, []);

    return (
        <div>
            <h1>Select A Pokemon</h1>
            <div> 
                <Box
                    component="form"
                    sx={{
                        "& > :not(style)": { m: 1, width: "25ch", height: "7ch" },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <TextField id="outlined-basic" value={pokemonid} onChange={handlevaluechange} variant="outlined" placeholder="Enter Pokemon id"/>
                    <Button variant="contained" onClick={handleButtonClick}>Fetch</Button>
                </Box>
            </div>

            <div>
                {offlineMessage ? <div><h4>You are offline now</h4></div>: null}
                {fetchingid ? <div><h4>Fetching Pokémon... unfortunatelly not able to get the passed pokemonid that is below zero</h4></div>: null}
                {pokemons.map(pokemon => (
                    <ArtView 
                        key={pokemon.name} 
                        {...pokemon} 
                    />
                ))}
            </div>
        </div>
    );
};

