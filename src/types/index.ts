export interface Movies {
  page: number,
  results: [Movie],
  total_pages: number,
  total_results: number
}

export interface Movie {
  title: string,
  poster_path: string,
  id: number,
  vote_average: number,
  release_date: string,
}
