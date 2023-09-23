import { Box } from '@mui/material';
import Cards from 'components/Cards';
import Search from 'components/search';
import React, { useEffect, useState } from 'react';
import axios from 'axios'
import UsePagination from 'components/Pagination';

export interface HomePageProps {

}
interface iSearch {
  search?: any | null
}


const Home: React.FunctionComponent<HomePageProps> = props => {
  const API_URL = "https://api.themoviedb.org/3"
  const [movies, setMovies] = useState([])
  const [search, setSearch ] = useState("")
  
  let type = search.length === 0  ? "discover/movie" : `search/movie?query=${search}`
  console.log(type)
  
  const fetchMovies = async ({search}:iSearch) => {
    
    
    const {data: {results}} = await axios.get(`${API_URL}/${type}`, {
      params: {
      api_key: "b8ce1f853c4e9d174dc603ee044fa938"
        }
    })
    console.log(results)
    setMovies(results)
  } 

  useEffect(()=> {
    
    fetchMovies(search)
  },[search])
  
  const searchMovies = () => {
    type = `search/movie?query=${search} `
    fetchMovies(search)
    console.log(type)
    

  }
  
  return (
        <>
            <Search setSearch={setSearch} />
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
      <UsePagination />
        </>
    )
}

export default Home