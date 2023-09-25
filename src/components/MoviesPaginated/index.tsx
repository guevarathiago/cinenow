import { FC } from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import styles from './Pagination.module.scss'
import { Movies } from 'types';

export interface MoviesPaginatedProps {
  page: number
  setPage: (value: number) => void
  info: Movies
}

export const MoviesPaginated: FC<MoviesPaginatedProps> = ({
  page,
  setPage,
  info
}) => (
  <Stack sx={{ mt:4, mb:2 }} spacing={2}>
    <Pagination
      className={styles.pagination}
      variant="outlined"
      color="standard"
      size="large"
      sx={{
        button: { color: "white", borderColor:"white" },
        justifyContent:"center", display:'flex', background:"transparent"
      }}
      count={info?.total_pages}
      page={page}
      onChange={(_, page) => {
        setPage(page);
      }}
    />
  </Stack>
);
