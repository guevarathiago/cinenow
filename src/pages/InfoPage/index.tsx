import { Box, Typography} from '@mui/material';
import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { useParams } from 'react-router-dom';



export interface InfoPageProps { }

interface Imovie {
   movie: any,
   title:any
}


const InfoPage: React.FunctionComponent<InfoPageProps> = props => {
 
  const [movie, setMovie] = useState<Imovie> ([])
  const parameters = useParams()
  const API_URL = `https://api.themoviedb.org/3/movie/${parameters.id}`
  
  
  const fetchMovies = async () => {
    
    
    const {data: {results}} = await axios.get(API_URL, {
      params: {
      api_key: "b8ce1f853c4e9d174dc603ee044fa938"
        }
    })
    console.log(results)
    setMovie(results)
  } 

  useEffect(()=> {
    
    fetchMovies()
  },[])
  
  
  
  
  return (
        <>
            
        <Box
        sx={{
          
          mt: 5,
        }}>
       <Typography> {movie.title}</Typography>
        </Box>
      
        </>
    )
}
export default InfoPage