import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

interface AppProps {
    name: string,
    type_: string[],
    moves_: string[],
    sprite: string,
    height: number,
    weight: number
}

export const ArtView = ({
    name,
    type_,
    moves_,
    sprite, //the image url
    height,
    weight
}: AppProps) => {
    return (
        <div style={{ display: 'flex',   justifyContent: 'center', alignItems: 'center', height: '75vh', backgroundColor: 'lightblue', flexDirection: 'column', padding: '20px'}}>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    style={{ padding: '5px' }}
                    component="img"
                    height="175px"
                    image={sprite} 
                    alt={name}
                />
                <CardContent >
                    <Typography gutterBottom variant="h5" component="div">
                        {name}
                    </Typography>
                    <Typography variant="h5" color="text.secondary">
                        Type:{type_.join(', ')}
                    </Typography>
                    <Typography variant="h5" color="text.secondary">
                        Moves: {moves_.join(', ')}
                    </Typography>
                    <Typography variant="h5" color="text.secondary">
                        Height: {height}
                    </Typography>
                    <Typography variant="h5" color="text.secondary">
                        Weight: {weight}
                    </Typography>
                </CardContent>
            </Card>
            <div>
               <h3>This Is Written By: Natanil Gebru </h3> 
            </div>
        </div>
    )
}


// // let have it display the images wee need the type 
// ////////////////////////////////
// // we need to display the image... 

// interface AppProps{
//     name: string,
//     type_: string,
//     moves_: string[],
//     sprite: string,   //img
//     height: number,
//     weight: number   
// }
// export const ArtView = ({
//     name, 
//     type_, 
//     moves_, 
//     sprite, 
//     height, 
//     weight


// }: AppProps) => {

//     return (
//         <div>
//             {/* <img src={sprite} alt={name} height={height * 2} width={weight * 2} /> */}
//             {/* <img src={sprite} alt={name} height={height * 2} width={weight * 2} /> */}
//             <img src={sprite} alt={name} style={{ maxWidth: '100%', height: 'auto' }} />

//             <br />
//             <br />
//             <h1>{name}</h1>
//             <h2>{type_}</h2>
//             <h3>{moves_.join(', ')}</h3>
//             <h3>{moves_.map(move => <div key={move}>{move}</div>)}</h3>
//             <h3>{moves_}</h3>
//             <br/>
//             <h4>Height: {height}</h4>
//             <h5>Weight: {weight} </h5>
            

//         </div>

//     )

//  }
