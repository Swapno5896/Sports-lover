import React, { useState,useEffect } from "react";
import './ShowTeamDetail.css'

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
// icon
import { FaFacebookF  ,FaWhatsappSquare} from 'react-icons/fa';

import {  AiFillTwitterSquare } from "react-icons/ai";

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
      <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper} id='headeImg'>
          { strFanart1 ?
            <img  src={strFanart1} alt=""/>
            :
            <img  src={strLogo} alt=""/>
           }
          </Paper>
        </Grid>
        {/* done img */}
        <Grid item xs={12} md={6} sm={6}>
          <Paper className={classes.paper}>
          <h3>{strLeague} {strGender}</h3>
                  <h3>Founded : {intFormedYear}</h3>
                  <h3>Gender : {strGender}</h3>
          </Paper>
        </Grid>
        {/* small discription done*/}
        <Grid item xs={12} md={6} sm={6}>
          <Paper className={classes.paper}>

                 {
                    strGender==='Male' 
                    ? <img style={{width:"40%"}} src="https://i.ibb.co/pr76nbT/male.png" alt=""/>
                    :  <img style={{width:"40%"}} src="https://i.ibb.co/9Ydw3P1/female.png" alt=""/>
                  }
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>  <p>{strDescriptionEN}</p></Paper>
        </Grid>
        
      </Grid>
      <footer style={{margin:'30px 40%'}}>
          <a href="https://www.facebook.com/">   <FaFacebookF size='2em'/></a>
          <a href="https://twitter.com/?lang=en"><AiFillTwitterSquare  size='2em's/></a>
          <a href="https://www.whatsapp.com/?lang=en"><FaWhatsappSquare size='2em'/></a>
      </footer>
    </div>
    );
};

export default ShowTeamDetail;