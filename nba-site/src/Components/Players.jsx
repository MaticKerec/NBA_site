import axios from 'axios';
import { useEffect, useState } from 'react';

const Players = () => {
    const [players, setPlayers] = useState([]);

    useEffect(() => {
        const apiKey = '82227a16f9c248bb97f4c2001ea735e1';

        const fetchData = async () => {
            try {
                const response = await axios.get('https://api.sportsdata.io/v3/nba/scores/json/Players', {
                    headers: {
                        'Ocp-Apim-Subscription-Key': apiKey,
                    },
                });

                setPlayers(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <h1>Players</h1>
            <ul>
                {players.map((player) => (
                    <li key={player.PlayerID}>{player.FirstName} {player.FirstName}</li>
                ))}
            </ul>
        </div>
    );
};

export default Players;
