import React, { useState,useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import ShowTeams from '../ShowTeams/ShowTeams'
//
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';


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
const Home = () => {
    const classes = useStyles();

    const [leags, setLeags] = useState([]);
    useEffect(()=>{
        fetch(`https://www.thesportsdb.com/api/v1/json/1/search_all_leagues.php?c=England&s=Soccer`)
        .then(res=>res.json())
        .then(data=>{
         
            setLeags(data.countrys)
        })
    },[])
    return (
        <div>
            {/* <button><FontAwesomeIcon icon={faCoffee} />Home</button> */}
            <div className={classes.root}>
                <Grid container style={{padding:'0px 20%'}} >
            {
                leags.map(leag=><ShowTeams leag={leag}></ShowTeams>)
            }
                </Grid>
            </div>
           
        </div>
    );
};

export default Home;