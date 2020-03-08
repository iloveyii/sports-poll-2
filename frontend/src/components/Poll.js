import React from 'react';


class Poll extends React.Component {

    render() {
        return (
            <div className="row">
                <div className="col-md-4 offset-md-4">
                    <div className="card">
                        <div className="card-header card-header-primary">
                            <h4 className="card-title">Questions poll</h4>
                            <p className="card-category">Complete the following questions</p>
                        </div>
                        <div className="card-body">
                            <form>
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="info">
                                            <div className="icon icon-primary">
                                                <i className="material-icons">question_answer</i>
                                            </div>
                                            <h4 className="info-title">Free Chat</h4>
                                            <p>Divide details about your product or agency work into parts. Write a few
                                                lines about each one. A paragraph describing a feature will be
                                                enough.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="form-check form-check-radio">
                                            <label className="form-check-label">
                                                <input className="form-check-input" type="radio"
                                                       name="winnerRadios"
                                                       id="team-a" value="team-a"/>
                                                Home team wins
                                                <span className="circle">
                                                        <span className="check"></span>
                                                    </span>
                                            </label>
                                        </div>
                                        <div className="form-check form-check-radio">
                                            <label className="form-check-label">
                                                <input className="form-check-input" type="radio"
                                                       name="winnerRadios"
                                                       id="team-draw" value="team-draw"/>
                                                Draw
                                                <span className="circle">
                                                        <span className="check"></span>
                                                    </span>
                                            </label>
                                        </div>
                                        <div className="form-check form-check-radio">
                                            <label className="form-check-label">
                                                <input className="form-check-input" type="radio"
                                                       name="winnerRadios"
                                                       id="team-b" value="team-b"/>
                                                Away team wins
                                                <span className="circle">
                                                        <span className="check"></span>
                                                    </span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <button type="submit" className="btn btn-outline-success pull-right">Next</button>
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
