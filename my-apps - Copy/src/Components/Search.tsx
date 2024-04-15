import React, { useState } from 'react';
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export default function Counter() {
    
    // state of the text feild using useState and setting the type as number 
    const [InputNumber, setInputNumber] = useState<number>(0);


    // input value change 
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputNumber(Number(event.target.value));
        console.log(event.target.value);
    };




    //handle the button click (i was able to get the value from the text feild set it)
    const handleButtonClick = () => {

        console.log(InputNumber);

        setInputNumber((oldevalues) => {
            console.log(InputNumber);
            console.log('First call', oldevalues)
            return oldevalues;
        })

        setInputNumber((oldevalues) => {
            console.log('Second Call', oldevalues)
            return oldevalues
        })
        
    };


    // this is our text feild and button 
    return (
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "25ch", height: "7ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField id="outlined-basic" onChange={handleInputChange} variant="outlined" />
          <Button variant="contained" onClick={handleButtonClick}>Submit</Button>
        </Box>
      );

}



    
    



// import React, { useState, useEffect } from 'react';
// import Box from "@mui/material/Box";
// import TextField from "@mui/material/TextField";
// import Button from "@mui/material/Button";

// export default function Counter() {
 
//   const handleButtonClick = () => {
//     console.log('Button clicked!');

//   }
//   return (
//     <Box
//       component="form"
//       sx={{
//         "& > :not(style)": { m: 1, width: "25ch", height: "7ch" },
//       }}
//       // noValidate
//       // autoComplete="off"
//     >
//       <TextField id="outlined-basic" variant="outlined" />
//       <Button variant="contained" onClick={handleButtonClick}>Submit</Button>
//     </Box>
//   );
// }


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// import { useState, useEffect } from 'react';
// import Box from "@mui/material/Box";
// import TextField from "@mui/material/TextField";
// import Button from "@mui/material/Button";
// import axios from 'axios';
// import { ArtView } from './View';

// // Define interface for the API response
// interface PokemonApiResponse {
//     name: string;
//     types: { 
//         type: { 
//             slot: number, 
//             name: string 
//         } }[];
//     moves: { move: { name: string } }[];
//     sprites: { front_default: string };
//     height: number;
//     weight: number;
// }

// // Define interface for the converted Pokemon data
// interface PokemonForm {
//     name: string;
//     type_: string[];
//     moves_: string[];
//     sprite: string;
//     height: number;
//     weight: number;
// }

// export const PokemonController = () => {
//     // Create state to store Pokemon data
//     const [pokemons, setPokemons] = useState<PokemonForm[]>([]);

//     // uses state for the pokemanid we are adding 
//     const [pokemonid, setPokemonId] = useState<number>(1);

//     // we need a hook for the fetching witht he new value also 
//     const [fetchingid, setFetchingid] = useState<boolean>(false); //needs to be bool unlike the class lectures 


//      //this is for writing error message for network handling errors
//      const [offlineMessage, setOfflineMessage] = useState<boolean>(false)


//     //event handler for the button click and the value changed 
//     const handlevaluechange = (e: any) => {
       
//             setPokemonId(e.target.value)
        
//     }
//     // event handler for the button click 
//     const handleButtonClick = () => {
//         fetchPokemon();
//     };


//     // Fetch Pokemon data from the API
//     const fetchPokemon = async () => {

//         setFetchingid (true)
        
//         setOfflineMessage (false)   //still assuming we are online 

//         try { //try to fetch the API 
//             const result = await axios.get<PokemonApiResponse>(`https://pokeapi.co/api/v2/pokemon/${pokemonid}`);

//             //debugging to see if we are actually getting results back 
//             console.log('API Response:', result.data);

//             // Extract data from API response, It is an obj not an array 
//             const pokemonData: PokemonApiResponse = result.data;

//             // Convert API response to PokemonForm
//             const pokemon: PokemonForm = {
//                 name: pokemonData.name,
//                 type_: pokemonData.types.map(type => type.type.name), // Mapping type names directly here
//                 moves_: pokemonData.moves.map(move => move.move.name).slice(0, 4), //these two are the same as the artlist.map function
//                 sprite: pokemonData.sprites.front_default,
//                 height: pokemonData.height,
//                 weight: pokemonData.weight
            
//             };
            

//             // Update state with the converted Pokemon data
//             setPokemons([pokemon]);

        
//         } catch (error) {
//             setOfflineMessage(true)
//             console.log('Error fetching data', error);
       
//         }finally{
       
//             setFetchingid (false)
       
//         }
//     };

//     // Fetch Pokemon data on component mount
//     useEffect(() => {
//         fetchPokemon();
//     }, []);

//     // Render Pokemon data
//     return (
//         <div>
//             <h1>Select A Pokemon</h1>
//         <div> 
//             <Box
//                 component="form"
//                 sx={{
//                     "& > :not(style)": { m: 1, width: "25ch", height: "7ch" },
//                 }}
//                 noValidate
//                 autoComplete="off"
//             >
//                 <TextField id="outlined-basic" value={pokemonid} onChange={handlevaluechange} variant="outlined" placeholder = "Enter Pokemon id"/>
//                 <Button variant="contained" onClick={handleButtonClick}>Fetch</Button>
               
//             </Box>
//         </div>

//         <div>
//             {
//                 offlineMessage && (<div><h4>you are offline now</h4>  </div>) 
//             }
//             {
//             pokemons.map(pokemon => (
//                 <ArtView 
//                 key={pokemon.name} 
//                 {...pokemon} 
//                 />
//             ))}
//         </div>
//         </div>
//     );
//};