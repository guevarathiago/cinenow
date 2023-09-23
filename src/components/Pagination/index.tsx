import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function USePagination() {
  const [page, setPage] = React.useState(1);
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  return (
    <Stack sx={{mt:2, mb:2}} spacing={2}>
      <Pagination variant="outlined" color="standard" size="large" sx={{justifyContent:"center", display:'flex', background:"white"}} count={10} page={page} onChange={handleChange} />
    </Stack>
  );
}
