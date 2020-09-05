import React from 'react';
import Hero from '../resource/hero.png';
import RightPaddle from '../resource/right_paddle.png';
import LeftPaddle from '../resource/left_paddle.png';
import './Boat.css';

class Boat extends React.Component {
    state = { 
        boatDirection: 0,
        rightPaddleYDirection: 0,
        rightPaddleZDirection: 0,
        leftPaddleYDirection: 0,
        leftPaddleZDirection: 0,
     }

    componentDidMount(){
        window.addEventListener("keydown", this.changeDirection, false);
    }

    changeDirection = event => {
        const boat = document.getElementById('boat');
        const rightPaddle = document.getElementById('right_paddle');
        const leftPaddle = document.getElementById('left_paddle');
        let boatDirection = this.state.boatDirection;
        let rightPaddleYDirection = this.state.rightPaddleYDirection;
        let rightPaddleZDirection = this.state.rightPaddleZDirection;
        let leftPaddleYDirection = this.state.leftPaddleYDirection;
        let leftPaddleZDirection = this.state.leftPaddleZDirection;
        switch (event.keyCode) {
            // key 'w'
            case 87:
                boatDirection = (boatDirection + 0.5) % 360;
                boat.style.transform = 'rotate(' + boatDirection + 'deg) scale(2)';
                leftPaddleYDirection = leftPaddleYDirection === 0 ? 60 : 0;
                leftPaddle.style.transform = 'rotateY(' + leftPaddleYDirection + 'deg) rotateZ(15deg) scale(0.5)';
                this.setState({
                    boatDirection: boatDirection,
                    leftPaddleYDirection: leftPaddleYDirection,
                    leftPaddleZDirection: leftPaddleZDirection,
                });
                break;
            // key 'i'    
            case 73:
                boatDirection = (boatDirection - 0.5) % 360;
                boat.style.transform = 'rotate(' + boatDirection + 'deg) scale(2)';
                rightPaddleYDirection = rightPaddleYDirection === 0 ? 60 : 0;
                rightPaddle.style.transform = 'rotateY(' + rightPaddleYDirection + 'deg) rotateZ(-15deg) scale(0.5)';
                this.setState({
                    boatDirection: boatDirection,
                    rightPaddleYDirection: rightPaddleYDirection,
                    rightPaddleZDirection: rightPaddleZDirection,
                });
                break;
            default:
                break;
        }
    }

    render() {
        return(
            <div>
                <img id = "boat" src={Hero}></img>
                <Paddle id = "left_paddle" type = {LeftPaddle}/>
                <Paddle id = "right_paddle" type = {RightPaddle}/>
            </div>
        )
    }
}

const Paddle = props => {
    return <div><img id = {props.id} src = {props.type}></img></div>
}

export default Boat;