// 3rd parties
import { Box, Typography } from '@mui/material';
import { FC } from 'react';

// App
import { MoviesPaginated } from 'components/MoviesPaginated';
import { Search } from 'components/search';
import { Cards } from 'components/Cards';
import { Highlights } from 'components/Highlights';
import { Movie } from 'types';

// Local
import { useHome } from './useHome';

export const Home: FC = () => {
  const {
    setSearch,
    showHide,
    popular,
    topRated,
    movies,
    setPage,
    page
  } = useHome()

  return (
    <Box>
      <Search setSearch={setSearch} />

      <Box style={showHide}>
        {popular && <Highlights categoryTitle='Popular' values={popular} />}

        {topRated && <Highlights categoryTitle='Top Rated' values={topRated} />}
      </Box>

      <Typography variant='h3' sx={{ color:"white", mt:5, ml:3, mb:4 }}>
        Movies
      </Typography>

      <Box
        sx={{
          justifyContent: "space-between",
          display: "flex",
          flexWrap: "wrap",
          mt: 5,
          width:'100%',
          padding: 0
        }}
      >
        {movies?.results.map((movie: Movie, key: number) => (
          <Cards minWidthCustom="360px" key={key} movie={movie} />
        ))}
      </Box>

      <Box>
        {movies && (
          <MoviesPaginated info={movies} page={page} setPage={setPage} />
        )}
      </Box>
    </Box>
  )
}
