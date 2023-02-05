import React from 'react';
import { useState } from "react";
import { Backdrop, Box, Button, CircularProgress, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import axios from "axios";

function SearchBar({ tweets, setTweets }) {
    
    const [search, setSearch] = useState();
    const [open, setOpen] = useState(false);

    const findTweets = () => {
        setOpen(true);
        axios.get('/search?q=' + search).then((res) => {
            setTweets([...tweets, res.data]);
            console.log(res.data);
            setSearch("");
            setOpen(false);
        }).catch((err) => {
            console.log(err);
            setOpen(false);
        })
    };

    return (
        <Box sx={{ margin: "20px" }}>
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={open}
            >
                <CircularProgress color="inherit" />
            </Backdrop>
            <FormControl sx={{ m: 1, width: '50ch' }} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">Recherche</InputLabel>
                <OutlinedInput
                    id="outlined-adornment-password"
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                        aria-label="toggle password visibility"
                        onClick={findTweets}
                        edge="end"
                        >
                            <SearchIcon style={{ fill: "blue" }} />
                        </IconButton>
                    </InputAdornment>
                    }
                    label="Recherche"
                />
            </FormControl>
        </Box>
    )
}

export default SearchBar
