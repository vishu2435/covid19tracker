import React from 'react';
import { Card, CardContent,CardHeader,IconButton, CardActions, Avatar } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import ShareIcon from '@material-ui/icons/Share';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import CountUp from 'react-countup';

export default function OneCard(props){

    return(
        <Card style={props.style}>

            
            <CardContent>
            <Typography style={{fontSize:19}} color="textSecondary" gutterBottom>
            {props.title}

          </Typography>
            <Typography style={{fontSize:22,fontWeight:800,color:"black"}} color="textSecondary" gutterBottom>
            <CountUp
              
                start={0}
                end={props.value}
                duration={0}
                separator=","
            />
          </Typography>
          
          <Typography variant="h5" component="h2" color="textSecondary">
            {props.date}
          </Typography>
            </CardContent>
        </Card>

    )

}

