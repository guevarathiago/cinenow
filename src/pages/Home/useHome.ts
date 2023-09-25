import { useCallback, useEffect, useState } from 'react'

import { Movie, Movies } from 'types'

import { getMoviesCategory } from 'services/api'

export const useHome = () => {
  const [movies, setMovies] = useState<Movies>()
  const [search, setSearch] = useState<string>('')
  const [popular, setPopular] = useState<Movie[]>()
  const [topRated, setTopRated] = useState<Movie[]>()
  const [page, setPage] = useState<number>(1)
  const showHide = search ? { display: "none"}  : {display: "block" }

  const fetchMovies = useCallback(async () => {
    const type = search.length === 0
      ? `discover/movie?page=${page}`
      : `search/movie?query=${search}&page=${page}`

    const { data: results } = await getMoviesCategory(type)

    setMovies(results)
  }, [page, search])

  const fetchPopular = async (path: string) => {
    const { data: { results } } = await getMoviesCategory(path)

    setPopular(results)
  }

  const fetchTopRated = async (path: string) => {
    const { data: { results } } = await getMoviesCategory(path)

    setTopRated(results)
  }
  useEffect(() => {
    fetchPopular("movie/popular")

    fetchTopRated("movie/top_rated")
  }, [search])

  useEffect(() => {
    fetchMovies()
  }, [page, search, fetchMovies])

  return {
    setSearch,
    showHide,
    popular,
    topRated,
    movies,
    setPage,
    page
  }
}
