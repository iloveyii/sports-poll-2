import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

const SERVER = 'http://localhost:8080/api/v1/register';

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.handleButtonClick = this.handleButtonClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            user: {
                email: '',
                password: ''
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

    handleButtonClick(e) {
        e.preventDefault();
        const {user} = this.state;
        if (user.email && user.password && user['confirm-password']) {
            if (user.password !== user['confirm-password']) {
                this.showAlert('Password does not match!');
                return false;
            }
            axios.post(SERVER, {email: user.email, password: user.password},
                {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }).then(response => {
                if (response.status === 201 && response.data.register === 'success') {
                    console.log('Login success');
                    this.props.history.push('/poll')
                } else {
                    console.log('Fail response', response)
                    this.showAlert('Email already registered!');
                }
            })
        } else {
            this.showAlert('Email and Password cannot be blank!');
        }

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

    render() {
        const {alert} = this.state;

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
                            {alert.display &&
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="alert alert-info" role="alert">
                                        <a href="javascript:;" className="alert-link">{alert.msg}</a>.
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
                                            <div className="form-group bmd-form-group text-left">
                                                <label className="bmd-label-floating">Confirm password</label>
                                                <input onChange={e => this.handleChange(e)} id="confirm-password"
                                                       type="password" required className="form-control"/>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <br/>
                                                <br/>
                                                <Link to="/login" className="pull-left nav-link">Login</Link>
                                                <button onClick={e => this.handleButtonClick(e)} type="submit"
                                                        className="btn btn-primary pull-center">Register
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

export default Register;

