// 3rd parties
import { FC } from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { Box, Container } from "@mui/material";

export interface SearchPageProps { setSearch: (value: string) => void };

export const Search: FC<SearchPageProps> = ({ setSearch }) => (
  <Container sx={{display: "flex", mt: 5, justifyContent:"center" }}>
    <Box sx={{ width: "90%" }}>
      <Paper sx={{  display: 'flex', alignItems: 'center', width: "100%"}}>
        <InputBase
          placeholder="Search for movies"
          onChange={(event) => setSearch(event.target.value)}
          sx={{ ml: 1, flex: 1 }}
        />

        <IconButton sx={{ p: '10px' }} aria-label="search">
          <SearchIcon/>
        </IconButton>
      </Paper>
    </Box>
  </Container>
)
