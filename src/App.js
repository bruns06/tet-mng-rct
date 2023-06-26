import React, { useState, useEffect } from 'react';
import { Button } from '@material-ui/core';
import { Card } from '@mui/material';
import CardContent from '@mui/material/CardContent';

const App = () => {
  const [activity, setActivity] = useState();
  //const [type, setType] = useState();

  const apiUrl = 'https://www.boredapi.com/api/activity'; 

  useEffect(() => {
    fetch(apiUrl)
      .then(response => response.json())
      .then(json => setActivity(json.activity))
  }, []);

  return(
  <Card className="u-card" variant="outlined" top={{ minWidth: 275 }}>
    <CardContent>
      <div className='card active-card'>
          <h1>Hello !</h1>
          <h3>{activity}</h3>

          <div className='status-bar-context'>
            <div className='status-bar'>

            </div>
          </div>
      <Button variant="outlined" className="button" color="primary" onClick={() => {
    window.location.reload();
  }}>Switch suggestion</Button>
        <style>

          {`
          @keyframes slideInLeft {
            0%   { opacity: 0; transform: translateY(-100%);}
            100% { opacity: 1; transform: translateY(0);}
          }

          .u-card{
            animation: 1.2s cubic-bezier(.37,-0.03,0,1.07) 0s 1 slideInLeft;
          
          }

            .u-card{
              position: relative;
              margin: 0 auto;
              top: 300px;
              width: 50%;
              border: 1px solid black
            }
            h3, h1{
              text-align: center;
            }
            .button{
              margin-left: 40%;
            }
          `}
        </style>
      </div>
      </CardContent>
    </Card>
  )
}

export default App;
