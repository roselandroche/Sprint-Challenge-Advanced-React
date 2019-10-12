import React from 'react';
import axios from 'axios';

class WorldCupInfo extends React.Component {
    constructor() {
        super();
        this.state={
            players: []
        }
    }
    componentDidMount() {
        axios
            .get('http://localhost:5000/api/players')
            .then(res => {
                this.setState({players: res.data})
            })
            .catch(err => {
                console.log(`Error: ${err}`)
            })
    }
    
    render() {
        return (
            <div>
                {this.state.players.map((player) => (
                    <>
                        <h2>{player.name}</h2>
                        <h3>{player.country}</h3>
                        <h3>{`Searches: ${player.searches}`}</h3>
                    </>
                ))}
            </div>
            
        )
    }
}

export default WorldCupInfo;