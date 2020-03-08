import React from 'react';


class Poll extends React.Component {

    render() {
        return (
            <div className="row">
                <div className="col-md-4 offset-md-4">
                    <div className="card">
                        <div className="card-header card-header-primary">
                            <h4 className="card-title">Edit Profile</h4>
                            <p className="card-category">Complete your profile</p>
                        </div>
                        <div className="card-body">
                            <form>
                                <div className="row">
                                    <div className="col-md-5">
                                        <div className="form-group">
                                            <label className="bmd-label-floating">Company (disabled)</label>
                                            <input type="text" className="form-control" disabled/>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="form-group">
                                            <label className="bmd-label-floating">Username</label>
                                            <input type="text" className="form-control"/>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="form-group">
                                            <label className="bmd-label-floating">Email address</label>
                                            <input type="email" className="form-control"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label className="bmd-label-floating">Fist Name</label>
                                            <input type="text" className="form-control"/>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label className="bmd-label-floating">Last Name</label>
                                            <input type="text" className="form-control"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="form-check form-check-radio">
                                            <label className="form-check-label">
                                                <input className="form-check-input" type="radio"
                                                       name="exampleRadios"
                                                       id="exampleRadios1" value="option1"/>
                                                Radio is off
                                                <span className="circle">
                                                        <span className="check"></span>
                                                    </span>
                                            </label>
                                        </div>
                                        <div className="form-check form-check-radio">
                                            <label className="form-check-label">
                                                <input className="form-check-input" type="radio"
                                                       name="exampleRadios"
                                                       id="exampleRadios1" value="option1"/>
                                                Radio is off
                                                <span className="circle">
                                                        <span className="check"></span>
                                                    </span>
                                            </label>
                                        </div>
                                        <div className="form-check form-check-radio">
                                            <label className="form-check-label">
                                                <input className="form-check-input" type="radio"
                                                       name="exampleRadios"
                                                       id="exampleRadios1" value="option1"/>
                                                Radio is off
                                                <span className="circle">
                                                        <span className="check"></span>
                                                    </span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <button type="submit" className="btn btn-outline-success pull-right">Update Profile
                                </button>
                                <div className="clearfix"></div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Poll;
