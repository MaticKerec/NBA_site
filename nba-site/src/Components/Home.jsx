import React, {useState, useEffect} from "react";
import "../Styles/styles.css"
import {Box, Button, Grid, Typography} from '@mui/material';
import { Table, TableHead, TableRow, TableCell, TableBody } from "@mui/material";
import videoBg from '../assets/Video/intro_second_Trim.mp4'
import styles from '../JS/styles.js'

export default function Home() {
    return (
        <Box>
            <Grid container spacing={2} justifyContent="center" alignItems="center">
                <Grid item xs={12}>
                    <div style={{position: 'relative'}}>
                        <video src={videoBg} autoPlay loop muted />
                        <Typography variant="h1" sx={{...styles.h1, backgroundColor: 'transparent'}}>HOME</Typography>
                        <Typography variant="h3" sx={{...styles.h3,  backgroundColor: 'transparent'}}>Welcome to NBA DATABASE</Typography>
                    </div>
                </Grid>
            </Grid>
        </Box>
    )
}