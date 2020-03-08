import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import {withStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import ParticlesBg from "particles-bg";
import axios from 'axios';
import Quiz from "./Quiz";
import Copyright from './Copyright';
import mcqs from '../mocks';
import Model from './Model';
import {MCQS_COUNT} from './settings'
import '../App.css';


const styles = theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        justifyContent: 'center',
        alignItems: 'center'
    },
    main: {
        marginTop: theme.spacing(8),
        marginBottom: theme.spacing(2),
        textAlign: 'center',

    },
    grid: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    paper: {
        zIndex: 0,
        position: 'relative',
        margin: theme.spacing(1),
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    svg: {
        width: 100,
        height: 100,
    },
    polygon: {
        fill: theme.palette.common.white,
        stroke: theme.palette.divider,
        strokeWidth: 1,
    },
    footer: {
        padding: theme.spacing(3, 2),
        marginTop: 'auto',
        textAlign: 'center',
        width: '100%',
        backgroundColor:
            theme.palette.type === 'dark' ? theme.palette.grey[800] : theme.palette.grey[200],
    },
});


class App2 extends React.Component {

    constructor(props) {
        super(props);
        this.setQuestionId = this.setQuestionId.bind(this);
        const questions = [];
        const randomMcqs = this.getRandomQuestions(mcqs, MCQS_COUNT);
        randomMcqs.map(mcq => questions.push(new Model(mcq)));
        this.state = {questions: questions, questionId: 0, sports: []};
    }

    componentDidMount() {
        const server = 'http://localhost:8080/api/v1/random-games';
        axios.get(server).then(res => console.log(res.data))
    }

    getData() {
        console.log('Inside getData')
        const server = 'http://localhost:8080/api/v1/random-games';
        axios.get(server, {}).then(res => this.setState({sports: res.data})).catch(error => {
            console.dir(error);
            throw new Error(error);
        })
    }

    getRandomQuestions(mcqs, MCQS_COUNT) {
        const shuffled_array = mcqs.sort(() => 0.5 - Math.random());
        const selected = shuffled_array.slice(0, MCQS_COUNT);
        return selected;
    }

    setQuestionId(id) {
        this.setState({questionId: id});
    }

    render() {
        const {classes} = this.props;

        return (
            <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                            <MenuIcon/>
                        </IconButton>
                        <Typography variant="h6" className={classes.title}>
                            QUIZ
                        </Typography>
                    </Toolbar>
                </AppBar>
                <CssBaseline/>

                <Container component="main" className={classes.main} maxWidth="xl">
                    <Typography variant="h2" component="h1" gutterBottom>
                        Sports pool
                    </Typography>
                    <Typography variant="h5" component="h2" gutterBottom>
                        {'For each questions three alternative options have been given'}
                    </Typography>
                    <Typography variant="body1">You can move back and forth using the buttons previous and
                        next.</Typography>

                    <Grid container spacing={3} className={classes.grid}>
                        <Grid item xs={12} sm={6}>
                            <Paper className={classes.paper}>
                                <Quiz questions={this.state.questions} sports={this.state.sports}/>
                            </Paper>
                        </Grid>
                    </Grid>

                </Container>

                <footer className={classes.footer}>
                    <Container maxWidth="sm">
                        <Typography variant="body1">This a test Quiz app developed in React.</Typography>
                        <Copyright/>
                    </Container>
                </footer>

                <ParticlesBg type="random" bg={true}/>

            </div>
        );
    }
}

export default withStyles(styles)(App2);


