import React from 'react';
import Boat from './Boat';
import Sea from './Sea';
import RaceMapPic from '../resource/map1.png';
import ControllerPic from '../resource/controller.png';
import SmellyFishPic from '../resource/smelly_fish.png';
import AttackFishPic from '../resource/attack_fish.png';
import DefendFishPic from '../resource/defend_fish.png';
import BombPic from '../resource/bomb.png';
import './GameBoard.css';

class GameBoard extends React.Component {
    render() {
        return(
            <div>
                <Boat></Boat>
                <Sea></Sea>
                <RaceMap></RaceMap>
                <Controller></Controller>
                <Skill id="smelly_fish" name={SmellyFishPic}></Skill>
                <Skill id="attack_fish" name={AttackFishPic}></Skill>
                <Skill id="defend_fish" name={DefendFishPic}></Skill>
                <Skill id="bomb" name={BombPic}></Skill>
            </div>
        )
    }
}

const RaceMap = () => {
    return <img id="race_map" src={RaceMapPic}></img>
}

const Controller = () => {
    return <img id="controller" src={ControllerPic}></img>
}

const Skill = (props) => {
    return <img id={props.id} src={props.name}></img>;
}

export default GameBoard;