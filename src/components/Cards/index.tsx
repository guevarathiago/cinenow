import { Avatar, Card, CardActions, CardContent, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';


export interface CardsProps { key: number; movie:{
  title: string,
  poster_path: string
}} ;

const Cards: React.FunctionComponent<CardsProps> = ({movie}) => {
  const sxStyle = {
    margin: 3, minWidth: 370, minHeight: 280, display: "flex", flexDirection: "column", alignItems: "center",
    justifyContent: "center",background:"#333333", '&:hover': { transform: "scale(1.01)" }, transition: "transform 0.5s ease"
  }
  return (
    <Card variant="elevation" sx={sxStyle}>
      <CardContent sx={{ mt: -4 }}>
        <Typography sx={{Width:"100%", mb:3, color:"white"}}>
          {movie.title}
        </Typography>

        <Link to={`/`}>
          <Avatar variant='rounded' sx={{
            minWidth: 370, minHeight: 200, mt: -2, mb: -3, mr:-6, ml:-6 }} alt="img" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}/>
        </Link>
      </CardContent>
      <CardActions>

      </CardActions>
    </Card>
  )
}

export default Cards