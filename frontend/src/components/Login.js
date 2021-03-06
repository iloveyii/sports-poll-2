import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

let SERVER = process.env.REACT_APP_SERVER_URL ? process.env.REACT_APP_SERVER_URL : '';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.handleButtonClick = this.handleButtonClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            user: {
                email: '',
                password: '',
                ['confirm-password']: '',
            },
            alert: {
                msg: '',
                display: false
            }
        }
    }

    handleChange(e) {
        e.preventDefault();
        const {user} = this.state;
        user[e.target.id] = e.target.value;
        this.setState({user});
    }

    showAlert(msg) {
        const {alert} = this.state;
        alert.msg = msg;
        alert.display = true;
        this.setState({alert});
        setTimeout(() => {
            alert.display = false;
            this.setState({alert})
        }, 3000, this);
    }

    handleButtonClick(e) {
        e.preventDefault();
        const END_POINT = '/api/v1/login';
        const {user} = this.state;
        if (user.email && user.password) {
            axios.post(SERVER + END_POINT, {email: user.email, password: user.password},
                {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }).then(response => {
                if (response.status === 200 && response.data.login === 'success') {
                    console.log('Login success');
                    this.props.history.push('/poll')
                } else {
                    console.log('Fail response', response)
                    this.showAlert('Email or Password is incorrect!');
                }
            })
        } else {
            this.showAlert('Email and Password cannot be blank!');
        }
    }

    render() {
        const {alert} = this.state;

        return (
            <div className="row">
                <div className="col-md-4 offset-md-4">
                    <div className="card card-profile">
                        <div className="card-avatar">
                            <img className="img" src="/images/user-avatar.png"/>
                        </div>
                        <div className="card-body">
                            {alert.display &&
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="alert alert-info" role="alert">
                                    </div>
                                </div>
                            </div>
                            }

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
                                                <Link to="/register" className="pull-left nav-link">Signup</Link>
                                                <button id="btn-login" onClick={e => this.handleButtonClick(e)}
                                                        type="submit" className="btn btn-primary pull-center">Login
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

