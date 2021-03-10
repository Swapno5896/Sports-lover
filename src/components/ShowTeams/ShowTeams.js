import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Home from '../Home/Home';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useHistory
  } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));

  
const ShowTeams = (props) => {
    const classes = useStyles();
    const {strBadge,idLeague} =props.leag;
    console.log(props.leag);



    let history = useHistory();
    function handleClick() {
        history.push(`/ShowTeamDetail/${idLeague}`);
      }
    return (

           
                 <Grid item xs={12} sm={6} md={4} >
                    <Paper className={classes.paper} style={{margin:'9%', border:'1px solid red'}}>
                        <img style={{width:'50%'}} src={strBadge} alt=""/>
                        <h3>halllo fklsdl</h3>
                        
                        <p>fsdfsd sd  s </p>
                        <button onClick={handleClick}>Detail <FontAwesomeIcon icon={faChevronRight} /></button>
                    </Paper>
                </Grid> 
              
    );
};

export default ShowTeams;