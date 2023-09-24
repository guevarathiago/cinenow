import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import styles from './Pagination.module.scss'

type MoviesPaginated = any


export default function MoviesPaginated({page,  setPage,  info,}: any) {
  

  return (
    
    <Stack sx={{mt:4, mb:2}} spacing={2}>
      <Pagination
        className={styles.pagination}
        variant="outlined"
        color="standard"
        size="large"
        sx={{
          button: { color: "white", borderColor:"white" },
          justifyContent:"center", display:'flex', background:"transparent"}} 
          count={info?.total_pages} page={page} 
          onChange={(event, page) => {
            setPage(page);
          }} />
    </Stack>
  );
}
