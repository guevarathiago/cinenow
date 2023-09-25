import { Box, Chip, Container, Typography} from '@mui/material';
import { FC, useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import style from './InfoPage.module.scss'
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import { Link } from 'react-router-dom';
import StarIcon from '@mui/icons-material/Star';
import { getMovieDetail } from 'services/api';

export interface Movie {
  title: string,
  backdrop_path: string,
  overview: string,
  genres: Genres[],
  release_date: string,
  vote_average: number
}

export interface Genres {
  id: number,
  name: string
}

export const InfoPage: FC = () => {
  const parameters = useParams()
  const [movie, setMovie] = useState<Movie>()

  const fetchMovies = useCallback(async () => {
    const request = await getMovieDetail(parameters.id as string)

    setMovie(request.data)
  }, [parameters.id])

  useEffect(()=> {
    fetchMovies()
  },[fetchMovies])

  return (
    <>
      <Link to="/">
        <ArrowCircleLeftIcon
          fontSize='large'
          sx={{ mt:3, ml:3 }}
          className={style.back}
        />
      </Link>

      <Container
        className={style.container}
        sx={{
          backgroundColor: "#333333",
          mt: -5.1,
          height: "113vh"
        }}
      >
        <img
          className={style.img}
          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          alt='poster'
        />

        <Typography sx={{ml:2, color:"white"}}>
          Release Date: {movie?.release_date}
        </Typography>

        <Typography variant='h2' sx={{color:"white", mt:2, ml:3}}>
          {movie?.title}
        </Typography>

        {movie?.genres.map((gen) => (
          <Box sx={{ml:1, display:"inline-flex"}}>
            <Chip
              sx={{
                mr:1,
                ml:2,
                mb:3,
                mt:2,
                background: "#99ff99",
                fontSize:"13px"
              }}
              label={gen.name}
              variant="outlined"
            />
          </Box>
        ))}

        <Container maxWidth="lg">
          <Typography variant="body1" sx={{ color:"white" }}>
            {movie?.overview}
          </Typography>

          <Box sx={{display:"flex", justifyContent:"center"}}>
            <Chip
              sx={{ml:-3, mt:10, mb:3, background: "#ccc", width:'10%'}}
              icon={<StarIcon />}
              label={movie?.vote_average}
              variant="outlined"
            />
          </Box>
        </Container>
      </Container>
    </>
  )
}
