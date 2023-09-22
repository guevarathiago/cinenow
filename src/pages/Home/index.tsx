import { Box } from '@mui/material';
import Cards from 'components/Cards';
import Search from 'components/search';
import React, { useEffect, useState } from 'react';
import axios from 'axios'

export interface HomePageProps { };

const Home: React.FunctionComponent<HomePageProps> = props => {
  const API_URL = "https://api.themoviedb.org/3"
  const [movies, setMovies] = useState([])

  const fetchMovies = async () => {
    const {data: {results}} = await axios.get(`${API_URL}/discover/movie`, {
      params: {
        api_key: "b8ce1f853c4e9d174dc603ee044fa938"

      }
    })
    console.log(results)
    setMovies(results)
  } 

  useEffect(()=> {
    fetchMovies()
  },[])
  
  return (
        <>
            <Search />
            <Box
        sx={{
          justifyContent: "center",
          display: "flex",
          flexWrap: "wrap",
          mt: 5,
        }}>
      {movies.map((movie, key) => (
        <Cards key={key} movie={movie} />
      ))}

      </Box>
        </>
    )
}

export default Home