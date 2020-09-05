import React from 'react';
import Boat from './Boat';
import Sea from './Sea';
class GameBoard extends React.Component {
    render() {
        return(
            <div>
                <Boat></Boat>
                <Sea></Sea>
            </div>
        )
    }
}

export default GameBoard;