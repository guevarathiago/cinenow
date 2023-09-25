// 3rd parties
import axios from 'axios'

// Default config
axios.defaults.headers.common['Authorization'] = `Bearer ${process.env.REACT_APP_API_TOKEN}`;

const BASE_URL = process.env.REACT_APP_BASE_URL

export const getMoviesCategory = (category: string) => (
  axios.get(`${BASE_URL}/${category}`)
)

export const getMovieDetail = (id: string) => (
  axios.get(`${BASE_URL}/movie/${id}`)
)
