import React from 'react';
import Button from '@material-ui/core/Button';
import './GameMode.css';


class GameMode extends React.Component {
    render() {
        return(
            <div id="game_mode">
                <h1 id="title">Boating and Booming</h1>
                <div id="modes">
                    <Mode class="white" name='单人模式' board='#/gameboard'/>
                    <Mode class="blue" name='双人模式' board='#/gameboard'/>
                    <Mode class="white" name='四人模式' board='#/gameboard'/>
                    <Mode class="blue" name='多人模式' board='#/gameboard'/>
                </div>
            </div>
        )
    }
}

const Mode = (props) => {
    return (
        <div>
            <button className={props.class} onClick = {() => {window.location.href = props.board}}>{props.name}</button>
        </div>
    )
}

export default GameMode;