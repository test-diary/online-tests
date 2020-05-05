import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Radio from '@material-ui/core/Radio';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(100),
      height: theme.spacing(16),
    },
  },
  FormControl: {
    overflow: 'hidden',
  },
  
  RadioGroup: {
    float: 'left',
    clear: 'none',
  },
  
  label: {
    float: 'left',
    clear: 'none',
    display: 'block',
    padding: '0px 1em 0px 8px',
  },
  
  FormControlLabel: {
    float: 'left',
    clear: 'none',
    margin: '2px 0 0 2px',
  }
}));

export default function SimplePaper() {
  const radioOpp = {
    question: "Que. What is your name?",
    opp:{
    first:"Think 1",
    second:"Think 2",
    third:"Think 3",
    fourth:"Think 4",
    }
  }
  return (
    <div>
        <Questions que = {radioOpp}/>
        <Questions que = {radioOpp}/>
        <Questions que = {radioOpp}/>
        <Questions que = {radioOpp}/>
        <Questions que = {radioOpp}/>
        <Questions que = {radioOpp}/>
        <Questions que = {radioOpp}/>
        <Questions que = {radioOpp}/>
    </div>
  );
}

function Questions(props) {
    const classes = useStyles();
    const { que } = props;
    return (
    <div className={classes.root}>
      <Paper elevation={5}>
      <p>{que.question}</p>
      <RadioButtons option = {que.opp} />
        </Paper>
    </div>
    );
  }
  
function RadioButtons(props) {
    const [selectedValue, setSelectedValue] = React.useState('a');
    const handleChange = (event) => {
      setSelectedValue(event.target.value);
    };
    const { option } = props;
    return (
      <div>
        <Radio
          checked={selectedValue === 'a'}
          onChange={handleChange}
          value="a"
          name="radio-button-demo"
          inputProps={{ 'aria-label': 'A' }}
        />
        <label for="a">{option.first}</label>
        <Radio
          checked={selectedValue === 'b'}
          onChange={handleChange}
          value="b"
          name="radio-button-demo"
          inputProps={{ 'aria-label': 'B' }}
        />
        <label for="b">{option.second}</label>
        <Radio
          checked={selectedValue === 'c'}
          onChange={handleChange}
          value="c"
          name="radio-button-demo"
          inputProps={{ 'aria-label': 'C' }}
        />
        <label for="c">{option.third}</label>
        <Radio
          checked={selectedValue === 'd'}
          onChange={handleChange}
          value="d"
          name="radio-button-demo"
          inputProps={{ 'aria-label': 'D' }}
        />
        <label for="d">{option.fourth}</label>
      </div>
    );
  }