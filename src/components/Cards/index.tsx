import { Avatar, Card, CardActions, CardContent, Chip, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import StarIcon from '@mui/icons-material/Star';;


export interface CardsProps { key: number; movie:{
  title: string,
  poster_path: string,
  id: number,
  vote_average: number,
  release_date: string
}} ;

const Cards: React.FunctionComponent<CardsProps> = ({movie}) => {
  const sxStyle = {
    margin: 2, minWidth: 380, minHeight: 280, display: "flex", flexDirection: "column", alignItems: "center",
    justifyContent: "center",background:"#333333", '&:hover': { transform: "scale(1.05)" }, transition: "transform 0.2s ease"
  }
  return (
    <Card variant="elevation" sx={sxStyle}>
      <CardContent sx={{ mt: 0 }}>
        <Typography sx={{fontSize:"14px", mb:3, color:"white"}}>
          {movie.title}
        </Typography>
        <Link to={`/${movie.id}`}>
          <Avatar variant='rounded' sx={{
            minWidth: 370, minHeight: 200, mt: -2, mb: -3, mr:-6, ml:-6 }} alt="img" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}/>
        </Link>
      </CardContent>
      <CardActions>
      <Chip sx={{ml:-3, mt:1, background: "#cccccc"}} icon={<StarIcon />} label={movie.vote_average} variant="outlined" />
      <Typography sx={{fontSize:"11px", color:"#cccccc", mt:1, ml:25}}>{`id  #${movie.id}`}</Typography>
      </CardActions>
      
    </Card>
  )
}

export default Cards