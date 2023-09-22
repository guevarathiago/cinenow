import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { Box, Container } from "@mui/material";

export interface SearchPageProps { };

const Search: React.FunctionComponent<SearchPageProps> = props => {
    return (
        <Container sx={{display: "flex", mt: 5, justifyContent:"center" }}>
            <Box sx={{ width: "90%" }}>
                <Paper
                component="form"
                sx={{  display: 'flex', alignItems: 'center', width: "100%"}}>
                    <InputBase
                        sx={{ ml: 1, flex: 1 }}

                    />
                    <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                        <SearchIcon />
                    </IconButton>
                </Paper>
            </Box>
        </Container>
    )
}

export default Search