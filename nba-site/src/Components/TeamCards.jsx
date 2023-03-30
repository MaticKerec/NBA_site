import React from "react";
import { Card, CardMedia, CardContent, Typography } from "@mui/material";
import styles from "../JS/styles";
import { TOR, MIL, BOS, MIA, PHI, IND, BKN, ORL, CHA, CHI, DET, WAS, CLE, NYK, ATL, DEN, MEM, SAC, PHX, LAC, GSW, DAL, MIN, OKC, UTA, LAL, NOP, POR, SAS, HOU } from 'react-nba-logos';

const allLogos = [TOR, MIL, BOS, MIA, PHI, IND, BKN, ORL, CHA, CHI, DET, WAS, CLE, NYK, ATL, DEN, MEM, SAC, PHX, LAC, GSW, DAL, MIN, OKC, UTA, LAL, NOP, POR, SAS, HOU];
export default function TeamCard() {
    return (
        allLogos.forEach((logo) => {
            <Card style={{...styles.root}}>
                {logo}
                <CardContent>
                    <Typography variant="h5" component="h2">
                        Team
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Toronto
                    </Typography>
                </CardContent>
            </Card>
        })
    );
}