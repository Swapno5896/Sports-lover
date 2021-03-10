import React, { useState,useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
  useParams
} from "react-router-dom";

const ShowTeamDetail = () => {
    let { idLeague } = useParams();
    console.log(idLeague);
    const [detail, setDetail] = useState([]);
    useEffect(() => {
      fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${idLeague}`)
      .then(res=>res.json())
      .then(data=>setDetail(data.leagues[0]))
    }, [idLeague])
    const {strLeague,strDescriptionEN,strGender} =detail
    console.log(detail);
    return (
        <div>
            <h2>this is  team detail {strLeague}</h2>
            <p>{strDescriptionEN}</p>
        </div>
    );
};

export default ShowTeamDetail;