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
    textAlign: 'center'
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
    console.log('done', idLeague);
    const {strLeague,strDescriptionEN,strGender,intFormedYear,strFanart1,strLogo} =detail
   

    // material ui
    const classes = useStyles();

    // console.log(strGender);
    return (
        <div>
          <div >
          </div>
    <Grid container spacing={3}>       
        <Grid item  xs={12} sm={12} md={12} >
          <Paper className={classes.paper} style={{width:'300px'}}>
          { strFanart1 ?
            <img style={{width:"250%",height:'200px',padding:'0px 50%'}} src={strFanart1} alt=""/>
            :
            <img style={{width:"250%",height:'200px',padding:'0px 50%'}} src={strLogo} alt=""/>
           }
          </Paper>
        </Grid>
      </Grid>
           
         
            {/* <img src="https://i.ibb.co/9Ydw3P1/female.png" alt=""/> */}

            {/* 
             */}
      <Grid container style={{alignItems:'center', padding:'0px 20%'}} >
             

        
        <Grid item xs={3}>
          <Paper className={classes.paper}>
          <h3>{strLeague} {strGender}</h3>
                  <h3>Founded : {intFormedYear}</h3>
                  <h3>Gender : {strGender}</h3>
          </Paper>
        </Grid>

        <Grid item xs={3}>
          <Paper className={classes.paper}>
          { 
                    strGender==='Male' 
                    ? <img style={{width:"40%"}} src="https://i.ibb.co/pr76nbT/male.png" alt=""/>
                    :  <img style={{width:"40%"}} src="https://i.ibb.co/9Ydw3P1/female.png" alt=""/>
                  }
          </Paper>
        </Grid>
            
      </Grid>









      <Grid item  xs={12} sm={12} md={12} style={{padding:'0px 50px'}}>
          <Paper >
            <p>{strDescriptionEN}</p>
            </Paper>
      </Grid>
//





<div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>xs=12</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>xs=6</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>xs=6</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
      </Grid>
    </div>


        </div>
    );
};

export default ShowTeamDetail;