import React from 'react';
import SeaSurface from '../resource/sea_surface.jpeg';
import './Sea.css';

class Sea extends React.Component {
    state = { stopRun: null }

    componentDidMount(){
        window.addEventListener("keydown", this.seaRun, false);
    }

    seaRun = event => {
        const sea = document.getElementById("sea");
        switch (event.keyCode) {
            case 87:
            case 73:
                sea.style.animation = "seaRun 3s linear infinite";
                if (this.state.stopRun) window.clearTimeout(this.state.stopRun);
                const stopRun = window.setTimeout(() => sea.style.animation = "", 500);
                this.setState({stopRun: stopRun});
        }
    }
    render() {
        return (
            <div>
                <img id = "sea" className = "sea" src = {SeaSurface}></img>
            </div>
        )
    }
}

export default Sea;