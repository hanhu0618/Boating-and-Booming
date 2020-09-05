import React from 'react';

class GameMode extends React.Component {
    render() {
        return(
            <div>
                <Mode name='单人模式' board='#/gamemode'/>
                <Mode name='双人模式' board='#/gameboard'/>
                <Mode name='四人模式' board='#/gamemode'/>
                <Mode name='多人模式' board='#/gamemode'/>
            </div>
        )
    }
}

const Mode = (props) => {
    return (
        <div>
            <button onClick = {() => {window.location.href = props.board}}>{props.name}</button>
        </div>
    )
}

export default GameMode;