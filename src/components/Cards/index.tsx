// 3rd parties
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  Chip,
  Typography
} from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import { FC } from 'react';
import { Link } from 'react-router-dom';

// App
import { Movie } from 'types';

// Local
import style from './Cards.module.scss';

export interface CardsProps {
  minWidthCustom: string;
  key: number;
  movie: Movie
};

export const Cards: FC<CardsProps> = ({ movie, minWidthCustom }) => (
  <Card
    variant="elevation"
    className={style.card}
    style={{ width: minWidthCustom }}
    sx={{background:"#333333", mt:2}}
  >
    <CardContent sx={{ mt: 0 }}>
      <Typography sx={{ fontSize: "14px", mb:3, color:"white", pl:4 }}>
        {movie.title}
      </Typography>

      <Link to={`/${movie.id}`}>
        <Avatar
          variant='rounded'
          sx={{ minWidth: 370, minHeight: 200 }}
          alt="img"
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        />
      </Link>
    </CardContent>

    <CardActions>
      <Chip
        sx={{ml:-3, mt:0, background: "#cccccc", mb:1}}
        icon={<StarIcon />}
        label={movie.vote_average}
        variant="outlined"
      />

      <Typography sx={{ fontSize:"11px", color:"#cccccc", mt:1, ml:20, mb:2 }}>
        {`id  #${movie.id}`}
      </Typography>
    </CardActions>
  </Card>
)
