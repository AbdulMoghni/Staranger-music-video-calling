import { AppBar, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import GroupIcon from '@mui/icons-material/Group';
import { useNavigate } from 'react-router-dom';


export const NavBar = () => {
    let navigate = useNavigate();

    return ( <
        >
        <
        AppBar position = 'static' >
        <
        Toolbar >
        <
        IconButton sx = {
            { mr: '1rem' } } >
        <
        LibraryMusicIcon / >
        <
        /IconButton> <
        Typography onClick = {
            () => { navigate('/') } }
        variant = 'h5'
        flexGrow = '1' >
        Stranger Music video calling <
        /Typography> <
        Typography variant = 'h7'
        sx = {
            { mr: '2rem' } } >
        2 <
        IconButton >
        <
        GroupIcon / >
        <
        /IconButton>
        Active User <
        /Typography> <
        /Toolbar> <
        /AppBar>

        <
        />
    )
}