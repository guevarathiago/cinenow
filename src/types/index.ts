
  export interface IMovies {
    page: number,
    results: [IMovie],
    total_pages: number,
    total_results: number
    } 
    
    export interface IMovie { 
        title: string,
        poster_path: string,
        id: number,
        vote_average: number,
        release_date: string,
    } 
    