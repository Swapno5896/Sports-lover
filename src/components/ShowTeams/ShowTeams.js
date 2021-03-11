import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Home from '../Home/Home';
import './ShowTeam.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
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
    const {strBadge,idLeague,strLeagueAlternate,strCountry} =props.leag;

    let history = useHistory();
    function handleClick() {
        history.push(`/ShowTeamDetail/${idLeague}`);
      }
    return (

           
                 <Grid item xs={12} sm={6} md={4} >
                    <Paper className={classes.paper} className='team' style={{margin:'9%'}}>
                        <img style={{width:'50%'}} src={strBadge} alt=""/>
                        <h3>{strLeagueAlternate}</h3>
                        
                        <p>{strCountry} </p>
                        <button style={{margin:'0px 40%'}} onClick={handleClick}>Explore <FontAwesomeIcon icon={faArrowRight} /></button>
                        {/* <a href="https://www.facebook.com/"><FontAwesomeIcon icon={faChevronRight} /></a> */}
                    </Paper>
                </Grid> 
              
    );
};

export default ShowTeams;