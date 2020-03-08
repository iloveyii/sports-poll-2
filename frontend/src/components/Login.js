import React from 'react';


class Login extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div className="row">
                <div className="col-md-4 offset-md-4">
                    <div className="card card-profile">
                        <div className="card-avatar">
                            <a href="javascript:;">
                                <img className="img" src="/images/marc.jpg"/>
                            </a>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-10 offset-md-1">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <label className="bmd-label-floating">Email</label>
                                                <input type="email" required className="form-control" />
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <label className="bmd-label-floating">Password</label>
                                                <input type="password" required className="form-control" />
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <button type="submit" className="btn btn-primary pull-center">Login
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

