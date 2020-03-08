import React from 'react';
import axios from 'axios';

const SERVER = 'http://localhost:8080/api/v1/login';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.handleButtonClick = this.handleButtonClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            user: {
                email: '',
                password: ''
            }
        }
    }

    handleChange(e) {
        e.preventDefault();
        const {user} = this.state;
        user[e.target.id] = e.target.value;
        this.setState({user});
    }

    handleButtonClick(e) {
        e.preventDefault();
        const {user} = this.state;
        if(user.email && user.password)
            axios.post(SERVER, {email:user.email, password:user.password},
                {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }).then(response => {
                    if(response.status === 200 && response.data.login === 'success') {
                        console.log('Login success');
                        this.props.history.push('/poll')
                    } else {
                        console.log('Fail response', response)
                    }
            })

    }

    render() {
        return (
            <div className="row">
                <div className="col-md-4 offset-md-4">
                    <div className="card card-profile">
                        <div className="card-avatar">
                            <a href="javascript:;">
                                <img className="img" src="/images/user-avatar.png"/>
                            </a>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-10 offset-md-1">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="form-group bmd-form-group text-left">
                                                <label className="bmd-label-floating">Email</label>
                                                <input onChange={e => this.handleChange(e)} id="email" type="email"
                                                       required className="form-control"/>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-group bmd-form-group text-left">
                                                <label className="bmd-label-floating">Password</label>
                                                <input onChange={e => this.handleChange(e)} id="password"
                                                       type="password" required className="form-control"/>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <br/>
                                                <br/>
                                                <button onClick={e=>this.handleButtonClick(e)} type="submit" className="btn btn-primary pull-center">Login
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login;

