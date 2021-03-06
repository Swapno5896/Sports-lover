import React, { useState,useEffect } from 'react';
import ShowTeams from '../ShowTeams/ShowTeams';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import './Home.css'

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: { padding: theme.spacing(2),textAlign: 'center',color: theme.palette.text.secondary,
    },
  }));
const Home = () => {
    const classes = useStyles();
    const [leags, setLeags] = useState([]);
    useEffect(()=>{
        fetch(`https://www.thesportsdb.com/api/v1/json/1/search_all_leagues.php?c=England&s=Soccer`)
        .then(res=>res.json())
        .then(data=>setLeags(data.countrys))
    },[])
    //backGround color
    const colors = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
    function changeBackgroundColor(){
        var hexColor = '#'
        const randomNumber = getRandomNumber();
        for (let i = 0; i < 6; i++) {
        hexColor += colors[randomNumber];
        }
        console.log(hexColor);
        document.body.style.backgroundColor = hexColor;
     }
    function getRandomNumber() {
        return Math.floor(Math.random() * colors.length);       
      }
     
    return (
        <div >
          <div className={classes.root}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Paper className={classes.paper} id='headeImg'>
                <img style={{height:'200px'}} src="https://i.ibb.co/64Lxv2b/association-football-culture-fan-clip-art-vector-football-figures-thumbnail.jpg" alt=""/>
                </Paper>
              </Grid>
              <h3 style={{margin:'auto', color:'green'}}>World Sports</h3>
              <Grid item xs={12}>
                <Paper className={classes.paper}>
                <button style={{}} onClick={changeBackgroundColor}>Change Background Color</button>
                </Paper>
              </Grid>
            </Grid>
          </div>
            

            <div className={classes.root}>
                <Grid container style={{padding:'0px 20%'}} >
                  {
                      leags.map(leag=><ShowTeams key={leag.idLeague} leag={leag}></ShowTeams>)
                  }
                </Grid>
            </div>
        </div>
    );
};

export default Home;