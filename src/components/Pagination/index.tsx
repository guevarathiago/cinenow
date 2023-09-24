import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import styles from './Pagination.module.scss'

export default function USePagination() {
  const [page, setPage] = React.useState(1);
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  return (
    <Stack sx={{mt:4, mb:2}} spacing={2}>
      <Pagination
        className={styles.pagination}
        variant="outlined"
        color="standard"
        size="large"
        sx={{
          button: { color: "white", borderColor:"white" },
          justifyContent:"center", display:'flex', background:"transparent"}} count={10} page={page} onChange={handleChange} />
    </Stack>
  );
}
