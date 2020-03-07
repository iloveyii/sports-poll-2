import React from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';


export default function Result(props) {

    const calculateResults = () => {
        let correct = 0;
        let wrong = 0;
        for (let i = 0; i < props.questions.length; i++) {
            const q = props.questions[i];
            if (q.answer === q.correct) {
                correct++;
            } else {
                wrong++;
            }
        }
        return {correct, wrong};
    };

    const {correct, wrong} = calculateResults();
    return (
        <Paper style={{padding: '100px'}}>
            <Typography variant="h3" component="h3" gutterBottom color='primary'>
                Result
            </Typography>

            <Typography variant="h5" component="h3" gutterBottom color='secondary'>
                Correct: {correct}
            </Typography>

            <Typography variant="h5" component="h3" gutterBottom color='secondary'>
                Wrong: {wrong}
            </Typography>

            <Button onClick={() => window.location.reload(false)} style={{margin: '30px 10px 0 0', minWidth: '120px'}}
                    variant="contained"
                    color="secondary">
                Retake Quiz
            </Button>

        </Paper>
    );
}
