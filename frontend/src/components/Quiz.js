import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Question from './Question';
import Result from './Result';
import {MCQS_COUNT, SHOW_QUIZ_BAR} from './settings'

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

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: theme.palette.background.paper,
        width: '100%',
        [theme.breakpoints.up('md')]: {
            //backgroundColor: 'red',
        },
    },
}));

export default function Quiz(props) {
    const classes = useStyles();
    const theme = useTheme();
    const [questionId, setQuestionId] = React.useState(0);

    const handleChange = (event, newQuestionId) => {
        setQuestionId(newQuestionId);
    };

    const handleChangeIndex = index => {
        handleChange(null, index);
    };


    return (
        <div className={classes.root}>
            {
                questionId < MCQS_COUNT
                    ?
                    <>
                        {
                            SHOW_QUIZ_BAR
                            &&
                            <AppBar position="static" color="default">
                                <Tabs
                                    value={questionId}
                                    onChange={handleChange}
                                    indicatorColor="primary"
                                    textColor="primary"
                                    variant="scrollable"
                                    aria-label="full width tabs"
                                >
                                    {
                                        props.questions.map((q, index) => <Tab key={q.id}
                                                                               label={index + 1} {...a11yProps(index)}  />)
                                    }
                                </Tabs>
                            </AppBar>
                        }
                        <SwipeableViews
                            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                            index={questionId}
                            onChangeIndex={handleChangeIndex}
                        >
                            {
                                props.questions.map((q, index) =>
                                    <TabPanel key={q.id} value={questionId} index={index}
                                              dir={theme.direction}>
                                        <Question index={index} key={index}
                                                  prev={() => handleChangeIndex(index === 0 ? 0 : index - 1)}
                                                  next={() => handleChangeIndex(index + 1)} q={q}/>
                                    </TabPanel>)
                            }
                        </SwipeableViews>
                    </>
                    :
                    <Result questions={props.questions}/>
            }

        </div>
    );
}
