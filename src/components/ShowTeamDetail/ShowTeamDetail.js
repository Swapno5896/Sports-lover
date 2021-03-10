import React, { useState,useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
  useParams
} from "react-router-dom";
// material ui grid
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


const ShowTeamDetail = () => {
    let { idLeague } = useParams();
    console.log(idLeague);
    const [detail, setDetail] = useState([]);
    useEffect(() => {
      fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${idLeague}`)
      .then(res=>res.json())
      .then(data=>setDetail(data.leagues[0]))
    }, [idLeague])
    const {strLeague,strDescriptionEN,strGender,intFormedYear,strFanart1} =detail
   

    // material ui
    const classes = useStyles();

   
    return (
        <div>
    <Grid container spacing={3}>
        
        <Grid item  xs={12} sm={6} md={4} >
          <Paper className={classes.paper}>
          <img style={{width:"250%",height:'200px',padding:'0px 50%'}} src={strFanart1} alt=""/>
          </Paper>
        </Grid>
      </Grid>
           
         
            {/* <img src="https://i.ibb.co/9Ydw3P1/female.png" alt=""/> */}

            {/* 
             */}
             <Grid container spacing={3}>
        
        <Grid item  xs={12} sm={6} md={4} >
          <Paper className={classes.paper}>
            <h3>{strLeague} {strGender}</h3>
            <h3>Founded : {intFormedYear}</h3>
            <h3>Gender : {strGender}</h3>
          </Paper>
        </Grid>
          
        <Grid item  xs={12} sm={6} md={4} >
          <Paper className={classes.paper}>
          {
              strGender===strGender 
              ? <img style={{width:"30%"}} src="https://i.ibb.co/pr76nbT/male.png" alt=""/>
              :  <img style={{width:"30%"}} src="https://i.ibb.co/9Ydw3P1/female.png" alt=""/>
            }
          </Paper>
        </Grid>


        <Grid item  xs={12} sm={12} md={12} >
          <Paper className={classes.paper}><p>{strDescriptionEN}</p></Paper>
        </Grid>
      </Grid>

        </div>
    );
};

export default ShowTeamDetail;