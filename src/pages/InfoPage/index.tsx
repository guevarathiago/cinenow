import { Box, Chip, Container, Typography} from '@mui/material';
import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { useParams } from 'react-router-dom';
import style from './InfoPage.module.scss'
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import { Link } from 'react-router-dom';
import StarIcon from '@mui/icons-material/Star';



export interface InfoPageProps { }

interface IMovie {
  title: string,
  [key: string]: any,
  backdrop_path: string,
  overview: string,
  genres: [IGenres],
  release_date: string,
  vote_average: number
}

interface IGenres {
  id: number,
  name: string
  }

const InfoPage: React.FunctionComponent<InfoPageProps> = props => {
 
  const parameters = useParams()
  const api_key = "api_key=b8ce1f853c4e9d174dc603ee044fa938"
  const API_URL = `https://api.themoviedb.org/3/movie/${parameters.id}?${api_key}`
  const [movie, setMovie] = useState<IMovie>()


  
  const fetchMovies = async () => {
    const request = await axios.get(API_URL)
    setMovie(request.data)
  } 

  useEffect(()=> {
    fetchMovies()
  },[])
  

return (
        <>
            
        <div><Link to={"/"}><ArrowCircleLeftIcon fontSize='large' sx={{mt:3, ml:3}} className={style.back}/></Link></div>
        <Container 
          className={style.container}
          sx={{
            backgroundColor: "#333333",
            mt: -5.1,
            height: "113vh"
          }}
        >
       <img className={style.img} src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt='poster'/>
       <Typography sx={{ml:2, color:"white"}}>Release Date: {movie?.release_date}</Typography>
       <Typography  variant='h2' sx={{color:"white", mt:2, ml:3}}> {movie?.title}</Typography>
       {movie?.genres.map((gen) => (
         <Box sx={{ml:1, display:"inline-flex"}}>
          <Chip sx={{mr:1, ml:2, mb:3, mt:2, background: "#99ff99", fontSize:"13px"}} label={gen.name} variant="outlined" />
        </Box>
        ))}
        
       <Container maxWidth="lg">
       <Typography variant='body1' sx={{color:"white"}}>{movie?.overview}</Typography>
       <Box sx={{display:"flex", justifyContent:"center"}}> 
        <Chip sx={{ml:-3, mt:10, mb:3, background: "#cccccc", width:'10%'}} icon={<StarIcon />} label={movie?.vote_average} variant="outlined" />
      </Box>
       
       </Container>
      
       
        </Container>
      
        </>
    )
}
export default InfoPage