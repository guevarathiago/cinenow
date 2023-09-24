import { Box, Typography } from '@mui/material';
import Cards from 'components/Cards';
import Search from 'components/search';
import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import MoviesPaginated from 'components/MoviesPaginated';
import { IMovie, IMovies } from 'types';


axios.defaults.headers.common['Authorization'] = `Bearer ${process.env.REACT_APP_API_TOKEN}`;


export interface HomePageProps {

}
interface iSearch {
  search?: any | null,
}


const Home: React.FunctionComponent<HomePageProps> = props => {
  const API_URL = "https://api.themoviedb.org/3"
  const [movies, setMovies] = useState<IMovies>();
  const [search, setSearch] = useState("");
  const [popular, setPopular] = useState<[IMovie]>();
  const [topRated, setTopRated] = useState<any>([]);
  const [page, setPage] = React.useState(1)
  const showHide = search ? {display: "none"}  : {display: "block"} 
  
  
  let type = search.length === 0 ? `discover/movie?page=${page}` : `search/movie?query=${search}`
  

  const fetchMovies = async ({ search }: iSearch) => {


    const { data: results } = await axios.get(`${API_URL}/${type}`)
    setMovies(results )
    
    console.log(results, "movies")
  }

  const fetchPopular = async (path:string) => {


    const { data: { results } } = await axios.get(`${API_URL}/${path}`)
    setPopular(results)

  }

  const fetchTopRated = async (path:string) => {


    const { data: { results } } = await axios.get(`${API_URL}/${path}`)
    setTopRated(results)
    
  }

  useEffect(() => {
    fetchPopular("movie/popular")
    fetchTopRated("movie/top_rated")
  }, [search])

  useEffect(() => {
    fetchMovies(search)
    }, [page, search])


  return (
    <Box>
      <Search  setSearch={setSearch} />
      <Box style={showHide}>
        <Typography  variant='h3' sx={{color:"white", mt:5, ml:3, mb:4}}>Popular</Typography>
        <Swiper
        spaceBetween={50}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper: any) => console.log(swiper)}
        pagination={{
          type: 'progressbar',
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        breakpoints={{
          375: { slidesPerView: 1},
          768: {slidesPerView: 2},
          1200: {slidesPerView: 3},
          1366: {slidesPerView: 4},
          1600: {slidesPerView: 5}
        }}
      
      >
          {popular?.map((movie:any, key:number) => (
            
            <SwiperSlide><Cards minWidthCustom={"380px"} key={key} movie={movie} /></SwiperSlide>
            
                ))}
          </Swiper>
          <Typography  variant='h3' sx={{color:"white", mt:5, ml:3, mb:4}}>Top Rated</Typography>
          <Swiper
        spaceBetween={50}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper: any) => console.log(swiper)}
        pagination={{
          type: 'progressbar',
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        breakpoints={{
          375: { slidesPerView: 1},
          768: {slidesPerView: 2},
          1200: {slidesPerView: 3},
          1366: {slidesPerView: 4},
          1600: {slidesPerView: 5}
        }}
      >
          {topRated.map((movie:any, key:number) => (
            
            <SwiperSlide><Cards minWidthCustom={"380px"} key={key} movie={movie} /></SwiperSlide>
            
                ))}
          </Swiper>
        </Box>

        <Typography  variant='h3' sx={{color:"white", mt:5, ml:3, mb:4}}>Movies</Typography>
        <Box
        sx={{
          justifyContent: "space-between",
          display: "flex",
          flexWrap: "wrap",
          mt: 5,
          width:'100%',
          padding: 0
        }}>
      {movies?.results.map((movie, key) => (
        <Cards minWidthCustom={"360px"} key={key} movie={movie} />
      ))}

      </Box>
       <Box style={showHide}>

       <MoviesPaginated  info={movies} page={page} setPage={setPage}/>
       </Box>
    </Box>
  )
}

export default Home