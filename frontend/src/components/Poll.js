import React from 'react';
import axios from "axios";

import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Thanks from './Thanks';

const SHOW_APP_BAR = false;

const HOME_WINS = 'team-a';
const DRAW = 'draw';
const AWAY_WINS = 'team-b';

function TabPanel(props) {
    const {children, value, index, ...other} = props;

    return (
        <Typography
            component="div"
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && <Box p={3}>{children}</Box>}
        </Typography>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};
function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}

class Poll extends React.Component {
    constructor(props) {
        super(props);
        this.state = {questions:[], currentQId: 0, showThanks: false,
            alert: {
                msg:'',
                display: false
            }
        };
        this.handleTabClick = this.handleTabClick.bind(this);
        this.handleRadioClick = this.handleRadioClick.bind(this);
    }

    showAlert(msg) {
        const {alert} = this.state;
        alert.msg = msg;
        alert.display = true;
        this.setState({alert});
        setTimeout(()=>{
            alert.display = false;
            this.setState({alert})
        }, 3000, this);
    }

    componentDidMount() {
        const server = 'http://localhost:8080/api/v1/random-games';
        axios.get(server).then(res => this.setState({questions:res.data}))
    }

    handleTabClick(e, currentQId) {
        e.preventDefault();
        const {questions} = this.state;
        if(currentQId < questions.length) {
            this.setState({currentQId});
        } else {
            this.submitForm();
        }
    }

    submitForm(){
        const server = 'http://localhost:8080/api/v1/login-games';
        const {questions} = this.state;
        axios.post(server, {questions}).then(res => {
            console.log('Posting', res)
            if(!res.data.poll || res.data.poll !== 'success') {
                this.showAlert('You need to login!');
                console.log('You need to login')
            } else {
                this.setState({showThanks: true});
            }
        })
    }

    handleRadioClick(e) {
        e.preventDefault();
        e.stopPropagation();
        const {questions, currentQId} = this.state;
        console.log('Radio :', currentQId, e.target.id, questions[currentQId].checked && questions[currentQId].checked ===HOME_WINS?true:false);
        questions[currentQId].checked = e.target.id;
        setTimeout(()=>{
            this.setState({questions});
        }, 300, this)
    }

    render() {
        const {currentQId, questions, showThanks, alert} = this.state;

        return (
            <div className="row">
                <div className="col-md-4 offset-md-4">
                    <div className="card">
                        <div className="card-header card-header-primary">
                            <h4 className="card-title">Questions poll <strong>[{Number(currentQId)+1}/{ questions && questions.length}]</strong> </h4>
                            <p className="card-category">Complete the following questions</p>
                        </div>
                        <div className="card-body" style={{minHeight: '200px'}}>
                            {alert.display &&
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="alert alert-info" role="alert">
                                        <a href="javascript:;" className="alert-link">{alert.msg}</a>.
                                    </div>
                                </div>
                            </div>
                            }
                            { SHOW_APP_BAR &&
                                <AppBar position="static" color="default">
                                    <Tabs
                                        value={currentQId}
                                        onChange={this.handleTabClick}
                                        indicatorColor="primary"
                                        textColor="primary"
                                        variant="scrollable"
                                        aria-label="full width tabs"
                                    >
                                        {
                                            questions.map((q, index) => <Tab key={q.id}
                                                                             label={index + 1} {...a11yProps(index)}  />)
                                        }
                                    </Tabs>
                                </AppBar>
                            }
                            { showThanks===true ?
                                <Thanks />
                                :
                                <SwipeableViews
                                    axis={'x'}
                                    index={currentQId}
                                    onChangeIndex={() => null}
                                >
                                    {   questions &&
                                        questions.map((q, index) =>
                                            <TabPanel key={q.id} value={currentQId} index={index}
                                                      dir={'x'}>

                                                <form>
                                                    <div className="row">
                                                        <div className="col-md-12">
                                                            <div className="info">
                                                                <div className="icon icon-primary">
                                                                    <i className="material-icons">question_answer</i>
                                                                </div>
                                                                <h4 className="info-title">{q.country}</h4>
                                                                <p><strong>{q.sport} : </strong>{q.name}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-md-12">
                                                            <div className="form-check form-check-radio">
                                                                <label className="form-check-label">
                                                                    <input className="form-check-input" type="radio"
                                                                           name="winnerRadios"
                                                                           onChange={e => this.handleRadioClick(e)}
                                                                           onClick={e => this.handleRadioClick(e)}
                                                                           id={HOME_WINS} value="team-a"
                                                                           checked={q.checked && q.checked === HOME_WINS ? true : false}/>
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
                                                                           onChange={e => this.handleRadioClick(e)}
                                                                           onClick={e => this.handleRadioClick(e)}
                                                                           id={DRAW} value="team-draw"
                                                                           checked={q.checked && q.checked === DRAW ? true : false}/>
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
                                                                           onChange={e => this.handleRadioClick(e)}
                                                                           onClick={e => this.handleRadioClick(e)}
                                                                           id={AWAY_WINS} value="team-b"
                                                                           checked={q.checked && q.checked === AWAY_WINS ? true : false}/>
                                                                    Away team wins
                                                                    <span className="circle">
                                                                    <span className="check"></span>
                                                                </span>
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <button
                                                        onClick={e => this.handleTabClick(e, index === 0 ? 0 : index - 1)}
                                                        type="button"
                                                        className="btn btn-outline-info pull-left">Previous
                                                    </button>
                                                    <button
                                                        onClick={e => this.handleTabClick(e, index < questions.length ? index + 1 : index)}
                                                        type="button"
                                                        className="btn btn-outline-success pull-right">{index < questions.length - 1 ? 'Next' : 'Submit'}</button>
                                                    <div className="clearfix"></div>
                                                </form>

                                            </TabPanel>)
                                    }
                                </SwipeableViews>
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Poll;
