import React from 'react';
import Boat from './Boat';
import Sea from './Sea';
import RaceMapPic from '../resource/map1.png';
import ControllerPic from '../resource/controller.png';
import './GameBoard.css';

class GameBoard extends React.Component {
    render() {
        return(
            <div>
                <Boat></Boat>
                <Sea></Sea>
                <RaceMap></RaceMap>
                <Controller></Controller>
            </div>
        )
    }
}

const RaceMap = () => {
    return <img src={RaceMapPic}></img>
}

const Controller = () => {
    return <img id="controller" src={ControllerPic}></img>
}

export default GameBoard;