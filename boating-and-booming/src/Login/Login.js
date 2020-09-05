import React from 'react';

class Login extends React.Component {
    render() {
        return (
            <div>
                用户名:<input type='text'></input>
                密码:<input type='password'></input>
                <button onClick={() => {window.location.href = '#/gamemode'}}>登陆</button>
            </div>
        )
    }
}

export default Login;